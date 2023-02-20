---
sidebar_position: 1
title: API Overview
---

# Datafold API

Authentication is done by storing the value of a Datafold API key in the HTTP header:

`Authorization: <your-api-key>`

### Create a Datafold API Key

To generate a Datafold API key, navigate to **Admin** -> **Settings** -> **Account**. 

Here, click on the **Create API Key** button. This will generate and store an API key for your account. You will be able to view, copy, and regenerate this key at any time. 

```mdx-code-block
import GenerateApiKey from '../../static/img/generate_api_key.png';

```

<center><img src={GenerateApiKey} style={{width: '50%'}}/></center>

### Base URL

The base URL for connecting to the Datafold API is `https://app.datafold.com`. 

:::info
For Datafold single-tenant (on-prem) customers, you should instead use `https://datafold.yourdomain.com` as the base URL.
:::



### API Methods

```mdx-code-block
import DocCardList from '@theme/DocCardList';

<DocCardList />
```