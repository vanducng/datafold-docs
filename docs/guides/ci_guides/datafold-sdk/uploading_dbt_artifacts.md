---
sidebar_position: 3
title: Uploading dbt Artifacts
---

Occasionally, Datafold will not receive the information it needs from a CI/CD job, and it will use the best available information about the state of the tables to diff. This will result in a warning about how dbt artifacts for a given git commit are missing.

#### What are dbt artifacts, and how does Datafold use them?
If your GitHub integration informs you that artifacts for a given SHA are missing and should be provided, there are steps you can take to resolve this.

Artifacts are json files that dbt creates representing the state of your dbt project at a specific commit. Datafold uses the artifacts from two commits to compare your code changes: 

- A set of artifacts representing the data as would be created by the latest git commit in your PR.
- A set of artifacts representing the data as it is in your production data, using an earlier git commit.

#### Why are artifacts missing?
If artifacts from one of the commits is missing, it could be for a number of reasons. Here are some possibilities:

- If you're using a dbt Cloud integration, it's most likely that your dbt Cloud job did not run or failed. That includes if a step in your job failed, such as `dbt test`, even if `dbt run` was successful.
- If you're using a dbt Core integration, it may be that:
  - The files that build your CI pipeline are not yet merged into the main/master branch.
  - Your CI pipeline did not trigger, or failed for any reason.

#### What can I do about it?
The missing artifacts from the specific commit can be created and uploaded via the SDK. 

It's important to note that this will only resolve the error if the data in both your PR and production schemas were created using the code from the commits that were used to create the artifacts! Otherwise, the artifacts will not be consistent with the actual differences in the data. For example, this might cause Datafold to run too many or not enough diffs.

#### A note on your base branch commit selection strategy
Datafold will search for dbt artifacts based on your base branch commit selection strategy. This can be set in the Datfold application > Admin > Settings > Integrations > Orchestration > [Select your orchestration]. 

<br/>
<img width="304" alt="Screen Shot 2022-12-22 at 12 05 00 AM" src="https://user-images.githubusercontent.com/1799931/209088447-955dee8f-03bf-4c46-bc09-1539bc24a92d.png">
<br/>

There are two options:

- **Merge base**: The dbt artifacts from your PR's latest commit will be compared to the dbt artifacts from the commit from which the PR branch was created. 
- **Latest**: The dbt artifacts from your PR's latest commit will be compared to the latest available commit from the main/master branch.

There is not a wrong choice here, but it's important to be aware that this setting determines which dbt artifacts Datafold tries to use to run a diff.

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
datafold dbt upload --ci-config-id <ci_config_id> --run-type <run-type> --target-folder <artifacts_path> --commit-sha <git_sha>
```

* `<ci_config_id>`: The id of your ci config. This integer value can be found in your Datafold application by navigating to: Settings > Integrations > [Select your Integration] > CI config id.
* `<run-type>`: This can be either `pull_request` or `production`. Choose a value depending on whether you're uploading dbt artifacts for a git commit SHA corresponding to production or pull request code.
* `<artifacts_path>`: A path to dbt artifacts. Typically, these artifacts will be located in the `target` folder of your dbt project. If your current working directory is the dbt project, you can use `./target/` as your `<artifacts_path>`.
* `<git_sha>`: The git commit SHA for which you will provide artifacts.

Finally, re-initiate the CI/CD process. This can be done manually in GitLab/GitHub, or you can simply push a new commit to the same PR.
