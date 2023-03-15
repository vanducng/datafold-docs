---
sidebar_position: 1
id: open_source
title: Open Source
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Use Datafold Open Source during development see a summary of how code changes impact your data.

### Install data-diff

Navigate to your dbt project, and install data-diff and a database connector.

<Tabs
  defaultValue="snowflake"
  values={[
    {label: 'Snowflake', value: 'snowflake'},
    {label: 'BigQuery', value: 'bigquery'},
    {label: 'Redshift', value: 'redshift'},
    {label: 'PostgreSQL', value: 'postgres'},
    {label: 'Databricks', value: 'databricks'},
    {label: 'DuckDB', value: 'duckdb'},
  ]}>
  <TabItem value="snowflake">

  ```zsh
  pip install data-diff 'data-diff[snowflake]' -U
  ```

  </TabItem>
  <TabItem value="bigquery">

  ```zsh
  pip install data-diff google-cloud-bigquery -U
  ```
  <details>
    <summary>Additional BigQuery details</summary>
    Only dbt projects that use the <a href="https://docs.getdbt.com/reference/warehouse-setups/bigquery-setup#oauth-via-gcloud">OAuth via gcloud</a> connection method are currently supported.
    <br/> <br/>
    For example, run: <br/> <code>gcloud auth application-default login</code> <br/>
    <br/>
    Before running: <br/> <code>dbt run --select &lt;MODEL&gt; && data-diff --dbt</code> <br/>
  </details>

  </TabItem>
  <TabItem value="redshift">

  ```zsh
  pip install data-diff 'data-diff[redshift]' -U
  ```

  </TabItem>
  <TabItem value="postgres">

  ```zsh
  pip install data-diff 'data-diff[postgres]' -U
  ```

  </TabItem>
  <TabItem value="databricks">

  ```zsh
  pip install data-diff 'data-diff[databricks]' -U
  ```

  </TabItem>
  <TabItem value="duckdb">

  ```zsh
  pip install data-diff 'data-diff[duckdb]' -U
  ```

  </TabItem>
</Tabs>

### Configure your dbt Project

Add the following variables to **dbt_project.yml** and tag the primary keys for each model in **schema.yml**. 

  ```yaml
  #dbt_project.yml
  vars:
    data_diff:
      prod_database: <PROD_DATABASE_NAME>
      prod_schema: <PROD_SCHEMA_NAME> # optional - single schema deployments
  ``` 
  
  ```yaml
  #schema.yaml
  models:
    - name: <MODEL_NAME>
      columns:
        - name: <COLUMN_NAME>
          tags:
            - primary-key
  ```
  To learn more about setting primary key tags, check out [this section](../integrations/orchestration/dbt_adv_config#tag-primary-keys-in-dbt-models).

### Run with --dbt

Run your dbt model with `data-diff --dbt` to see the impact that your model change had on the data.
    
  ```bash
  # as one command
  dbt run --select <MODEL> && data-diff --dbt
  ```
  ```bash
  # as separate commands
  dbt run --select <MODEL>
  data-diff --dbt
  ```