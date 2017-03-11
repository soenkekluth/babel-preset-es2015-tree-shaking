# babel-preset-es2015-tree-shaking
> Babel preset for all es2015 plugins except es2015-modules-commonjs to enable tree-shaking in webpack


## Install

```sh
$ npm install --save-dev babel-preset-es2015-tree-shaking
```

```sh
$ yarn add -D babel-preset-es2015-tree-shaking
```

## Usage

### Via `.babelrc` (Recommended)

**.babelrc**

```json
{
  "presets": ["es2015-tree-shaking"]
}
```

### Via CLI

```sh
$ babel script.js --presets es2015-tree-shaking
```

### Via Node API

```javascript
require("babel-core").transform("code", {
  presets: ["es2015-tree-shaking"]
});
```
