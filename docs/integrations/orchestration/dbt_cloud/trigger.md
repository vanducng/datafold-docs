---
sidebar_position: 3
title: Trigger
description: Triggering dbt Cloud jobs on commit
---
### Trigger dbt Cloud after a merge

By default, dbt Cloud runs the production job on a schedule. For example, the production dataset is being triggered every hour or even on a daily schedule. It can be that Datafold will run against an older version of the pipeline, or it will wait for the latest commit to being built.

To avoid this you can set up a simple GitHub Action that will trigger the job after a commit has been made on the branch, ensuring that the main branch is always up to date.

```
name: Trigger dbt Cloud

on:
  push:
    branches:
      - main

jobs:
  run:
    runs-on: ubuntu-20.04
    timeout-minutes: 15

    steps:
      - name: checkout
        uses: actions/checkout@v2

      - name: Trigger dbt Cloud job
        run: |
          output=$(curl -X POST --fail \
            --header "Authorization: Token ${DBT_API_KEY}" \
            --header "Content-Type: application/json" \
            --data '{"cause": "Commit '"${GIT_SHA}"'"}' \
            https://cloud.getdbt.com/api/v2/accounts/${ACCOUNT_ID}/jobs/${JOB_ID}/run/)

          echo "Triggered dbt Cloud run at:"
          echo ${output} | jq -r .data.href
        env:
          DBT_API_KEY: ${{ secrets.DBT_API_KEY }}
          ACCOUNT_ID: 1234 # dbt account id
          JOB_ID: 4567 # dbt job id of the production tables
          GIT_SHA: "${{ github.ref == 'refs/heads/master' && github.sha || github.event.pull_request.head.sha }}"
```

You need to add the dbt Cloud API key as a secret in GitHub Actions, and you need to set the IDs of the account and the job id that builds the production job. You can also find this easily in the dbt Cloud UI:
![](../../../../static/img/dbt_cloud_trigger.png)