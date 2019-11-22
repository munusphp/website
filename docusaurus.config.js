/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

module.exports = {
  title: 'Munus',
  tagline: 'Power of object-oriented programming with the elegance of functional programming.',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'munusphp', // Usually your GitHub org/user name.
  projectName: 'munusphp.github.io', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Munus',
      logo: {
        alt: 'Munus Logo',
        src: 'img/logo.svg',
      },
      links: [
        {to: 'docs/start', label: 'Docs', position: 'left'},
        {
          href: 'https://github.com/munusphp/munus',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Docs',
              to: 'docs/start',
            },
          ],
        }
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Arkadiusz Kondas. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
