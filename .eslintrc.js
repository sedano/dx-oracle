module.exports = {
    "extends": ["google", "react-app"],
    "env": {
        "browser": true,
        "commonjs": true,
        "node": true,
        "es6": true
    },
    "parserOptions": {
        "ecmaVersion": 6
    },
    "rules":
    {
        "require-jsdoc": "off",
        "max-len": ["warn", 250],
        "no-invalid-this": "off"
    },
}