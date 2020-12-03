module.exports = {
    "extends": "stylelint-config-standard",
    "plugins": [
      "stylelint-scss"
    ],
    "rules": {
      "selector-nested-pattern": "^&",
      "indentation": 2,
      "no-descending-specificity": null,
      "no-eol-whitespace": null,
      "declaration-empty-line-before": null,
      "value-keyword-case": null,
      "at-rule-no-unknown": [
        true,
        {
          "ignoreAtRules": [
            "tailwind",
            "apply",
            "responsive",
            "variants",
            "screen",
            "use",
            "include",
            "mixin",
            "extend"
          ]
        }
      ],
      "string-quotes": "double",
      "color-named": "never",
      //Customs rules according Code Guide by @mdo
      "selector-list-comma-newline-after": "always",
      "selector-list-comma-newline-before": "never-multi-line",
      "color-function-notation": "legacy",
      "number-leading-zero": "never",
      "color-hex-case": "lower",
      "color-hex-length": "short",
      "selector-nested-pattern": "[a-z]",
      "rule-empty-line-before": 
      [ "always", 
        {
        "except": ["inside-block"]
        }
    ]
    }
  } 

