---
sidebar_position: 2
id: cloud
title: Cloud
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Want to see even more? **Datafold Cloud** gives you insight into value-level changes.

:::note
Set up Datafold's [open-source data-diff](/development_testing/open_source) before configuring the cloud integration below.
:::

### Create an Account

:::info
Datafold Cloud is currently in private beta. [Let us know](mailto:support@datafold.com?subject=Interested%20in%20Cloud%20Beta) if you are interested in participating.
:::

<!-- Create a [Datafold account](https://app.datafold.com/org-signup). -->

### Configure a Data Source

To configure a Data Source, navigate to **Admin** &rarr; **Settings** &rarr; **Integrations** &rarr; **Data warehouses** and click **Add new integration** and follow the prompts. For more information, check out our [Data Source configuration guides](/deployment_testing/data_sources).

After you **Test and Save**, add the Data Source ID (which can be found on the Data warehouses page) to your **dbt_project_yml**.
    
  ```yaml
  # dbt_project.yml
  vars:
    data_diff:
        ...
        datasource_id: <DATA_SOURCE_ID>
  ```

### Generate an API Key

To generate a personal API key, navigate to **Admin** &rarr; **Settings** &rarr; **Account** and click **Create API Key**. 

Copy and export your API Key as an environment variable. We suggest storing it in a file like `.zshrc` or `.bash_profile`, but you can also run the command below directly in your project.

  ```bash
  export DATAFOLD_API_KEY=XXXXXXXXX
  ``` 

### Run with --cloud

Run your dbt model with `--cloud` to see the impact that your model change had on the data.
    
  ```zsh
  dbt run --select <MODEL> && data-diff --dbt --cloud
  ```