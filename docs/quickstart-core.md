---
sidebar_position: 2
title: Quickstart
---

:::info

Database support for our CLI is currently limited to Snowflake, but we are in the process of adding more databases. If you don't see your database, [let us know](https://github.com/datafold/data-diff/issues/new?assignees=&labels=new-db-driver&template=request-support-for-a-database.md&title=Add+support+for+%3Cdatabase+name%3E)!

:::


`data-diff --dbt` gives a quick print out summary of changes so you can move fast and (not) break stuff!


#### To get started, open your terminal and follow the steps below.

1. In your dbt project, install our free, open-source CLI tool and the Snowflake database connector.
    ```bash
    pip install data-diff 'data-diff[snowflake]'
    ```
2. In your dbt project, add the following data_diff variables and tag the primary keys for each model. To learn more about setting primary key tags, check out [this section](../integrations/orchestration/dbt_adv_config#tag-primary-keys-in-dbt-models).
    ```bash
    #dbt_project.yml
    vars:
      data_diff:
        prod_database: <PROD_DATABASE_NAME>
        prod_schema: <PROD_SCHEMA_NAME> # optional -- use if project deploys to a single schema
    ``` 
    ```yaml
    #schema.yaml
    models:
      - name: users
        columns:
          - name: user_id
            tags:
              - primary-key
    ```
3. Run your dbt model with the data-diff command.
    ```bash
    dbt run --select <model> && data-diff --dbt
    ```