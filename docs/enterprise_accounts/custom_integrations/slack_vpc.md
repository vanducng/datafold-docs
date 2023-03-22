---
sidebar_position: 2
id: slack_vpc
title: Slack for VPCs
---
:::info
VPC deployments are an Enterprise feature. Please email [sales@datafold.com](mailto:sales@datafold.com) to enable your account. 
:::

## Create a Slack App

VPC clients of Datafold need to create their own Slack app, rather than use the shared Datafold Slack application.

To begin, navigate to **Admin** -> **Settings** -> **Global Settings**. After scrolling down the page, you'll arrive at the Slack configuration.

![](/img/onprem_slack_configuration.png)

Then, click the **Create a Slack app configuration token**. You will be redirected to Slack, where you will be prompted to create a slack app or generate a token. Here, click **Generate Token**.

![](/img/onprem_slack_generate_token.png)

Copy the token and paste it into the configuration form in Datafold. Then, click **Create Slack App**.

The `client id`, `secret`, and `signing secret` will auto-populate to complete the connection. 

## Configure Slack in Datafold

With the Slack App creation completed, you can proceed on to the [Slack integration setup](../../deployment_testing/notifications/slack).

:::note
The Slack App is set to **Not distributed,** meaning that it is only accessible to the Datafold instance running in a VPC.
:::
