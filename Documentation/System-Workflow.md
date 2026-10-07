# System Workflow

This document describes the main workflows used in the ROAMER INDIA – STAFF & OPERATIONS MANAGEMENT SYSTEM.

## 1. Attendance Workflow

The Attendance module collects employee check-in and check-out submissions through Google Forms.

```text
Employee
   |
   v
Attendance Form
   |
   v
Attendance Raw Responses
   |
   v
Google Apps Script
   |
   +------------------+
   |                  |
   v                  v
 Check In          Check Out
   |                  |
   v                  v
Attendance Record / Working Hours
```

### Check-In Process

1. Employee submits the Attendance Form with the **Check In** action.
2. The form submission is stored in the Attendance raw response sheet.
3. Google Apps Script processes the submitted row.
4. The employee name is matched with the Employees sheet to find the Employee ID.
5. The attendance date and check-in time are recorded.
6. Attendance status and late minutes are calculated.
7. The attendance record is added to the Attendance sheet.

### Check-Out Process

1. Employee submits the Attendance Form with the **Check Out** action.
2. Google Apps Script identifies the employee and current date.
3. The latest open check-in record for the employee is located.
4. The check-out time is recorded.
5. Working hours are calculated.
6. Any checkout remarks are added to the attendance record.

## 2. Leave Request Workflow

The Leave Request process is used to collect employee leave requests.

```text
Employee
   |
   v
Leave Request Form
   |
   v
Leave Request Records
   |
   v
Management Review
   |
   v
Leave Record
```

The Leave Request Form provides a centralized method for recording employee leave information.

## 3. Daily Work Log Workflow

Employees use the Daily Work Log Form to record their daily activities.

```text
Employee
   |
   v
Daily Work Log Form
   |
   v
Daily Work Log Sheet
   |
   v
Management Review
```

The work log records information such as:

- Task / Work Description
- Priority
- Status
- Remarks
- Pending / Carry-Forward Work
- Daily Summary

This provides a structured record of daily employee activities.

## 4. Money Received Workflow

The Money Received module records incoming company payments.

```text
Payment Received
       |
       v
Money Received Form
       |
       v
Money Received Raw Responses
       |
       v
Money Received Records
       |
       v
Financial Summary
```

The recorded information includes the received date, amount, source, purpose, payment mode, transaction/reference ID, and remarks.

## 5. Expense Workflow

The Expense Management module records company purchases and expenses.

```text
Employee / Staff
       |
       v
Expense Entry Form
       |
       v
Expense Raw Responses
       |
       v
Google Apps Script
       |
       v
Expenses Sheet
       |
       v
Financial Summary
```

### Expense Processing

1. An expense is submitted through the Expense Entry Form.
2. The submission is stored in Expense Raw Responses.
3. Google Apps Script reads the exact submitted row.
4. The expense information is processed.
5. An Expense ID is generated.
6. The record is added to the Expenses sheet.
7. Source-row information is maintained for form-submission tracking.
8. The expense becomes part of the financial records.

## 6. Financial Workflow

The financial workflow combines recorded money received and expenses.

```text
Money Received
      |
      v
Money Received Records
      |
      +-------------------+
                          |
                          v
                   Financial Summary
                          ^
                          |
      +-------------------+
      |
      v
Expenses
```

The Financial Summary provides:

- Total Money Received
- Total Expenses
- This Month Expenses
- Remaining Balance

## 7. Payroll Workflow

The Salary / Payroll module is designed to maintain employee salary records.

```text
Employee Information
        |
        v
Salary / Payroll Records
        |
        v
Salary Calculation
        |
        v
Net Payable
        |
        v
Payment Record
```

Payroll records can contain salary information such as basic salary, allowances, other earnings, deductions, salary advances, net payable amount, payment date, and payment status.

## 8. Overall System Workflow

The overall system connects staff inputs, centralized records, automation, and management information.

```text
Employees / Staff
       |
       v
Google Forms
       |
       v
Raw Response Sheets
       |
       v
Google Apps Script
       |
       +-----------------------------+
       |              |              |
       v              v              v
Attendance        Expenses      Daily Work / HR
       |              |              |
       +--------------+--------------+
                      |
                      v
             Management Records
                      |
              +-------+-------+
              |       |       |
              v       v       v
           Finance  Payroll  Reports
```

## 9. Data Flow Summary

```text
Input
  |
  v
Google Forms
  |
  v
Google Sheets
  |
  v
Google Apps Script
  |
  v
Processed Records
  |
  v
Management & Reporting
```

The system provides a centralized workflow where form submissions are collected, stored, processed, and organized into structured management records.
