# Google Forms Structure

The system uses Google Forms as the input layer for collecting staff, attendance, work, financial, and expense-related information.

## 1. Attendance Form

**Form Name:** ROAMER INDIA – ATTENDANCE

### Fields

| Field | Description |
|---|---|
| Employee Name | Name of the employee |
| Action | Check In / Check Out |
| Remarks | Optional remarks |

The submitted attendance data is stored in the **Attendance raw responses** sheet and processed using Google Apps Script.

## 2. Leave Request Form

The Leave Request Form is used by employees to submit leave requests.

### Purpose

- Record employee leave requests
- Maintain centralized leave records
- Provide management visibility of leave information

## 3. Daily Work Log Form

The Daily Work Log Form is used to record daily employee work activities.

### Fields

| Field | Description |
|---|---|
| Employee Name | Employee submitting the work log |
| Department | Employee department |
| Designation | Employee designation |
| Date | Work date |
| Task / Work Description | Description of completed work |
| Priority | Task priority |
| Start Time | Work start time |
| Status | Current task status |
| Remarks | Additional information |
| Pending / Carry-Forward Work | Work to be continued |
| Daily Summary | Summary of the day's work |

## 4. Money Received Form

**Form Name:** ROAMER INDIA – MONEY RECEIVED

### Fields

| Field | Description |
|---|---|
| Received Date | Date payment was received |
| Amount (₹) | Amount received |
| Money Received From | Source of payment |
| Money Received For | Purpose of payment |
| Payment Mode | Cash / UPI / Bank Transfer / Debit/Credit Card / Other |
| Transaction / Reference ID | Payment reference |
| Remarks | Additional information |

## 5. Expense Entry Form

**Form Name:** ROAMER INDIA – EXPENSE ENTRY

### Fields

| Field | Description |
|---|---|
| Expense Date | Date of expense |
| Expense Category | Category of expense |
| Expense Description | Description of purchase or expense |
| Amount (₹) | Expense amount |
| Paid By | Employee who paid the expense |
| Payment Mode | Cash / UPI / Bank Transfer / Debit/Credit Card / Other |
| Vendor / Paid To | Vendor or person receiving payment |
| Remarks | Additional information |
| Bill / Receipt | Uploaded bill or receipt |

### Bill / Receipt Upload

- Accepted formats: Images and PDF
- Maximum files: 1
- Maximum file size: 10 MB

## Form-to-Sheet Workflow

```text
Employee / Staff
       |
       v
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
       |
       v
Centralized Records
```

## Form Integration

Google Forms are connected to Google Sheets so that submitted responses are automatically stored in the corresponding response sheets.

Google Apps Script processes selected form submissions and transfers or updates information in the relevant management sheets.
