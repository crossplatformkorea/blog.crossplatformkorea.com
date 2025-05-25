/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

module.exports = {
  title: "Cross-Platform Korea",
  url: "https://doc.crossplatformkorea.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  favicon: "img/favicon.ico",
  organizationName: "crossplatformkorea",
  projectName: "doc.crossplatformkorea.com",
  onBrokenLinks: "ignore",
  i18n: {
    defaultLocale: "ko",
    locales: ["en", "ko"],
  },
  plugins: [
    [
      "@docusaurus/plugin-client-redirects",
      {
        redirects: [
          {
            to: "https://docs.google.com/forms/d/1YMo_RNSCfZfxfYxYV27EGM0ScZP8b-Ct80_wSTJRlDs",
            from: "/welcome",
          },
          {
            to: "/docs/current/introduction",
            from: "/docs",
          },
          {
            to: "/docs/current/introduction",
            from: "/docs/introduction",
          },
          {
            to: "https://app.crossplatformkorea.com/privacyandpolicy",
            from: "/privacyandpolicy",
          },
          {
            to: "https://app.crossplatformkorea.com/termsofservice",
            from: "/termsofservice",
          }
        ],
      },
    ],
  ],
  themeConfig: {
    navbar: {
      title: "Cross-Platform Korea",
      logo: {
        alt: "crossplatformkorea",
        src: "img/logo.png",
      },
      items: [
        {
          type: "dropdown",
          label: "Development",
          position: "left",
          items: [
            {
              label: "React Native",
              href: "/docs/current/react-native/intro",
            },
          ],
        },
        {
          to: "/docs/current/introduction",
          label: "Community",
          position: "left",
        },
        { to: "/blog", label: "Blog", position: "left" },
        {
          href: "https://crossplatformkorea.com",
          label: "Homepage",
          position: "left",
        },
        {
          href: "https://github.com/crossplatformkorea/doc.crossplatformkorea.com",
          label: "GitHub",
          position: "right",
        },
        {
          type: "localeDropdown",
          position: "right",
        },
        {
          type: "docsVersionDropdown",
          position: "right",
          dropdownActiveClassDisabled: true,
          dropdownItemsAfter: [],
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Community",
          items: [
            {
              label: "Forums",
              href: "https://forums.crossplatformkorea.com",
            },
            {
              label: "Slack",
              href: "https://hyo.dev/joinCPK",
            },
          ],
        },
        {
          title: "Offline",
          items: [
            {
              label: "Meetup",
              href: "https://www.meetup.com/ko-KR/crossplatformkorea",
            },
          ],
        },
        {
          title: "Contents",
          items: [
            {
              label: "Medium",
              href: "https://medium.com/crossplatformkorea",
            },
            {
              label: "Youtube",
              href: "https://www.youtube.com/@crossplatformkorea",
            },
          ],
        },
        {
          title: "App",
          items: [
            {
              label: "App",
              href: "https://app.crossplatformkorea.com",
            },
            {
              label: "Privacy and Policy",
              href: "https://doc.crossplatformkorea.com/privacyandpolicy",
            },
            {
              label: "Terms of Service",
              href: "https://doc.crossplatformkorea.com/termsofservice",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} hyochan`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          path: "docs",
          lastVersion: "current",
          versions: {
            current: {
              label: "current",
              path: "current",
            },
          },
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: ({ locale, docPath }) => {
            if (locale !== "en") {
              return `https://github.com/crossplatformkorea/doc.crossplatformkorea.com/tree/main/${locale}`;
            }
            // We want users to submit doc updates to the upstream/next version!
            // Otherwise we risk losing the update on the next release.
            const nextVersionDocsDirPath = "docs";
            return `https://github.com/crossplatformkorea/doc.crossplatformkorea.com/edit/main/${nextVersionDocsDirPath}/${docPath}`;
          },
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
