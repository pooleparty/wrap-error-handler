# wrap-error-handler

Utility used to catch unhandled exceptions in express route handlers

## Installation

Using npm:

```
npm install --save wrap-error-handler
```

## Usage

```js
import wrapErrorHandler from "wrap-error-handler";

function routeHandler(req, res, next) {
  const result = doSomethingThatMayThrowAnError();
  res.json(result);
}

const router = express.Router();

router.get('/', wrapErrorHandler(routeHandler));
```

## API

### wrapErrorHandler(fn)

#### fn

Type: `function`

Express handler function to wrap.

## Development

### Install dependencies

```
npm install
```

### Run linter

```
npm run lint
```

### Run tests

```
npm run tests
```
