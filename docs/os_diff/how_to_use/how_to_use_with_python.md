---
sidebar_position: 3
title: Python
---

:::info
dbt users should check out our [dbt Integration](/docs/os_diff/dbt_integration.md), where you'll find everything you need to get started.
:::

API reference: [https://data-diff.readthedocs.io/en/latest/](https://data-diff.readthedocs.io/en/latest/)

Example 1: Diff tables in mysql and postgresql

```python
# Optional: Set logging to display the progress of the diff
import logging
logging.basicConfig(level=logging.INFO)

from data_diff import connect_to_table, diff_tables

table1 = connect_to_table("postgresql:///", "table_name", "id")
table2 = connect_to_table("mysql:///", "table_name", "id")

for different_row in diff_tables(table1, table2):
    plus_or_minus, columns = different_row
    print(plus_or_minus, columns)
```

Example 2: Connect to snowflake using dictionary configuration

```python
SNOWFLAKE_CONN_INFO = {
    "driver": "snowflake",
    "user": "erez",
    "account": "whatever",
    "database": "TESTS",
    "warehouse": "COMPUTE_WH",
    "role": "ACCOUNTADMIN",
    "schema": "PUBLIC",
    "key": "snowflake_rsa_key.p8",
}

snowflake_table = connect_to_table(SNOWFLAKE_CONN_INFO, "table_name")  # Uses id by default
```

Run `help(connect_to_table)` and `help(diff_tables)` or read our API reference to learn more about the different options:

- [connect_to_table()](https://data-diff.readthedocs.io/en/latest/python-api.html#data_diff.connect_to_table)

- [diff_tables()](https://data-diff.readthedocs.io/en/latest/python-api.html#data_diff.diff_tables)





