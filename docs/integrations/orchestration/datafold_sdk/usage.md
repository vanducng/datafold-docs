---
sidebar_position: 3
title: Using SDK
description: Description of datafold-sdk
---
### Datafold CLI
The datafold CLI is a utility that automates and simplifies certain tasks. Help for using this utility is available in the utility itself:
```
> datafold --help
```
### Preliminary Datafold SDK
The Datafold SDK are python functions and classes that allow you to integrate these CLI functions directly in your application source code.

In the future, the SDK will contain a more type-safe and integrated "API" client library, which further facilitates integration with the datafold app server.

The only function currently implemented is the `submit_artifacts` function to upload the `dbt run` artifacts to the app server:
```
import os

from datafold.sdk.dbt import submit_artifacts

host = os.environ.get("DATAFOLD_HOST")
api_key = os.environ.get('DATAFOLD_APIKEY')

submit_artifacts(host=host,
                 api_key=api_key,
                 ci_config_id=1,
                 run_type='pull_request',
                 target_folder='<abs-path-to-dbt-target-folder>',
                 commit_sha='abcdef1234567890')
```