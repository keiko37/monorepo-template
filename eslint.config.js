const nxEslintPlugin = require("@nx/eslint-plugin");

module.exports = [
  { plugins: { "@nx": nxEslintPlugin } },
  {
    rules: {
      "@nx/enforce-module-boundaries": [
        "error",
        {
          allow: [],
          depConstraints: [
            {
              sourceTag: "scope:shared",
              onlyDependOnLibsWithTags: ["scope:shared"]
            },
            {
              sourceTag: "type:types",
              onlyDependOnLibsWithTags: ["type:types"]
            }
          ]
        }
      ],
    } 
  }
];
