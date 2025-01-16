module.exports = {
  root: true,

  parser: "@typescript-eslint/parser",
  env: {
    node: true,
    browser: true,
    es6: true
  },
  plugins: [
    "@typescript-eslint",
    "import",
    "prettier",
    "simple-import-sort",
    "unused-imports"
  ],
  extends: [
    "eslint:recommended",
    "prettier",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
    "plugin:storybook/recommended",
    "next",
    "next/core-web-vitals"
  ],
  ignorePatterns: ["stories/", "src/legacy/"],
  rules: {
    "prettier/prettier": [
      "error",
      { trailingComma: "none", endOfLine: "auto" }
    ],
    "no-console": "off",
    "arrow-body-style": "off",
    "prefer-arrow-callback": "off",
    "react/react-in-jsx-scope": "off",
    "no-unused-expressions": 0,
    "import/extensions": ["off"],
    "import/no-unresolved": "off",
    "import/order": "off",
    "import/first": "error",
    "import/newline-after-import": "error",
    "import/no-duplicates": "error",
    "simple-import-sort/imports": [
      "error",
      {
        groups: [
          ["^react$", "^next"],
          ["^@", "^[a-z]"],
          ["^~"],
          [
            "^\\.\\.(?!/?$)",
            "^\\.\\./?$",
            "^\\./(?=.*/)(?!/?$)",
            "^\\.(?!/?$)",
            "^\\./?$"
          ],
          ["^\\u0000"]
        ]
      }
    ],
    "unused-imports/no-unused-imports": "error",
    "unused-imports/no-unused-vars": [
      "error",
      {
        vars: "all",
        varsIgnorePattern: "^_",
        args: "after-used",
        argsIgnorePattern: "^_"
      }
    ],
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        ignoreRestSiblings: true,
        argsIgnorePattern: "_",
        varsIgnorePattern: "_"
      }
    ],
    "@typescript-eslint/naming-convention": [
      "error",
      {
        selector: "interface",
        format: ["PascalCase"]
      },
      {
        selector: "typeAlias",
        format: ["PascalCase"]
      }
    ],
    "@typescript-eslint/consistent-type-imports": [
      "error",
      {
        prefer: "type-imports",
        fixStyle: "inline-type-imports"
      }
    ],
    "@typescript-eslint/no-var-requires": ["error"],
    "@typescript-eslint/explicit-module-boundary-types": ["error"],
    "@typescript-eslint/no-non-null-assertion": ["error"],
    "@typescript-eslint/explicit-function-return-type": ["error"],
    "@typescript-eslint/array-type": ["error", { default: "array" }],
    "import/prefer-default-export": "off",
    "no-nested-ternary": "off",
    "react/jsx-filename-extension": "off",
    "spaced-comment": "off",
    "no-unused-variable": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "no-implicit-coercion": "error"
  },
  settings: {
    react: {
      version: "detect"
    },
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"],
      "import/extensions": [".js", ".jsx", ".ts", ".tsx"]
    },
    "import/resolver": {
      typescript: {
        alwaysTryTypes: true
      },
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"]
      }
    }
  },
  overrides: [
    {
      files: ["*.js", "*.jsx", "*.mjs", "*.cjs"],
      rules: {
        "@typescript-eslint/no-var-requires": "off"
      }
    },
    {
      files: ["**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(test).[jt]s?(x)"],
      rules: {
        "testing-library/no-manual-cleanup": "off"
      },
      extends: ["plugin:testing-library/react", "plugin:jest-dom/recommended"]
    }
  ]
};
