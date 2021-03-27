# Winston

Winston is a helpful logging tool which allows for some slightly cleaner logging. This configuration makes the log levels transparent (i.e. `warn` vs `error`), includes timestamps, and still provides the error message and stack (if applicable).

## Install

Winston needs to be installed with the following command:

```bash
npm i winston
```

## Configuration

For a TypeScript project following [my default configuration](/node-ts-config/index.md), this code goes in a `src/utils/logHandler.ts` file.

```ts
import { createLogger, format, transports, config } from "winston";
const { combine, timestamp, colorize, printf } = format;

export const logHandler = createLogger({
  levels: config.npm.levels,
  level: "silly",
  transports: [new transports.Console()],
  format: combine(
    timestamp({
      format: "YYYY-MM-DD HH:mm:ss",
    }),
    colorize(),
    printf((info) => `${info.level}: ${[info.timestamp]}: ${info.message}`)
  ),
  exitOnError: false,
});
```

Then, to call it, we use:

```ts
logHandler.log(level, message);
```

The `level` parameter is any of the `npm` levels (listed here in order of severity): `error`, `warn`, `info`, `http`, `verbose`, `debug`, and `silly`.

The `message` parameter is the string to log to the console.

> [!NOTE]
> Error objects, such as those passed to a try/catch, need to be destructured with the below code.

```ts
logHandler.log(
  "error",
  JSON.stringify({ errorMessage: error.message, errorStack: error.stack })
);
```
