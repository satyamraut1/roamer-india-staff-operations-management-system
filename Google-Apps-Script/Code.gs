function onAttendanceSubmit(e) {

  if (!e || !e.range) return;

  const ss = e.source;
  const responseSheet = e.range.getSheet();

  // Only process Attendance form responses
  if (responseSheet.getName() !== "Attendance raw responses") {
    return;
  }

  // Get submitted row directly from the sheet
  const row = e.range.getValues()[0];

  const timestamp = new Date(row[0]);
  const employeeName = String(row[1] || "").trim();
  const action = String(row[2] || "").trim();
  const remarks = String(row[3] || "").trim();

  const attendanceSheet = ss.getSheetByName("Attendance");
  const employeesSheet = ss.getSheetByName("Employees");

  if (!attendanceSheet) {
    throw new Error('Sheet "Attendance" not found.');
  }

  if (!employeesSheet) {
    throw new Error('Sheet "Employees" not found.');
  }

  // ==========================================
  // FIND EMPLOYEE ID
  // Employees sheet:
  // Column A = Employee ID
  // Column B = Employee Name
  // ==========================================

  let employeeID = "";

  const employeeLastRow = employeesSheet.getLastRow();

  if (employeeLastRow >= 2) {

    const employeeData = employeesSheet
      .getRange(2, 1, employeeLastRow - 1, 2)
      .getValues();

    for (let i = 0; i < employeeData.length; i++) {

      const id = String(employeeData[i][0] || "").trim();
      const name = String(employeeData[i][1] || "").trim();

      if (name === employeeName) {
        employeeID = id;
        break;
      }
    }
  }

  if (!employeeID) {
    throw new Error(
      'Employee ID not found for employee: ' + employeeName
    );
  }

  // ==========================================
  // DATE WITHOUT TIME
  // ==========================================

  const date = new Date(timestamp);
  date.setHours(0, 0, 0, 0);

  // ==========================================
  // CHECK-IN
  // ==========================================

  if (action === "Check In") {

    const checkInTime = timestamp;

    let attendanceStatus = "Present";
    let lateMinutes = 0;

    // Office starts at 10:00 AM
    const officeStart = new Date(timestamp);
    officeStart.setHours(10, 0, 0, 0);

    // After 10:30 AM = Half Day
    const halfDayTime = new Date(timestamp);
    halfDayTime.setHours(10, 30, 0, 0);

    // After 10:30 AM
    if (checkInTime > halfDayTime) {

      attendanceStatus = "Half Day";

      lateMinutes = Math.round(
        (checkInTime - officeStart) / 60000
      );

    }

    // Between 10:00 and 10:30
    else if (checkInTime > officeStart) {

      attendanceStatus = "Present - Late";

      lateMinutes = Math.round(
        (checkInTime - officeStart) / 60000
      );
    }

    // Add attendance row
    attendanceSheet.appendRow([
      date,
      employeeID,
      employeeName,
      checkInTime,
      "",
      attendanceStatus,
      lateMinutes,
      "",
      remarks
    ]);

    return;
  }

  // ==========================================
  // CHECK-OUT
  // ==========================================

  if (action === "Check Out") {

    const lastRow = attendanceSheet.getLastRow();

    if (lastRow < 2) {
      throw new Error(
        "No Check-In record exists in Attendance."
      );
    }

    const data = attendanceSheet
      .getRange(2, 1, lastRow - 1, 9)
      .getValues();

    // Search from latest row backwards
    for (let i = data.length - 1; i >= 0; i--) {

      const sheetDate = data[i][0];
      const sheetEmployeeID =
        String(data[i][1] || "").trim();

      const checkIn = data[i][3];
      const existingCheckOut = data[i][4];

      if (
        sheetDate instanceof Date &&
        sheetEmployeeID === employeeID
      ) {

        const existingDate = new Date(sheetDate);
        existingDate.setHours(0, 0, 0, 0);

        // Same employee + same date + not already checked out
        if (
          existingDate.getTime() === date.getTime() &&
          !existingCheckOut &&
          checkIn instanceof Date
        ) {

          const rowNumber = i + 2;

          // Calculate working hours
          const workingHours =
            (timestamp - checkIn) / (1000 * 60 * 60);

          // Check-Out
          attendanceSheet
            .getRange(rowNumber, 5)
            .setValue(timestamp);

          // Working Hours
          attendanceSheet
            .getRange(rowNumber, 8)
            .setValue(
              Number(workingHours.toFixed(2))
            );

          // Add checkout remarks if provided
          if (remarks) {
            attendanceSheet
              .getRange(rowNumber, 9)
              .setValue(remarks);
          }

          return;
        }
      }
    }

    throw new Error(
      "No open Check-In found for " +
      employeeName +
      " today."
    );
  }
}
function normalizeExpenseValue(value) {
  if (value instanceof Date) {
    return Utilities.formatDate(
      value,
      Session.getScriptTimeZone(),
      "yyyy-MM-dd HH:mm:ss"
    );
  }

  return String(value ?? "")
    .trim()
    .toLowerCase()
    .replace(/\s+/g, " ");
}


// =====================================================
// ONE-TIME SETUP FOR EXISTING EXPENSE RECORDS
// =====================================================

function setupExistingExpenseKeys() {

  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const expenseSheet = ss.getSheetByName("Expenses");

  if (!expenseSheet) {
    throw new Error("Expenses sheet not found.");
  }

  expenseSheet.getRange("L1").setValue("Source Row");
  expenseSheet.getRange("M1").setValue("Record Key");

  const lastRow = expenseSheet.getLastRow();

  if (lastRow < 2) {
    return;
  }

  const data = expenseSheet
    .getRange(2, 1, lastRow - 1, 13)
    .getValues();

  const keys = [];

  data.forEach(row => {

    // C:K = expense information
    const expenseDate = row[2];
    const category = row[3];
    const description = row[4];
    const amount = row[5];
    const paidBy = row[6];
    const paymentMode = row[7];
    const vendor = row[8];
    const remarks = row[9];
    const receipt = row[10];

    if (
      expenseDate === "" &&
      category === "" &&
      description === "" &&
      amount === "" &&
      paidBy === "" &&
      paymentMode === "" &&
      vendor === "" &&
      remarks === "" &&
      receipt === ""
    ) {
      keys.push([""]);
      return;
    }

    const recordKey = [
      normalizeExpenseValue(expenseDate),
      normalizeExpenseValue(category),
      normalizeExpenseValue(description),
      normalizeExpenseValue(amount),
      normalizeExpenseValue(paidBy),
      normalizeExpenseValue(paymentMode),
      normalizeExpenseValue(vendor),
      normalizeExpenseValue(remarks),
      normalizeExpenseValue(receipt)
    ].join("|");

    keys.push([recordKey]);
  });

  expenseSheet
    .getRange(2, 13, keys.length, 1)
    .setValues(keys);

}


// =====================================================
// MAIN EXPENSE FORM SUBMISSION
// =====================================================

function onExpenseSubmit(e) {

  const ss = SpreadsheetApp.getActiveSpreadsheet();

  const rawSheet = ss.getSheetByName("Expense Raw Responses");
  const expenseSheet = ss.getSheetByName("Expenses");

  if (!rawSheet || !expenseSheet) {
    throw new Error("Expense sheet not found.");
  }

  // Prevent simultaneous executions
  const lock = LockService.getScriptLock();
  lock.waitLock(30000);

  try {

    // =================================================
    // GET EXACT SOURCE ROW
    // =================================================

    const sourceRow = e.range.getRow();


    // =================================================
    // MAKE SURE BACKEND COLUMNS EXIST
    // =================================================

    expenseSheet.getRange("L1").setValue("Source Row");
    expenseSheet.getRange("M1").setValue("Record Key");


    // =================================================
    // READ EXACT FORM RESPONSE ROW
    // =================================================

    const data = rawSheet
      .getRange(
        sourceRow,
        1,
        1,
        rawSheet.getLastColumn()
      )
      .getValues()[0];


    const timestamp = data[0];
    const expenseDate = data[1];
    const category = data[2];
    const description = data[3];
    const amount = data[4];
    const paidBy = data[5];
    const paymentMode = data[6];
    const vendor = data[7];
    const remarks = data[8];
    const receipt = data[9];


    // =================================================
    // CREATE RECORD KEY FOR REFERENCE / AUDIT
    // =================================================

    const recordKey = [

      normalizeExpenseValue(expenseDate),
      normalizeExpenseValue(category),
      normalizeExpenseValue(description),
      normalizeExpenseValue(amount),
      normalizeExpenseValue(paidBy),
      normalizeExpenseValue(paymentMode),
      normalizeExpenseValue(vendor),
      normalizeExpenseValue(remarks),
      normalizeExpenseValue(receipt)

    ].join("|");


    const lastRow = expenseSheet.getLastRow();


    // =================================================
    // DUPLICATE PROTECTION
    //
    // ONLY SOURCE ROW IS USED TO IDENTIFY
    // THE SAME FORM SUBMISSION.
    //
    // This means:
    // Same details + different date = ALLOWED
    // Same details + different submission = ALLOWED
    // Same form submission processed twice = BLOCKED
    // =================================================

    if (lastRow >= 2) {

      const existingSourceRows =
        expenseSheet
          .getRange(
            2,
            12,
            lastRow - 1,
            1
          )
          .getValues()
          .flat()
          .map(value => String(value).trim());


      if (
        existingSourceRows.includes(
          String(sourceRow).trim()
        )
      ) {

        console.log(
          "Duplicate form submission blocked. Source Row: " +
          sourceRow
        );

        return;
      }
    }


    // =================================================
    // GENERATE NEXT EXPENSE ID
    // =================================================

    let nextNumber = 1;


    if (lastRow >= 2) {

      const ids =
        expenseSheet
          .getRange(
            2,
            1,
            lastRow - 1,
            1
          )
          .getValues()
          .flat();


      const numbers =
        ids
          .map(id => {

            const match =
              String(id).match(/^EXP(\d+)$/);

            return match
              ? Number(match[1])
              : 0;

          })
          .filter(number => number > 0);


      if (numbers.length > 0) {

        nextNumber =
          Math.max(...numbers) + 1;

      }
    }


    const expenseId =
      "EXP" +
      String(nextNumber).padStart(3, "0");


    // =================================================
    // INSERT EXACTLY ONE EXPENSE RECORD
    // =================================================

    expenseSheet.appendRow([

      expenseId,
      timestamp,
      expenseDate,
      category,
      description,
      amount,
      paidBy,
      paymentMode,
      vendor,
      remarks,
      receipt,
      sourceRow,
      recordKey

    ]);


    console.log(
      "Expense successfully added: " +
      expenseId +
      " | Source Row: " +
      sourceRow
    );


  } finally {

    lock.releaseLock();

  }

}
