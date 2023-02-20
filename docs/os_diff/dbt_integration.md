---
title: dbt Integration
---

:::info

Database support for our CLI is currently limited to Snowflake and BigQuery ([via gcloud oauth](https://docs.getdbt.com/reference/warehouse-setups/bigquery-setup#oauth-via-gcloud)), but we are in the process of adding more databases. If you don't see your database, [let us know](https://github.com/datafold/data-diff/issues/new?assignees=&labels=new-db-driver&template=request-support-for-a-database.md&title=Add+support+for+%3Cdatabase+name%3E)!

:::

```mdx-code-block
import DbtDemo from '../../static/img/dbt_demo.gif';

```
`data-diff --dbt` gives a quick print out summary of changes so you can move fast and (not) break stuff!

<center><img src={DbtDemo} style={{width: '75%'}}/></center>


#### To get started, open your terminal and follow the steps below.

1. Navigate to your dbt project.
    ```bash
    cd <path/to/dbt_project>
    ```
2. Install our free, open-source CLI tool and the connector for your database.

    - Snowflake:
      ```bash
      pip install data-diff 'data-diff[snowflake]' -U
      ```

    - BigQuery:
      ```bash
      pip install data-diff google-cloud-bigquery -U
      ```
      <details>
        <summary>Additional BigQuery details</summary>
        Only dbt projects that use the <a href="https://docs.getdbt.com/reference/warehouse-setups/bigquery-setup#oauth-via-gcloud">OAuth via gcloud</a> connection method are currently supported.
        <br/>
        <br/>
        For example, run:
        <br/>
        <code>gcloud auth application-default login</code>
        <br/>
        Before:
        <br/>
        <code>dbt run --select &lt;model(s)&gt; && data-diff --dbt</code>
        <br/>
        
      </details>
    

3. Add the following data_diff variables to your dbt_project.yml.
    ```bash
    vars:
      data_diff:
        prod_database: <PROD_DATABASE_NAME>
        prod_schema: <PROD_SCHEMA_NAME> # optional -- use if project deploys to a single schema
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
5. Once you make a change, run a `dbt` command followed by the `data-diff` command. All dbt models built in the `dbt` command will be diffed by `data-diff`.
    ```bash
    dbt run --select <model(s)> && data-diff --dbt
    ```
    Or

    ```bash
    dbt run --select <model(s)>
    data-diff --dbt
    ```