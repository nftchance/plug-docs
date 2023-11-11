import { defineConfig } from "vitepress";

import { default as fse } from "fs-extra";
import { resolve } from "pathe";

const rootDir = resolve(process.cwd());

const ordering = ["domain", "caveat", "Permission", "Transaction", "ReplayProtection", "Intent"]

// * Get the generated files in a directory and create the array of items.
function getItems(directory: string) {
  const directoryPath = resolve(rootDir, directory);
  const files = fse.readdirSync(directoryPath);

  return files.map((file) => {
    const name = file.replace(".md", "");
    const link = `${directory}/${name}`;

    console.log(link);

    return {
      text: name,
      link: link.replace("./", ""),
    };
  });
}

export default defineConfig({
  title: "Plug Documentation",
  description: "Documentation for the Plug protocol.",
  themeConfig: {
    logo: { light: '/logo-dark.svg', dark: '/logo-white.svg' },

    nav: [
      { text: "Home", link: "https://www.onplug.io" },
    ],

    sidebar: [
      {
        text: "Introduction",
        items: [
          {
            text: "Why Plug",
            link: "/introduction/why-plug",
          },
          {
            text: "If This, Then That",
            link: "/introduction/if-this-then-that",
          },
          {
            text: "FAQ",
            link: "/introduction/frequently-asked-questions",
          },
        ],
      },
      {
        text: "Intents",
        collapsed: false,
        items: [
          {
            text: "Introduction",
            link: "/intents/introduction",
            items: [
              {
                text: "Imperative Transactions",
                link: "/intents/imperative-transactions",
              },
              {
                text: "Declarative Messages",
                link: "/intents/declarative-messages",
              },
            ],
          },
          {
            text: "Execution Paths",
            link: "/intents/execution-paths",
            items: [
              {
                text: "Single Lane",
                link: "/intents/execution-paths/single-lane",
              },
              {
                text: "Multi-Dimensional",
                link: "/intents/execution-paths/multi-dimensional",
              },
              {
                text: "Native Transactions",
                link: "/intents/execution-paths/native-transactions",
              },
              {
                text: "Meta-Transactions",
                link: "/intents/execution-paths/meta-transactions",
              },
              {
                text: "Channels",
                link: "/intents/execution-paths/channels",
              },
            ],
          },
        ],
      },
      {
        text: "Types and Decoders",
        collapsed: true,
        items: [
          {
            text: "EIP-712",
            link: "/decoders/eip-712",
            items: [
              {
                text: "Signed Pairs",
                link: "/decoders/eip-712/signed-pairs",
              },
              {
                text: "Automated Generation",
                link: "/decoders/eip-712/automated-generation",
              },
            ],
          },
          {
            text: "Base Types",
            link: "/decoders/base-types",
            items: getItems("./generated/base-types"),
          },
          {
            text: "Hash Getters",
            link: "/decoders/hash-getters",
            items: getItems("./generated/hash-getters"),
          },
          {
            text: "Digest Getters",
            link: "/decoders/digest-getters",
            items: getItems("./generated/digest-getters"),
          },
          {
            text: "Signer Getters",
            link: "/decoders/signer-getters",
            items: getItems("./generated/signer-getters"),
          },
        ],
      },
      {
        text: "Core Abstracts",
        collapsed: true,
        items: [
          {
            text: "CaveatEnforcer",
            link: "/core/caveat-enforcer",
            items: [
              {
                text: "enforceCaveat",
                link: "/core/caveat-enforcer/enforce-caveat",
              },
            ],
          },
          {
            text: "Plug",
            link: "/core/framework",
            items: [
              {
                text: "contractInvoke",
                link: "/core/framework/contract-invoke",
              },
              {
                text: "invoke",
                link: "/core/framework/invoke",
              },
            ],
          },
        ],
      },
      {
        text: "Deployable Instances",
        collapsed: true,
        items: [
          {
            text: "Enforcers",
            link: "/instances/enforcers",
            items: [
              {
                text: "Allowed Methods",
                link: "/instances/enforcers/allowed-methods",
              },
              {
                text: "Block Number",
                link: "/instances/enforcers/block-number",
              },
              {
                text: "Timestamp",
                link: "/instances/enforcers/timestamp",
              },
              {
                text: "Schedule Windows",
                link: "/instances/enforcers/schedule-windows",
              },
              {
                text: "Limited Calls",
                link: "/instances/enforcers/limited-calls",
              },
              {
                text: "ERC20Allowance",
                link: "/instances/enforcers/erc20-allowance",
              },
              {
                text: "Revocation",
                link: "/instances/enforcers/revocation",
              },
            ],
          },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/nftchance/plug" },
    ],

    editLink: {
      pattern: "https://github.com/nftchance/plug-docs/edit/master/:path",
    },

    search: {
      provider: "local",
    },
  },

  lastUpdated: true,

  // * Load the font files.
  transformHead({ assets }) {
    const myFontFile = assets.find(() => /Satoshi-Variable\.\w+\.woff2/);
    if (myFontFile) {
      return [
        [
          "link",
          {
            rel: "preload",
            href: myFontFile,
            as: "font",
            type: "font/woff2",
            crossorigin: "",
          },
        ],
      ];
    }
  },

  markdown: {
    lineNumbers: true,
  },
});
