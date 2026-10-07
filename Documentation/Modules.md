# System Modules

The ROAMER INDIA – STAFF & OPERATIONS MANAGEMENT SYSTEM is organized into multiple modules for managing staff information, attendance, daily operations, financial records, and payroll.

## 1. Employee Management

The Employee Management module maintains the master information of company employees.

### Main Information

- Employee ID
- Employee Name
- Department
- Designation
- Contact Number
- Email
- Joining Date
- Employee Status

The Employees sheet acts as the central employee reference for other modules.

## 2. Attendance Management

The Attendance Management module records employee check-in and check-out information.

### Main Functions

- Employee check-in
- Employee check-out
- Attendance status
- Late arrival tracking
- Working hours calculation
- Attendance remarks

Attendance submissions are collected through Google Forms and processed using Google Apps Script.

## 3. Leave Management

The Leave Management module is used to record employee leave requests.

### Main Functions

- Leave request submission
- Centralized leave records
- Management visibility of leave information

The module provides a structured way to maintain employee leave information.

## 4. Daily Work Log

The Daily Work Log module records the daily activities and work performed by employees.

### Main Information

- Employee Name
- Department
- Designation
- Date
- Task / Work Description
- Priority
- Start Time
- Status
- Remarks
- Pending / Carry-Forward Work
- Daily Summary

This module helps maintain a structured record of daily work activities.

## 5. Money Received

The Money Received module records incoming company payments.

### Main Information

- Received Date
- Amount
- Money Received From
- Money Received For
- Payment Mode
- Transaction / Reference ID
- Remarks

The recorded information contributes to the Financial Summary.

## 6. Expense Management

The Expense Management module records company purchases and expenses.

### Main Information

- Expense Date
- Expense Category
- Expense Description
- Amount
- Paid By
- Payment Mode
- Vendor / Paid To
- Remarks
- Bill / Receipt

### Automation

Google Apps Script processes expense form submissions and creates structured expense records.

The system also maintains:

- Expense ID
- Source Row
- Record Key

Source-row information helps identify the original form submission and prevent the same form submission from being processed more than once.

## 7. Financial Summary

The Financial Summary module provides an overview of recorded financial activity.

### Main Metrics

- Total Money Received
- Total Expenses
- This Month Expenses
- Remaining Balance

The summary uses recorded Money Received and Expense information.

## 8. Salary / Payroll

The Salary / Payroll module is designed to maintain employee salary and payroll records.

### Main Information

- Salary ID
- Employee ID
- Employee Name
- Department
- Salary Month
- Basic Salary
- Allowance
- Other Earnings
- Gross Salary
- Deduction
- Salary Advance
- Net Payable
- Payment Date
- Payment Status
- Remarks

## 9. Google Apps Script Automation

Google Apps Script provides the automation layer of the system.

### Main Automation Areas

- Attendance form processing
- Employee ID lookup
- Check-in processing
- Check-out processing
- Late-minute calculation
- Working-hours calculation
- Expense form processing
- Expense ID generation
- Source-row tracking
- Duplicate form-submission protection

## 10. Module Relationship

```text
                    ROAMER INDIA
                         |
                         v
              Staff & Operations System
                         |
        +----------------+----------------+
        |                |                |
        v                v                v
      Staff          Operations        Finance
        |                |                |
   +----+----+       +---+---+       +---+---+
   |         |       |       |       |       |
   v         v       v       v       v       v
Employee  Attendance Work   Leave  Money   Expenses
Management             Log          Received
   |         |          |      |       \       /
   +---------+----------+------+--------+------+
                         |
                         v
                  Salary / Payroll
```

## 11. Module Summary

| Module | Primary Purpose |
|---|---|
| Employee Management | Maintain employee master records |
| Attendance Management | Track employee check-in, check-out, attendance, and working hours |
| Leave Management | Maintain employee leave records |
| Daily Work Log | Record daily employee work and tasks |
| Money Received | Record incoming company payments |
| Expense Management | Record company expenses and purchases |
| Financial Summary | Provide an overview of recorded financial activity |
| Salary / Payroll | Maintain employee salary and payroll records |
| Apps Script Automation | Process submissions and automate system operations |
