module.exports = {
    root: true,
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true,
        "node": true
    },
    extends: [
        'standard',
        'plugin:vue/recommended'
    ],
    parserOptions: {
        ecmaVersion: 9,
        sourceType: 'module',
    },
    plugins: [
        'vue'
    ]
}
