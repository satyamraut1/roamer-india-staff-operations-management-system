# System Overview

## Project Name

**ROAMER INDIA – STAFF & OPERATIONS MANAGEMENT SYSTEM**

## Objective

The ROAMER INDIA – STAFF & OPERATIONS MANAGEMENT SYSTEM is a centralized management system designed to organize staff information, attendance, leave requests, daily work logs, financial records, expenses, and payroll.

The system uses Google Forms for data collection, Google Sheets for centralized data storage, and Google Apps Script for automation and business logic.

## System Architecture

The system follows a three-layer structure:

1. **Input Layer** – Google Forms
2. **Data Layer** – Google Sheets
3. **Automation Layer** – Google Apps Script

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

## Input Layer – Google Forms

Google Forms are used as the primary input interface for staff and operational data.

Forms are used for areas such as:

- Attendance
- Leave Requests
- Daily Work Log
- Money Received
- Expense Entry

Form submissions are automatically stored in the corresponding Google Sheets response sheets.

## Data Layer – Google Sheets

Google Sheets acts as the centralized database and management layer.

The workbook contains structured sheets for:

- Employee Management
- Attendance
- Leave Requests
- Daily Work Log
- Money Received
- Expense Management
- Financial Summary
- Salary / Payroll

Raw response sheets preserve form submissions, while management sheets contain structured records used for operational management.

## Automation Layer – Google Apps Script

Google Apps Script provides the automation and business logic layer of the system.

It is used to process form submissions and automate operations such as:

- Attendance check-in processing
- Attendance check-out processing
- Late attendance calculation
- Working hours calculation
- Employee ID lookup
- Expense record processing
- Expense ID generation
- Duplicate form-submission protection
- Updating management records

## Core Management Areas

The system is organized around two major areas:

### Staff Management

Includes:

- Employee information
- Employee IDs
- Departments
- Designations
- Attendance
- Leave requests
- Daily work logs
- Salary / Payroll

### Operations Management

Includes:

- Money received
- Expense management
- Financial summary
- Operational records

## System Benefits

The centralized structure helps:

- Reduce manual record keeping
- Organize staff information
- Automate repetitive processes
- Improve attendance tracking
- Maintain structured expense records
- Provide financial visibility
- Centralize operational information
- Create a foundation for future HR and management improvements

## Technology Used

```text
Google Forms
     |
     v
Google Sheets
     |
     v
Google Apps Script
     |
     v
GitHub Documentation & Source Code
```

## Project Purpose

The project demonstrates how Google Workspace technologies can be combined to build a practical staff and operations management system with centralized data management, automated workflows, and structured documentation.
