module.exports = {
  "extends": "justinlocsei/configurations/default",
  "env": {
    "es6": true
  },
  "ecmaFeatures": {
    "modules": true
  },
  "rules": {
    "arrow-body-style": [2, "as-needed"],
    "arrow-parens": [2, "as-needed"],
    "arrow-spacing": [2, {"after": true, "before": true}],
    "no-class-assign": 2,
    "no-confusing-arrow": 2,
    "no-const-assign": 2,
    "no-dupe-class-members": 2,
    "no-var": 2,
    "object-shorthand": [2, "never"],
    "prefer-const": 2,
    "prefer-spread": 2,
    "prefer-template": 2,
    "require-yield": 2
  }
};

