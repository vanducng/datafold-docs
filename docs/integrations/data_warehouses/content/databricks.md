---
sidebar_position: 4
title: Databricks
description: "Setting up Databricks on Datafold"
---
**Steps to complete:**

* [Generate a Personal Access Token](databricks.md#generate-a-personal-access-token)
* [Retrieve SQL endpoint settings](databricks.md#retrieve-sql-endpoint-settings)
* [Configure your data source in Datafold](databricks.md#configure-in-datafold)

### Generate a Personal Access Token

Visit **Settings** → **User Settings**, and then switch to **Personal Access Tokens** tab.

![](../../../../static/img/databricks_new_token.png)

Then, click **Generate new token**. Save the generated token somewhere, we will need it later on.

### Retrieve SQL endpoint settings

In **SQL** mode, navigate to **SQL Endpoints**.

![](../../../../static/img/databricks_sql_endpoint.png)


Choose the preferred endpoint and copy the following fields values from its **Connection Details** tab:

* Server hostname
* HTTP path

![](../../../../static/img/databrick_connection_details.png)

### Configure in Datafold

| Field Name      | Description |
| ----------- | ----------- |
| Name     | A name given to the data source within Datafold |
| Host   | The hostname retrieved in the `Connection Details` tab  |
| HTTP Path   | The HTTP Path retrieved in the `Connection Details` tab        |
| Access Token   | The token retrieved in [Generate a Personal Access Token](databricks.md#generate-a-personal-access-token)       |
| Database  | The catalog and database name of your Databricks account. Formatted as `catalog_name.database_name` (In most cases, `catalog_name` is `hive_metastore`.) |

Click **Create**. Your data source is ready!