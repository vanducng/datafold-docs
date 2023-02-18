---
sidebar_position: 1
title: API Overview
---

# Datafold API

### Create a Datafold API Key

Authentication is done by storing the value of a Datafold API key in the HTTP header:

`Authorization: <your-api-key>`

You can generate an API Key in Datafold Application: Settings -> Account -> Create API Key

```mdx-code-block
import GenerateApiKey from '../../static/img/generate_api_key.png';

```

<center><img src={GenerateApiKey} style={{width: '50%'}}/></center>

### Base URL

The base URL for connecting to the Datafold API is `https://app.datafold.com`. 

:::info
For Datafold single-tenant (on-prem) customers, you should instead use `https://datafold.yourdomain.com` as the base URL.
:::



## API Methods

```mdx-code-block
import DocCardList from '@theme/DocCardList';

<DocCardList />
```