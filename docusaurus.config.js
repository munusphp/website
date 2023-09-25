/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

module.exports = {
  title: 'Munus',
  tagline: 'Where PHP\'s Object-Oriented Power Meets Functional Elegance!',
  url: 'https://munusphp.github.io/',
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
        srcDark: 'img/logo-dark.svg',
      },
      items: [
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
      links: [],
      copyright: `Copyright © ${new Date().getFullYear()} Arkadiusz Kondas. Built with Docusaurus.`,
    },
    prism: {
      additionalLanguages: ['php']
    }
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
