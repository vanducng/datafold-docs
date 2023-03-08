/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docs: [
    'overview',
    'quickstart',
    {
      type: 'category',
      label: 'Development Testing',
      link: {type: 'doc', id: 'development_testing'},
      items: [
        'development_testing',
        {type: 'autogenerated', dirName: 'development_testing'},
      ]
    },
    {
      type: 'category',
      label: 'Deployment Testing',
      link: {type: 'doc', id: 'deployment_testing'},
      items: [
        'deployment_testing',
        {
          type: 'category',
          label: 'Data Source',
          link: {type: 'doc', id: 'deployment_testing/data_sources'},
          items: [
            {type: 'autogenerated', dirName: 'deployment_testing/data_sources'},
          ]
        },
        {
          type: 'category',
          label: 'Source Control',
          link: {type: 'doc', id: 'deployment_testing/source_control'},
          items: [
            {type: 'autogenerated', dirName: 'deployment_testing/source_control'},
          ]
        },
        {
          type: 'category',
          label: 'dbt Core/Cloud',
          link: {type: 'doc', id: 'deployment_testing/dbt'},
          items: [
            {type: 'autogenerated', dirName: 'deployment_testing/dbt'},
          ]
        },
        {
          type: 'category',
          label: 'Data Apps',
          link: {type: 'doc', id: 'deployment_testing/data_apps'},
          items: [
            {type: 'autogenerated', dirName: 'deployment_testing/data_apps'},
          ]
        },
      ]
    },
    'security',
    'support',
    {
      type: 'html',
      value: `
      <span style="border-top: 1px solid var(--ifm-color-gray-500); display: block;margin: 0.5rem 0 -0.25rem 0;" />
      <span style="font-size: 0.75rem; color: darkgrey;">Jump to</span>
      `,
      defaultStyle: true, 
    },
    {
      type: 'link',
      label: 'Guides',
      href: '/guides/guides_overview',
    },
    {
      type: 'link',
      label: 'Reference',
      href: '/reference/overview',
    },
  ],
  guides: [
    'guides/guides_overview',
    {
      type: 'html',
      value: `
      <span style="border-top: 1px solid var(--ifm-color-gray-500); display: block;margin: 0.5rem 0 -0.25rem 0;" />
      <span style="font-size: 0.75rem; color: darkgrey;">Jump to</span>
      `,
      defaultStyle: true, 
    },
    {
      type: 'link',
      label: 'Overview',
      href: '/overview',
    },
    {
      type: 'link',
      label: 'Reference',
      href: '/reference/overview',
    },
  ],
  references: [
    'reference/overview',
    {
      type: 'html',
      value: `
      <span style="font-size: 0.75rem; color: darkgrey;">Open-Source</span>
      `,
      defaultStyle: true, 
    },
    'reference/open_source/cli',
    {
      type: 'link',
      label: 'Python API',
      href: 'https://data-diff.readthedocs.io/en/latest/python-api.html',
    },
    {
      type: 'html',
      value: `
      <span style="font-size: 0.75rem; color: darkgrey;">Cloud</span>
      `,
      defaultStyle: true, 
    },
    'reference/cloud/rest_api',
    'reference/cloud/graphql',
    {
      type: 'html',
      value: `
      <span style="border-top: 1px solid var(--ifm-color-gray-500); display: block;margin: 0.5rem 0 -0.25rem 0;" />
      <span style="font-size: 0.75rem; color: darkgrey;">Jump to</span>
      `,
      defaultStyle: true, 
    },
    {
      type: 'link',
      label: 'Overview',
      href: '/overview',
    },
    {
      type: 'link',
      label: 'Guides',
      href: '/guides/guides_overview',
    },
  ],
};

module.exports = sidebars;