export default {
  extends: ["@commitlint/config-conventional"],
  ignores: [(message) => message.includes("WIP")],
  rules: {
    "subject-case": [
      2,
      "never",
      ["upper-case", "pascal-case", "start-case", "camel-case"],
    ],
    "body-max-line-length": [2, "always", 1000],
  },
};
