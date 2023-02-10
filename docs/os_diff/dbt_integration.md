---
title: dbt Integration
---

:::info

Database support for our CLI is currently limited to Snowflake and BigQuery, but we are in the process of adding more databases. If you don't see your database, [let us know](https://github.com/datafold/data-diff/issues/new?assignees=&labels=new-db-driver&template=request-support-for-a-database.md&title=Add+support+for+%3Cdatabase+name%3E)!

:::

#### To get started, open your terminal and follow the steps below.

1. Navigate to your dbt project.
    ```bash
    cd <path/to/dbt_project>
    ```
2. Install our free, open-source CLI tool and the appropriate database connector.
    ```bash
    pip install data-diff 'sqeleton[snowflake]'
    ```
    Or

    ```bash
    pip install data-diff google-cloud-bigquery
    ```
3. Add the following data_diff variables to your dbt_project.yml.
    ```bash
    vars:
      data_diff:
        prod_database: <PROD_DATABASE_NAME>
        prod_schema: <PROD_SCHEMA_NAME>
    ```
4. Tag the primary key in your model's `schema.yaml`. To learn more about setting primary key tags, check out [this section](../integrations/orchestration/dbt_adv_config#tag-primary-keys-in-dbt-models).
    ```yaml
    models:
      - name: users
        columns:
          - name: user_id
            tags:
              - primary-key
    ```
5. Once you make a change, run your dbt model add the data-diff command.
    ```bash
    dbt run --select <model> && data-diff --dbt
    ```