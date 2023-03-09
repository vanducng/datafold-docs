---
title: dbt Integration
---

### Investigating data changes to your dbt models as you code

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

That's all you need to run `data-diff --dbt` in your dbt development workflow! The results should look like this.


```mdx-code-block
import DataDiffDbtCLI from '../../static/img/data-diff--dbt__cli_output.png';

```

<center><img src={DataDiffDbtCLI} style={{width: '75%'}}/></center>

<br/><br/><br/>

The next steps are for adding the `--cloud` flag, which is available to Datafold Cloud customers.

### Visualizing value-level data differences in Datafold Cloud

6. [Create a Datafold API Key](../api/api-overview.md#create-a-datafold-api-key).

7. Store your Datafold API Key as an environmental variable. We suggest storing it in a file like `.zshrc` so it runs automatically when you open a new terminal.
```bash
export DATAFOLD_API_KEY=xxxxxxxxx
```

8. Update your `dbt_project.yml` to indicate your Datafold Data Source ID. You can find this value in the Datafold application under Settings > Integrations > Data Warehouses.

```mdx-code-block
import DataSourceId from '../../static/img/data_source_id.png';

```

<center><img src={DataSourceId} style={{width: '75%'}}/></center>

```bash
vars:
  data_diff:
    prod_database: <PROD_DATABASE_NAME>
    prod_schema: <PROD_SCHEMA_NAME> # optional -- use if project deploys to a single schema
    datasource_id: 1234
```

9. Add the `--cloud` flag to your `data-diff` command. 

This will submit the data diff to Datafold Cloud, where you can see the summary results as well as value-level differences and other reports.

```bash
dbt run --select <model(s)>
data-diff --dbt --cloud
```

```mdx-code-block
import DataDiffDbtCloudCLI from '../../static/img/data-diff--dbt--cloud__cli_output.png';

```

<center><img src={DataDiffDbtCloudCLI} style={{width: '75%'}}/></center>

```mdx-code-block
import ValuesTab from '../../static/img/values_tab.png';

```

<center><img src={ValuesTab} style={{width: '75%'}}/></center>