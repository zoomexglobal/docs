// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Zoomex API Documentation',
  tagline: '',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://zoomexglobal.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/docs/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'zoomexglobal', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.

  trailingSlash: false,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh-TW'],
    localeConfigs: {
      en: { label: 'English' },
    },
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    {
      // Replace with your project's social card
      //image: 'img/docusaurus-social-card.jpg',
      docs: {
        sidebar: {
          hideable: false,
          autoCollapseCategories: false,
        },
      },

      //colorMode: {
      //  defaultMode: 'dark',
      //  disableSwitch: false,
      //  respectPrefersColorScheme: true,
      //},

      // https://docusaurus.io/docs/api/themes/configuration#navbar
      navbar: {
        title: 'Zoomex',
        logo: {
          alt: 'Zoomex Logo',
          src: 'img/logo.svg',
          //href: 'https://www.zoomex.com/',
        },
        items: [
          {
            type: 'doc',
            docId: 'v3/intro',
            position: 'left',
            label: 'V3 API',
          },
          //{
          //  type: 'doc',
          //  docId: 'changelog/v3',
          //  position: 'left',
          //  label: 'Changelog',
          //},
          {
            label: 'Previous Version',
            position: 'right',
            items: [
              {
                href: 'https://zoomexglobal.github.io/docs-legacy/futuresV2/linear/',
                label: 'USDT Perpetual v2'
              },
              {
                href: 'https://zoomexglobal.github.io/docs-legacy/futuresV2/inverse/',
                label: 'Inverse Perpetual v2'
              },
            ]
          },
          {
            type: 'localeDropdown',
            position: 'right',
            dropdownItemsBefore: [],
            dropdownItemsAfter: [],
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Community',
            items: [
              {
                label: 'Telegram – English',
                href: 'https://t.me/zoomex_com',
              },
              {
                label: 'Telegram – Chinese',
                href: 'https://t.me/zoomex_cn',
              },
              //{
              //  label: 'Discord',
              //  href: 'https://discord.gg/VBwVwS2HUs',
              //},
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Github',
                href: 'https://github.com/zoomexglobal',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/zoomexofficial?s=21',
              },
            ],
          },
        ],
        // copyright: `Copyright © ${new Date().getFullYear()} Zoomex Docs, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    },
};

module.exports = config;
