---
sidebar_position: 3
title: datafold-sdk
description: Description of datafold-sdk
---

:::note

Additional documentation coming soon.

:::

### Manually uploading artifacts

If your GitHub integration informs you that artifacts for a given SHA are missing and should be provided, you can accomplish this by restoring your local version of the dbt project to the state of that SHA and running `dbt compile`. 

Then, execute the following command:

```
datafold dbt upload --ci-config-id <ci_config_id> --run-type production --target-folder <artifacts_path> --commit-sha <git_sha>
```

* `<ci_config_id>`: The id of your ci config. This is available 
* `<artifacts_path>`: A path to dbt artifacts. Typically, these artifacts will be located in the `target` folder of your dbt project.
* `<git_sha>`: The commit SHA for which you will provide artifacts.

Finally, re-initiate the CI/CD process. This can be done manually in GitLab/GitHub, or you can simply push a new commit to the same PR.