export default {
    "env": {
        "browser": true,
        "es2021": true,
        "node": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
              "sourceType": "module"
            }
        }
    ],
    "parserOptions": {
        "ecmaVersion": "latest"
    },
    "plugins": [
        "react"
    ],
    "rules": {
      "react/react-in-jsx-scope": "off",
      "max-len": [
        "error",
        {
          ignoreTemplateLiterals: true,
          ignoreComments: true,
        },
      ],
      'jsx-a11y/label-has-associated-control': ["error", {
        assert: "either",
      }],
    },
}
