module.exports = {
  "parser": "babel-eslint",
  "extends": ["eslint:recommended", "plugin:react/recommended"],
  "parserOptions": {
    "ecmaVersion": 6,
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "env": {
    "es6": true,
    "browser": true
  },
  "globals": {
    "require": true,
  },
  "plugins": [
    "react"
  ],
  "rules": {
    "no-extra-parens": ["warn", "all", {
      "nestedBinaryExpressions": false
    }],
    "valid-jsdoc": ["error", {
      "requireReturn": false,
      "requireReturnDescription": false,
      "preferType": {
        "String": "string",
        "Number": "number",
        "Boolean": "boolean",
        "Function": "function",
        "object": "Object",
        "date": "Date",
        "error": "Error"
      },
      "prefer": {
        "return": "returns"
      }
    }],

    "accessor-pairs": "warn",
    "array-callback-return": "error",
    "complexity": "warn",
    "curly": ["error", "multi-line", "consistent"],
    "dot-location": ["error", "property"],
    "dot-notation": "error",
    "eqeqeq": "error",
    "no-floating-decimal": "error",
    "no-implied-eval": "error",
    "no-invalid-this": "error",
    "no-lone-blocks": "error",
    "no-new-func": "error",
    "no-new-wrappers": "error",
    "no-new": "error",
    "no-octal-escape": "error",
    "no-return-assign": "error",
    "no-self-compare": "error",
    "no-sequences": "error",
    "no-throw-literal": "error",
    "no-unmodified-loop-condition": "error",
    "no-unused-expressions": "error",
    "no-useless-call": "error",
    "no-useless-concat": "error",
    "no-useless-escape": "error",
    "no-void": "error",
    "no-warning-comments": "warn",
    "wrap-iife": "error",
    "yoda": "error",

    "no-label-var": "error",
    "no-shadow": "error",
    "no-undef-init": "error",

    "callback-return": "error",
    "handle-callback-err": "error",
    "no-mixed-requires": "error",
    "no-new-require": "error",
    "no-path-concat": "error",

    "array-bracket-spacing": "error",
    "block-spacing": "error",
    "brace-style": ["error", "1tbs", { "allowSingleLine": true }],
    "comma-dangle": ["error", "always-multiline"],
    "comma-spacing": "error",
    "comma-style": "error",
    "computed-property-spacing": "error",
    "consistent-this": ["error", "$this"],
    "eol-last": "error",
    "func-names": "error",
    "func-style": ["error", "expression", { "allowArrowFunctions": true }],
    "indent": ["error", 2, { "SwitchCase": 1 }],
    "key-spacing": "error",
    "keyword-spacing": "error",
    "max-depth": "error",
    "max-len": ["error", 15000, 2],
    "max-nested-callbacks": ["error", { "max": 4 }],
    "max-statements-per-line": ["error", { "max": 2 }],
    "new-cap": "error",
    "newline-per-chained-call": ["error", { "ignoreChainWithDepth": 3 }],
    "no-array-constructor": "error",
    "no-inline-comments": "off",
    "no-lonely-if": "error",
    "no-mixed-operators": "error",
    "no-multiple-empty-lines": ["error", { "max": 2, "maxEOF": 1, "maxBOF": 0 }],
    "no-new-object": "error",
    "no-spaced-func": "error",
    "no-trailing-spaces": "error",
    "no-unneeded-ternary": "error",
    "no-whitespace-before-property": "error",
    "object-curly-spacing": ["error", "always"],
    "operator-assignment": "error",
    "operator-linebreak": ["error", "after"],
    "padded-blocks": ["error", "never"],
    "quote-props": ["error", "as-needed"],
    "quotes": ["error", "single", { "avoidEscape": true, "allowTemplateLiterals": true }],
    "semi-spacing": "error",
    "semi": ["error", "never"],
    "space-before-blocks": "error",
    "space-before-function-paren": ["error", "always"],
    "space-in-parens": "error",
    "space-infix-ops": "error",
    "space-unary-ops": "error",
    "spaced-comment": "error",
    "unicode-bom": "error",

    "arrow-body-style": "error",
    "arrow-spacing": "error",
    "no-duplicate-imports": "error",
    "no-useless-computed-key": "error",
    "no-useless-constructor": "error",
    "prefer-arrow-callback": "error",
    "prefer-rest-params": "error",
    "prefer-spread": "error",
    "prefer-template": "error",
    "rest-spread-spacing": "error",
    "template-curly-spacing": "error",
    "yield-star-spacing": "error",

    "max-depth": ["error", 10],
    "no-console": ["error", { allow: ["warn", "error", "log"] }],
    "no-shadow": "off",
    "no-constant-condition": ["error", { "checkLoops": false }]
  }
}
