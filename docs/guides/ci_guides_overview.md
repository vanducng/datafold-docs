---
sidebar_position: 1
title: CI Guides
---

Continuous integration, or CI, is a well-established practice in software engineering, and is being increasingly adopted by data teams.

CI streamlines code changes from multiple contributors into a single project. Tests and checks are handled automatically, and ensure the new code’s correctness before integration. By defining and automating this loop, CI can help improve the speed and quality of code changes. 

In organizations without a CI process:
* changes are manually coordinated, and often become a complex synchronization chore.
* testing is done manually, if at all.
* code changes are released at a slower cadence, and with higher rates of failure

A mature CI pipeline:
* enables scaling teams and codebases
* offers high-confidence automated test coverage
* can boost the quantity and quality of developer output

There are many different possible permutations of CI. This guide offers walk-throughs and examples using a few of the most popular tools. 
* [dbt Cloud](ci_guides/dbt_cloud.md)
* [dbt Core](ci_guides/dbt_core.md)
    * [CircleCI](ci_guides/dbt_core/circleci.md)
    * [Github Actions](ci_guides/dbt_core/github_actions.md)
    * [Gitlab CI](ci_guides/dbt_core/gitlab_ci.md)
