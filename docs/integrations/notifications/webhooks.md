---
sidebar_position: 3
title: Webhooks
description: Description of Webhooks
---
# Configure Webhooks for Datafold Alerts
:::info

This feature is only available on request. Please contact Datafold at [support@datafold.com](mailto:support@datafold.com) to enable it for your organization.
:::

To create a webhook destination, navigate to **Admin** -> **Settings** -> **Notifications**, click **Add New integration** and select **Webhook**. 

![](../../../static/img/notifications_add_new.png)

Configure the webhook with the following information:

| Field | Description |
| -------- | -------- |
| Name | The name of the webhook is used as an identifier in Datafold. |
| HTTP Method | Which type of HTTP method you'd like sent to your webhook. |
| URL to Call | The URL endpoint where you'd like the query sent. |
| HTTP Headers | Headers that may be required for your URL endpoint. |
| HTTP Body Template | Customize the body of your webhook message with any details or information that would be helpful. |
| Secret 1 & Secret 2 | Use for API tokens, passwords, or secrets that may be required for your webhook. |

You can use the following variables in the **Headers** and **Body** of your webhook:

| Variable | Description |
| -------- | ----------- |
| `{{id}}` | The id of the alert query. |
| `{{url}}`| The URL of the alert query. |
| `{{name}}` | The name of the alert query. |
| `{{status}}` | The status of the alert query: "triggered" (the violation or anomaly was detected) and "error" (the query execution has failed).|
|`{{secret1}}` & `{{secret2}}` | The value of the secret fields in the webhook setup. |
|`{{threshold_events\|json}}` `{{threshold_events\|json\|str}}` | A string with a JSON-serialized object describing the violated thresholds. |
|`{{missing_data_events\|json}}`  `{{missing_data_events\|json\|str}}`| A string with a JSON-serialized object describing the missing data.|


:::note

The difference between `|json` and |`json|str` is that the former is just a JSON-serialized object, and the latter is an escaped string with the JSON-serialized object (i.e. double-serialized). The former can be used as the whole payload or in non-JSON payloads, while the latter can be put as a field value in a JSON payload. The raw non-serialized object is not provided.
:::

When configuration is completed, click **Create**!

## Subscribing to alerts
With this Webhook integration established, you can now send alerts directly to your webhook. 

To configure:
- Navigate to the alert you wish to subscribe to
- Click on the **Add Subscription** button
- Select **Webhook** from the drop down menu

![](../../../static/img/alerts_subscribe_button.png)

## Uninstalling a Webhook Integration

To uninstall:

* Remove the Webhook subscriptions from all alerts.
* Remove the integration from Datafold by navigating to **Settings** -> **Notifications** and clicking on the Webhook that you wish to remove. Click **Delete** to complete the removal. 