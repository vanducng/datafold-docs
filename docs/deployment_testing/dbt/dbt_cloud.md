---
sidebar_position: 1
title: dbt Cloud
description: ""
pagination_prev: deployment_testing/source_control
pagination_next: deployment_testing/data_apps
---
:::info
You will need a dbt **Team** account or higher to access the dbt Cloud API that Datfold uses to connect the accounts.
:::

<!-- ### Connect your accounts using a token
- You will need either a [Service Token](https://docs.getdbt.com/docs/dbt-cloud-apis/service-tokens) or a [User Token](https://docs.getdbt.com/docs/dbt-cloud-apis/user-tokens):
    - **Service Token (Recommended):** 
        - Navigate to **Account Settings -> Service Tokens -> + New Token** <br/><br/>
            ![](/img/dbt_cloud_add_service_token.png) <br/><br/>
            
            - Add a Token Name
            - Add a Permission Set <br/><br/>
                ![](/img/dbt_cloud_add_service_token_permission.png) <br/><br/>
                - Permission Set: Member
                - Project: All Projects, or check only the projects to use with Datafold
                - Save <br/><br/>
                ![](/img/dbt_cloud_service_token.png) <br/><br/>
    - **User Token:**
        - Navigate to **Your Profile -> API Access**
            - Copy -->

## Requirements

1. dbt Cloud API Key
2. Pull/Merge Requests Job
3. Artifacts Job

### dbt Cloud API Key
You will need either a [Service Token](https://docs.getdbt.com/docs/dbt-cloud-apis/service-tokens) or a [User Token](https://docs.getdbt.com/docs/dbt-cloud-apis/user-tokens) to connect Datafold to your dbt Cloud account.

### Pull/Merge Request Job
In dbt Cloud, [set up dbt Cloud CI](https://docs.getdbt.com/docs/deploy/cloud-ci-job) so that your Pull/Merge Request job runs when you open or update a Pull/Merge Request.

dbt Cloud CI requires you to create at least two dbt Cloud jobs: a Production job and a Pull/Merge Request job. To integrate with Datafold, you may need to create additional jobs, which are described below.

### Artifacts Job

We recommend creating a new dbt Cloud job that generates production artifacts on a scheduled basis. The simpliest method is to set up a job that executes the `dbt compile` command on an hourly basis. 

 <details>
    <summary>Continuous Deployment</summary>
    Alternatively, you can set up continuous deployment by <a href="../dbt/dbt_cloud">creating a Merge Trigger Production Job</a> using a tool like GitHub Actions
  </details>

## Configuration

Complete the configuration by specifying the following fields:

| Field Name      | Description |
| ----------- | ----------- |
| Repository | Select the repository that generates the webhooks and where pull/merge requests will be raised. |
| Data Source | Select the data source where the code that is changed in the repository will run.|
| Name | An identifier used in Datafold to identify this CI configuration. |
| API Key | This is the token created [above](dbt_cloud#dbt-cloud-api-key). |
| Account name  | This becomes selectable when a valid API key is filled in. After that, select your account to use. |
| Job that creates dbt artifacts | This becomes selectable after a valid API key is filled in. Select the job that builds [dbt artifacts](dbt_cloud#artifacts-job). |
| Skip for pull/merge requests | When selected, the Datafold CI pipeline won't be run on pull/merge requests. |
| Job that builds pull/merge requests  | This becomes selectable after a valid API key is filled in. Select the job that builds [pull/merge requests](dbt_cloud#pullmerge-request-job). |
| Primary key tag | See [dbt Integration](../dbt_adv_config). This should be set to a value such as `primary-key` which will also be used in your dbt project configuration (yaml files and config blocks). |
| Base branch commit selection strategy | Select "Merge Base" to compare your PR to the commit in the main branch that is defined as part of the PR. Select "Latest" to compare your PR branch to the latest commit in the main branch.  |
| Sync metadata on every push to production | When selected, this will sync the manifest.json artifact from the dbt run with Datafold every time a push happens on the default branch.|
| Sync metadata on a schedule | Set a schedule to synchronize the dbt metadata (columns and table descriptions, tags, owners, etc), use this when you run the production job on a schedule. |
| Files to ignore | If defined, the files matching the pattern will be ignored in the PRs. The pattern uses the syntax of `.gitignore`. Excluded files can be re-included by using the negation; re-included files can be later re-excluded again to narrow down the filter. For example, to exclude everything except the `/dbt` folder, but not the dbt `.md` files, do:`*!dbt/*dbt/*.md`.|
| CI Status Reporting | If the checkbox is disabled, the errors in the CI runs will be reported back to GitHub/GitLab as successes, to keep the check "green" and not block the PR/MR. By default (enabled), the errors are reported as failures and may prevent PR/MRs from being merged. |
| Slim CI | If this box is checked, data diffs will be run only for models changed in a pull/merge request. You'll be able to automatically diff downstream models within your PR. |
| Require 'datafold' label to be present on pull/merge request | When this is selected, the Datafold CI process will only run when the 'datafold' label has been applied. This label needs to be created manually in GitHub or GitLab, and the title or name must match 'datafold' exactly. |
| Sampling tolerance | The tolerance to apply in sampling for all data diffs. |
| Sampling confidence | The confidence to apply when sampling. |
| Sampling Threshold | Sampling will be disabled automatically if tables are smaller than specified threshold. If unspecified, default values will be used depending on the Data Source type. |

Click save. Now that you've set up the integration, Datafold will diff your impacted tables whenever you push commits to a PR. A summaryof the diff will appear in GitHub, and detailed results will appear in the Datafold app.