---
sidebar_position: 3
title: Uploading dbt Artifacts
---

Occasionally, Datafold will not receive the information it needs from a CI/CD job, and it will use the best available information about the state of the tables to diff. This will result in a warning about how dbt artifacts for a given git commit are missing.

#### What are dbt artifacts, and how does Datafold use them?
If your GitHub integration informs you that artifacts for a given SHA are missing and should be provided, there are steps you can take to resolve this.

Artifacts are json files that dbt creates representing the state of your dbt project at a specific commit. Datafold uses the artifacts from two commits to compare your code changes: 

- A set of artifacts representing the data as would be created by the latest git commit in your PR.
- A set of artifacts representing the data as it is in your production data, using a previous git commit.

#### Why are artifacts missing?
If artifacts from one of the commits is missing, it could be for a number of reasons, but is likely due to a failed dbt Cloud job (e.g., a test failure).

#### What can I do about it?
The missing artifacts from the specific commit can be created and uploaded via the SDK. 

It's important to note that this will only resolve the error if the data in both your PR and production schemas were created using the code from the commits that were used to create the artifacts! Otherwise, the artifacts will not be consistent with the actual differences in the data. For example, this might cause Datafold to run too many or not enough diffs.

#### Creating and uploading dbt artifacts

You can create and upload the necessary artifacts by restoring your local version of the dbt project to the state of that SHA and running `dbt compile`. 

With the `dbt compile` command, dbt creates or updates artifacts (files) in the `target/` folder of your local dbt project.

**1. Check out your `main` or `master` branch**
```
git checkout main
```

**2. Pull the latest changes from your remote repository (e.g., from GitHub).**
```
git pull
```

**3. Check out a new local branch that contains the version of the code from the specific SHA commit hash that you need artifacts from.**
```
git branch <branch_name> <commit-hash>
git checkout <branch_name>
```
Where `<branch_name>` is the name of the new branch, and `<commit-hash>` is the commit that the artifacts error message stated is missing.

**4. Generate the dbt artifacts.**
```
dbt compile
```

**5. Upload the dbt artifacts using the Datafold SDK.**
```
datafold dbt upload --ci-config-id <ci_config_id> --run-type production --target-folder <artifacts_path> --commit-sha <git_sha>
```

* `<ci_config_id>`: The id of your ci config. This integer value can be found in your Datafold application by navigating to: Settings > Integrations > [Select your Integration] > CI config id.
* `<artifacts_path>`: A path to dbt artifacts. Typically, these artifacts will be located in the `target` folder of your dbt project. If your current working directory is the dbt project, you can use `./target/` as your `<artifacts_path>`.
* `<git_sha>`: The commit SHA for which you will provide artifacts.

Finally, re-initiate the CI/CD process. This can be done manually in GitLab/GitHub, or you can simply push a new commit to the same PR.