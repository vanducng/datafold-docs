---
sidebar_position: 1
title: Prerequisites
description: Prerequisites to integrate Datafold with dbt Cloud
---
# dbt Cloud

### Prerequisites
- To configure dbt Cloud, you must first connect a [Data Source](integrations/data_warehouses/dw_overview.md) and connect a [GitHub](/integrations/git/github.md) or [GitLab](/integrations/git/gitlab.md) account.
- You will need a dbt **Team** account or higher to access the dbt API Datafold.
- You will need either a [Service Token](https://docs.getdbt.com/docs/dbt-cloud-apis/service-tokens) or a [User Token](https://docs.getdbt.com/docs/dbt-cloud-apis/user-tokens):
    - **Service Token (Recommended):** 
        - Navigate to **Account Settings -> Service Tokens -> + New Token** <br/><br/>
            ![](../../../../static/img/dbt_cloud_add_service_token.png) <br/><br/>
            
            - Add a Token Name
            - Add a Permission Set <br/><br/>
                ![](../../../../static/img/dbt_cloud_add_service_token_permission.png) <br/><br/>
                - Permission Set: Member
                - Project: All Projects, or check only the projects to use with Datafold
                - Save <br/><br/>
                ![](../../../../static/img/dbt_cloud_service_token.png) <br/><br/>
    - **User Token:**
        - Navigate to **Your Profile -> API Access**
            - Copy
- In dbt Cloud, configure a production job and a Pull Request job, and [set up dbt Cloud CI](https://docs.getdbt.com/docs/deploy/cloud-ci-job) so that your Pull Request job runs when you open or update a Pull Request.