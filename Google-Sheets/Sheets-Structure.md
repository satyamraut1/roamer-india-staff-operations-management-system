# Google Sheets Structure

Google Sheets acts as the centralized database and management layer of the ROAMER INDIA – STAFF & OPERATIONS MANAGEMENT SYSTEM.

The workbook contains separate sheets for employee records, attendance, leave, daily work logs, financial records, expenses, and payroll.

## 1. Employees

Stores the master information of company employees.

| Column | Field |
|---|---|
| A | Employee ID |
| B | Employee Name |
| C | Department |
| D | Designation |
| E | Contact Number |
| F | Email |
| G | Joining Date |
| H | Status |

## 2. Attendance

Stores processed employee attendance records.

| Column | Field |
|---|---|
| A | Date |
| B | Employee ID |
| C | Employee Name |
| D | Check In |
| E | Check Out |
| F | Attendance Status |
| G | Late Minutes |
| H | Working Hours |
| I | Remarks |

## 3. Attendance Raw Responses

Stores attendance submissions received from the Attendance Google Form.

| Column | Field |
|---|---|
| A | Timestamp |
| B | Employee Name |
| C | Action |
| D | Remarks |

Google Apps Script processes these submissions and updates the Attendance sheet.

## 4. Leave Requests

Stores employee leave request information submitted through the Leave Request Form.

The sheet is used to maintain centralized leave records and provide management visibility of employee leave information.

## 5. Daily Work Log

Stores employee daily work and task information.

| Field |
|---|
| Timestamp |
| Employee Name |
| Department |
| Designation |
| Date |
| Task / Work Description |
| Priority |
| Start Time |
| Status |
| Remarks |
| Pending / Carry-Forward Work |
| Daily Summary |

## 6. Money Received Raw Responses

Stores submissions from the Money Received Google Form.

| Field |
|---|
| Timestamp |
| Received Date |
| Amount |
| Money Received From |
| Money Received For |
| Payment Mode |
| Transaction / Reference ID |
| Remarks |

## 7. Expense Raw Responses

Stores submissions from the Expense Entry Google Form.

| Field |
|---|
| Timestamp |
| Expense Date |
| Expense Category |
| Expense Description |
| Amount |
| Paid By |
| Payment Mode |
| Vendor / Paid To |
| Remarks |
| Bill / Receipt |

## 8. Expenses

Stores processed company expense records.

| Column | Field |
|---|---|
| A | Expense ID |
| B | Timestamp |
| C | Expense Date |
| D | Expense Category |
| E | Expense Description |
| F | Amount |
| G | Paid By |
| H | Payment Mode |
| I | Vendor / Paid To |
| J | Remarks |
| K | Bill / Receipt |
| L | Source Row |
| M | Record Key |

The Expenses sheet is populated through Google Apps Script after an expense form submission.

The system also maintains source-row information to help prevent the same form submission from being processed more than once.

## 9. Financial Summary

Provides a centralized summary of recorded company financial activity.

| Row | Metric |
|---|---|
| 1 | Total Money Received |
| 2 | Total Expenses |
| 3 | This Month Expenses |
| 4 | Remaining Balance |

The Financial Summary uses recorded Money Received and Expense data to provide a simplified overview of the company's financial records.

## 10. Salary / Payroll

Stores employee salary and payroll information.

| Column | Field |
|---|---|
| A | Salary ID |
| B | Employee ID |
| C | Employee Name |
| D | Department |
| E | Salary Month |
| F | Basic Salary |
| G | Allowance |
| H | Other Earnings |
| I | Gross Salary |
| J | Deduction |
| K | Salary Advance |
| L | Net Payable |
| M | Payment Date |
| N | Payment Status |
| O | Remarks |

## Sheet Relationship

```text
Google Forms
     |
     v
Raw Response Sheets
     |
     v
Google Apps Script
     |
     +--------------------------+
     |            |             |
     v            v             v
Attendance     Expenses    Work / HR Records
     |            |             |
     +------------+-------------+
                  |
                  v
       Centralized Google Sheets
                  |
        +---------+---------+
        |         |         |
        v         v         v
     Finance    Payroll   Management
```

## Data Management

Google Sheets provides the centralized storage layer for the system.

Raw response sheets preserve submitted form data, while management sheets contain structured records used for operational tracking, reporting, and management purposes.
