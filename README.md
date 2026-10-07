# ROAMER INDIA – STAFF & OPERATIONS MANAGEMENT SYSTEM

## Project Overview

The **ROAMER INDIA – STAFF & OPERATIONS MANAGEMENT SYSTEM** is a centralized staff and operations management system built using Google Forms, Google Sheets, and Google Apps Script.

The system is designed to manage employee information, attendance, leave requests, daily work logs, money received, expenses, financial records, and payroll through a centralized workflow.

## Technology Stack

- Google Forms – Data collection and user input
- Google Sheets – Centralized database and records
- Google Apps Script – Automation and business logic
- GitHub – Source code and project documentation

## System Modules

### 1. Employee Management

Manages employee information including:

- Employee ID
- Employee Name
- Department
- Designation
- Contact Number
- Email
- Joining Date
- Employee Status

### 2. Attendance Management

The attendance module manages employee check-in and check-out records.

Key features:

- Employee check-in
- Employee check-out
- Attendance status
- Late arrival tracking
- Working hours calculation
- Daily attendance records

### 3. Leave Management

The leave management module is used to record and manage employee leave requests.

It helps maintain centralized leave records and provides better visibility of employee leave information.

### 4. Daily Work Log

Employees can submit their daily work information through the Daily Work Log form.

The system records:

- Task / Work Description
- Priority
- Status
- Remarks
- Pending / Carry-Forward Work
- Daily Summary

### 5. Money Received

The Money Received module records incoming company payments.

Information includes:

- Received Date
- Amount
- Money Received From
- Money Received For
- Payment Mode
- Transaction / Reference ID
- Remarks

### 6. Expense Management

The Expense Management module records company expenses and purchases.

Information includes:

- Expense Date
- Expense Category
- Expense Description
- Amount
- Paid By
- Payment Mode
- Vendor / Paid To
- Remarks
- Bill / Receipt

### 7. Financial Summary

The Financial Summary provides an overview of recorded company financial activity.

It includes:

- Total Money Received
- Total Expenses
- This Month Expenses
- Remaining Balance

### 8. Salary / Payroll

The Salary / Payroll module is designed to maintain employee salary and payroll records.

It can include:

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

## System Architecture

```text
Employees / Staff
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
       +-------------------+
       |                   |
       v                   v
Staff Management      Operations Management
       |                   |
       +---------+---------+
                 |
                 v
        Management Records
                 |
        +--------+--------+
        |        |        |
        v        v        v
   Attendance  Finance  Payroll
```

## Data Flow

```text
Employee / Staff
       |
       v
Google Form Submission
       |
       v
Google Sheets
       |
       v
Google Apps Script
       |
       +----------------------+
       |          |           |
       v          v           v
 Attendance   Expenses   Work / HR Records
       |          |           |
       +----------+-----------+
                  |
                  v
        Centralized Management
```

## Attendance Workflow

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

## Expense Workflow

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
Expense Management Sheet
       |
       v
Financial Summary
```

## Financial Workflow

```text
Money Received Form
        |
        v
Money Received Records
        |
        +------------------+
                           |
                           v
                    Financial Summary
                           ^
                           |
        +------------------+
        |
        v
Expense Management
```

## Key Features

- Centralized employee management
- Attendance tracking
- Check-in and check-out management
- Late attendance tracking
- Leave request management
- Daily work reporting
- Money received tracking
- Expense tracking
- Financial summary
- Salary / payroll management
- Google Apps Script automation
- Centralized Google Sheets database
- Structured management records

## Benefits

- Reduces manual record keeping
- Centralizes staff and operational information
- Improves data organization
- Reduces repetitive administrative work
- Provides better financial visibility
- Improves attendance tracking
- Makes daily work reporting easier
- Provides a structured foundation for future HR and business management features

## Project Structure

```text
roamer-india-staff-hr-operations-management-system/
│
├── README.md
│
├── Google-Apps-Script/
│   └── Code.gs
│
├── Google-Forms/
│   └── Forms-Structure.md
│
├── Google-Sheets/
│   └── Sheets-Structure.md
│
├── Documentation/
│   ├── System-Overview.md
│   ├── System-Workflow.md
│   ├── Modules.md
│   └── Setup-Guide.md
│
├── Screenshots/
│   ├── attendance.png
│   ├── daily-work-log.png
│   ├── financial-summary.png
│   ├── expenses.png
│   └── salary-payroll.png
│
└── Sample-Data/
    └── README.md
```

## Security & Privacy

This project should not contain real confidential company information in the public GitHub repository.

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

Only sanitized source code, documentation, screenshots, and fictional sample data should be included in the public repository.

## Future Improvements

Possible future improvements include:

- Employee document management
- Automated salary calculations
- Advanced payroll management
- HR dashboard
- Management dashboard
- Automated reports
- Email notifications
- Advanced attendance reports
- Leave balance tracking
- Financial analytics
- Role-based access control
- Improved data validation
- Backup and recovery features

## Purpose

The purpose of this project is to create a centralized and automated management system for staff, HR-related records, attendance, daily operations, expenses, financial records, and payroll using Google Workspace technologies.

## Author

**Satyam Raut**

B.Tech in Computer Science Engineering – Cyber Security

Full Stack Developer
