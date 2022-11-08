---
sidebar_position: 1
title: Command line
---

To run `data-diff` from the command line, run this command:

`data-diff DB1_URI TABLE1_NAME DB2_URI TABLE2_NAME [OPTIONS]`

Let's break this down. Assume there are two tables stored in two databases, and you want to know the differences between those tables.

- `DB1_URI` will be a string that `data-diff` uses to connect to the database where the first table is stored.
- `TABLE1_NAME` is the name of the table in the `DB1_URI` database.
- `DB2_URI` will be a string that `data-diff` uses to connect to the database where the second table is stored.
- `TABLE2_NAME` is the name of the second table in the `DB2_URI` database.
- `[OPTIONS]` can be replaced with a variety of additional commands, [detailed here](./options).


#### Code Example: Diff Tables Between Databases
Here's an example command for your copy/pasting, taken from the screenshot above when we diffed data between Snowflake and Postgres.

```
data-diff \
  postgresql://<username>:'<password>'@localhost:5432/<database> \
  <table> \
  "snowflake://<username>:<password>@<password>/<DATABASE>/<SCHEMA>?warehouse=<WAREHOUSE>&role=<ROLE>" \
  <TABLE> \
  -k activity_id \
  -c activity \
  -w "event_timestamp < '2022-10-10'"
```

Note that several options (`-k`, `-c`, `-w`) are included in the command. Be sure to review and reference all the options you may use to construct your data-diff commands, which are documented [here](./options).

#### Code Example: Diff Tables Within a Database (available in pre release)

Here's a code example from [the video](about), where we compare data between two Snowflake tables within one database.

```
data-diff \
  "snowflake://<username>:<password>@<password>/<DATABASE>/<SCHEMA_1>?warehouse=<WAREHOUSE>&role=<ROLE>" <TABLE_1> \
  <SCHEMA_2>.<TABLE_2> \
  -k org_id \
  -c created_at -c is_internal \
  -w "org_id != 1 and org_id < 2000" \
  -m test_results_%t \
  --materialize-all-rows \
  --table-write-limit 10000
```

In both code examples, I've used `<>` carrots to represent values that **should be replaced with your values** in the database connection strings. For the flags (`-k`, `-c`, etc.), I opted for "real" values (`org_id`, `is_internal`) to give you a more realistic view of what your command will look like.

#### Getting tired of entering all this text into the command line?

Consider using a [TOML configuration file](./how_to_use_with_toml)!