---
sidebar_position: 3
title: Redshift
description: "Setting up Redshift on Datafold"
---
**Steps to complete:**

* [Run SQL Script for Permissions](redshift.md#run-sql-script)
* [Configure your data source in Datafold](redshift.md#configure-in-datafold)

### Run SQL Script
To connect to Amazon Redshift, you need to create a user with read-only access to all tables in all schemas, write access to Datafold-specific schema for temporary tables, and the ability to access SQL logs:

```sql
/* Create schema for Datafold to write temporary tables to.
    This is the only schema where Datafold will modify anything in your environment.*/

CREATE SCHEMA datafold_tmp;

/* Since Redshift does not allow granting read-only access to ALL schemas which
   Datafold needs to correctly work, you need to grant superuser level privilege to
   the datafold user: */
      
CREATE USER datafold CREATEUSER PASSWORD 'SOMESECUREPASSWORD';


/* The following permission allows Datafold to pull SQL logs and construct
   column-level lineage */

ALTER USER datafold WITH SYSLOG ACCESS UNRESTRICTED;
```

### Configure in Datafold

| Field Name      | Description |
| ----------- | ----------- |
| Name     | A name given to the data source within Datafold |
| Host   | The hostname of your cluster. (Go to Redshift in your AWS console, select your cluster, the hostname is the endpoint listed at the top of the page) |
| Port   | Redshift connection port; default value is 5432 |
| User   | The user created in our SQL script - `datafold`  |
| Password  | The password created in our SQL script |
| Database Name  | The name of the Redshift database you want to connect to |
| Schema for temporary tables  | The schema created in our SQL script - `datafold_tmp` |

Click **Create**. Your data source is ready!