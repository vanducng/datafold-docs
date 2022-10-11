---
sidebar_position: 1
title: CI Guides
---

NAVIGATION to each ##


## What is Continuous Integration (CI)?
Explained simply: <br/> ** *automatically building, testing, and deploying your code.* **

There are many (often complex) definitions, diagrams, textbooks, and "vs." articles discussing this term. In this guide and following guides, we are referring to CI in a simple and colloquial sense. CI as a broad term for processes that automatically build, test, and deploy code.

The foundation of this process is a version control system, typically Git, and a provider (Github, Gitlab, in-house). If you're collaborating with a system like Github, you're 25% of the way to CI.

Using our simple definition, there are four components to CI:
1. Version Control
2. Automated Builds
3. Automated Testing
4. Automated Deployment

Why do we care about CI though? What am I getting out of having a CI process?

## What Are the Benefits of CI?

^^^^^

A robust CI process can give you the confidence to ship faster and more frequently - increasing the velocity of your team.

So what does robust look like?

* A quick before CI and after CI image of the workflow would be sweet
* Lay out the state of what its like without doing CI or incomplete CI then the future state whatever its called will hold more weight

## Version Control

Basic defs and examples of products like Github/Gitlab

Branches & PRs

## Automated Builds

Compilation? DBT specific? Turning code into artifacts

I am considering not using this term and sticking to 

1. Version Control
2. Automated Testing
3. Automated Deployment <- if we're sticking to simple defintions, we could lump compilation into deployment

## Automated Testing
dbt tests, Great Expectations, and Datafold


CI with dbt
dbt can help you with the build & testing steps of the CI process. To get started you two jobs:
Production Job
PR Job

The following guides will help you get set up with either dbt Cloud or dbt Core.

## Automated Deployment

Deploying to PR environment
Deploying to production environment
- code merged AND new/changed artifacts are ran


## CI Examples
Links to the CI guides