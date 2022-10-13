---
sidebar_position: 1
title: Slack
description: Description of Slack
---
## Installing the Slack App for Datafold

:::info

To complete this integration an admin of the Slack workplace must approve the Slack App installation.

:::

To install the Slack App, navigate to **Admin** -> **Settings** -> **Notifications** and click on the **Add New Integration** button.

![](../../../static/img/notifications_add_new.png)

Select **Slack** as your integration and click **Create**.

![](../../../static/img/notifications_integrations.png)

After clicking **Create** you will be forwarded to Slack for approval. 

![](../../../static/img/slack_auth.png)

- If you have permission to add applications to your workspace, click **Allow** and you will be redirected back to Datafold. 
- If you need approval from an admin, fill in the form and send the request for approval. Contact your Slack administrators for approval. You will receive notice that it has been approved via Slackbot message.

After approval and installation you will be redirected to Datafold. Navigating back to **Notifications** you should see your new Slack integration listed.

Continue on to [subscribe to alert notifications with Slack](slack.md#subscribing-to-alerts). 
## Reinstalling the Datafold Slack App

An admin can reinstall the Slack App by opening the existing Slack App integration and clicking the **Reinstall** button. This will upgrade all the granted scopes (if they have changed), refresh the access credentials, reload the names, channels, groups, and users. It will maintain the same alerting subscriptions that were configured. 

![](../../../static/img/slack_reinstall.png)

## Subscribing to alerts
With this Slack integration established, you can now send alerts directly into your workspace's channels and tag groups or individuals who receive the Slack alert. 

Users can subscribe to alerts themselves or be subscribed by others. However, only those Slack users that are mapped to Datafold users can be subscribed. The mapping is performed by a fully matched email address. Unmapped users will not be present in the selection.

To configure:
- Navigate to the alert you wish to subscribe to
- Click on the **Add Subscription** button
- Select **Slack** from the drop down menu and choose a Slack channel for the alert to be posted in
- (Optionally) Select a person or group to receive a _mention_ when the alert message is posted

![](../../../static/img/alerts_subscribe_button.png)

## Uninstalling the Datafold Slack App

To uninstall the application:

* Remove the Slack App subscriptions from all alerts.
* Remove the integration from Datafold by navigating to **Settings** -> **Notifications** and clicking on the Slack account that you wish to remove. Click **Delete**
* Remove the Slack App from your Slack workspace