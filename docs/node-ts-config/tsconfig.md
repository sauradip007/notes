# TypeScript Configuration

This is my default configuration for the TypeScript compiler. This goes in a `tsconfig.json` file in the root directory of your project.

```json
{
  "compilerOptions": {
    "target": "ES6",
    "module": "CommonJS",
    "rootDir": "./src",
    "outDir": "./prod",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "resolveJsonModule": true
  }
}
```

## Options

- `target`: Setting this to `ES6` enables extra features available in ES6, while maintaining browser compatibility.
- `module`: Setting this to `CommonJS` allows for `import/export` syntax instead of `export/require`.
- `rootDir`: The compiler will look for a `src` folder within your root project directory and start compiling from there.
- `outDir`: The compiler will put the resulting JavaScript files in the `prod` folder within your root project directory.
- `strict`: Setting this to `true` enables all strict type checking options, such as `noImplicitAny` and `noImplicitThis`.
- `esModuleInterop`: Setting this to `true` enables additional helpers in the compiled code for use with ecosystems like Babel.
- `skipLibCheck`: Setting this to `true` skips the type checking on declaration files (`*.d.ts`).
- `forceConsistentCasingInFileNames`: Setting this to `true` requires that import statements which point to a file match the case correctly.
- `resolveJsonModule`: Setting this to `true` will include `.json` files in the compiled output.
