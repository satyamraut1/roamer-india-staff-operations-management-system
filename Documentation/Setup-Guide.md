# Setup Guide

This guide explains the basic steps required to set up the ROAMER INDIA – STAFF & OPERATIONS MANAGEMENT SYSTEM using Google Forms, Google Sheets, and Google Apps Script.

## 1. Requirements

The system requires:

- A Google account
- Google Sheets
- Google Forms
- Google Apps Script
- GitHub account for source-code and documentation management

## 2. Create the Google Sheets Workbook

Create a Google Sheets workbook for the management system.

Recommended workbook name:

**ROAMER INDIA – STAFF & OPERATIONS MANAGEMENT SYSTEM**

Create the required sheets for:

- Employees
- Attendance
- Attendance Raw Responses
- Leave Requests
- Daily Work Log
- Money Received Raw Responses
- Expense Raw Responses
- Expenses
- Financial Summary
- Salary / Payroll

## 3. Create Google Forms

Create the required Google Forms for data collection.

Recommended forms:

- ROAMER INDIA – ATTENDANCE
- Leave Request Form
- Daily Work Log Form
- ROAMER INDIA – MONEY RECEIVED
- ROAMER INDIA – EXPENSE ENTRY

Configure the form fields according to the structure documented in:

`Google-Forms/Forms-Structure.md`

## 4. Connect Forms to Google Sheets

Connect each Google Form to its corresponding Google Sheets response destination.

Form submissions should be stored in the relevant raw response sheets.

```text
Google Form
     |
     v
Form Response Sheet
     |
     v
Google Apps Script
     |
     v
Management Sheet
```

## 5. Add Google Apps Script

Open the Google Sheets workbook and access:

**Extensions → Apps Script**

Copy the project script from:

`Google-Apps-Script/Code.gs`

Paste the code into the Apps Script editor.

The script contains automation for selected system operations including attendance and expense processing.

## 6. Configure Triggers

Create the required Apps Script triggers for form submission processing.

For attendance:

```text
Function: onAttendanceSubmit
Event source: From spreadsheet
Event type: On form submit
```

For expenses:

```text
Function: onExpenseSubmit
Event source: From spreadsheet
Event type: On form submit
```

Make sure the triggers are connected to the correct Google Sheets workbook.

## 7. Configure Sheet Structure

Ensure the sheet names and column structures match the documentation.

Important sheets include:

- Employees
- Attendance
- Attendance raw responses
- Expense Raw Responses
- Expenses
- Money Received Raw Responses
- Financial Summary
- Salary / Payroll

The Apps Script depends on the expected sheet names and structure.

## 8. Add Employee Records

Add employee master information to the Employees sheet.

Required information includes:

- Employee ID
- Employee Name
- Department
- Designation
- Contact Number
- Email
- Joining Date
- Status

Employee names should match the names used in the relevant forms so that the automation can correctly identify employees.

## 9. Test Attendance

After configuring the Attendance Form and Apps Script:

1. Submit a test Check In.
2. Verify the submission appears in Attendance raw responses.
3. Verify the Attendance sheet is updated.
4. Submit a test Check Out.
5. Verify the check-out time is recorded.
6. Verify working hours are calculated.

## 10. Test Expense Processing

After configuring the Expense Entry Form:

1. Submit a test expense.
2. Verify the submission appears in Expense Raw Responses.
3. Verify the Expenses sheet receives the processed record.
4. Verify an Expense ID is generated.
5. Verify the Source Row and Record Key fields are populated.
6. Verify the Financial Summary reflects the recorded expense where applicable.

## 11. Test Money Received

Submit a test Money Received entry and verify that:

1. The submission appears in the Money Received response sheet.
2. The recorded amount is available for financial calculations.
3. The Financial Summary reflects the recorded money received.

## 12. Test Daily Work Log

Submit a test Daily Work Log entry and verify that the information is stored correctly.

Check:

- Employee Name
- Department
- Designation
- Date
- Task / Work Description
- Priority
- Status
- Remarks
- Pending / Carry-Forward Work
- Daily Summary

## 13. Verify Financial Summary

After testing Money Received and Expenses, verify the Financial Summary.

Check the following metrics:

- Total Money Received
- Total Expenses
- This Month Expenses
- Remaining Balance

## 14. Security and Privacy

Do not use real confidential company information when publishing the project source code publicly on GitHub.

Do not upload:

- Real employee personal information
- Phone numbers
- Personal email addresses
- Salary information
- Bank details
- Customer information
- Financial transaction records
- Passwords
- API keys
- Authentication tokens
- Private Google Sheet or Form links
- Other confidential company information

Use fictional or sanitized data for testing and demonstrations.

## 15. GitHub Project Setup

The GitHub repository should contain source code and documentation rather than real company records.

Recommended structure:

```text
roamer-india-staff-hr-operations-management-system/
│
├── README.md
├── Google-Apps-Script/
│   └── Code.gs
├── Google-Forms/
│   └── Forms-Structure.md
├── Google-Sheets/
│   └── Sheets-Structure.md
├── Documentation/
│   ├── System-Overview.md
│   ├── System-Workflow.md
│   ├── Modules.md
│   └── Setup-Guide.md
├── Screenshots/
└── Sample-Data/
```

## 16. Final Testing Checklist

Before using the system, verify:

- [ ] Employees sheet is configured
- [ ] Attendance Form is connected
- [ ] Attendance trigger is configured
- [ ] Leave Request Form is configured
- [ ] Daily Work Log Form is configured
- [ ] Money Received Form is connected
- [ ] Expense Entry Form is connected
- [ ] Expense trigger is configured
- [ ] Expense records are created correctly
- [ ] Expense IDs are generated
- [ ] Financial Summary is calculating correctly
- [ ] Salary / Payroll sheet is configured
- [ ] No confidential data is included in the public GitHub repository

## 17. Maintenance

The system should be periodically reviewed to ensure:

- Form fields remain consistent with the Sheets structure.
- Apps Script triggers are active.
- Management sheets contain accurate records.
- Financial formulas are working correctly.
- Employee information is up to date.
- Public GitHub files do not contain confidential information.
