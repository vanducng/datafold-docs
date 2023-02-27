---
sidebar_position: 2
title: Quickstart
---

The fastest way to get started is with Datafold Open-Source data-diff.

### To get started, open your terminal and follow the steps below.

1. Start by installing data-diff in your dbt project.
    ```bash
    pip install data-diff
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