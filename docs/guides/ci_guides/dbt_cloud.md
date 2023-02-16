---
sidebar_position: 1
title: dbt Cloud
---

### Slim CI
[Slim CI](https://docs.getdbt.com/docs/dbt-cloud/using-dbt-cloud/cloud-enabling-continuous-integration#configuring-a-dbt-cloud-ci-job) speeds up CI by running only your changes.

  * Quick primer on [state:modified](https://docs.getdbt.com/reference/node-selection/methods#the-state-method) syntax:
      * `state:modified+` run the modified model(s) and all downstream models
      * `state:+modified` run the modified model(s) and all upstream models
      * `state:modified+n` run the modified model(s) and N downstream models


* Navigate to Jobs > Settings > Execution Settings
* Under "Defer to a previous run state?", select the production job
    * This may or may not be labelled "Production" it is based on the name you chose when creating the job
* Alter the command, adding `--select state:modified+`


![](../../../static/img/cloud_slim_ci.png)

### Autoscaling CI

Although a great addition to your CI, [Slim CI](#slim-ci) has the following limitations:

* Only one Slim CI job can run at a given time.
* A job will continue to run even if another commit is added to the pull request.

[Autoscaling CI](https://docs.getdbt.com/blog/intelligent-slim-ci#the-solution-autoscaling-ci) addresses both limitations. New commits to an existing pull request will cancel any in progress runs for that pull request. In addition, it can use the same Slim CI job definition to run separate pull requests in parallel.

For detailed setup instructions, see [this post](https://docs.getdbt.com/blog/intelligent-slim-ci#setup) from the dbt Developer Blog.