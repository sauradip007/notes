# Prettier Configuration

Prettier pairs with ESLint and serves as a code formatter. This small list of rules helps determine how Prettier behaves. This goes in a `.prettierrc` file in your root project directory.

```json
{
  "endOfLine": "lf",
  "useTabs": false,
  "singleQuote": false
}
```

## Rules

- `endOfLine`: Setting this to `lf` enforces Unix style line endings (no carriage-return character).
- `useTabs`: Setting this to false allows the use of spaces for indentation.
- `singleQuote`: Setting this to false enforces double quotes for strings.
