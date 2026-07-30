# Font Awesome Pro+ v7.3.1

```bash
npm install --save-exact webfont-awesome-pro
```

Use the Latest [**Font Awesome Pro+**](https://fontawesome.com/) for Free. Get all stylesheets and webfonts into your project easily!

- Package Version: 7.3.2-wip.1 (versions older than 7.2.0 will not work due to the latest anti-bot measures)
- [NEW] Bypass Version: 1.0
- Font Awesome Pro+ Version: 7.3.1

## NOTICE
**Font Awesome Pro+** was made for educational purposes only!

This package provides **Paid (Pro+) Version** for the latest official package. It is intended for experimental and **personal use** only. It is **licensed for commercial** use.

**DO NOT** use this package if you are not the *Creators* or you have not buy the official product from the official website.

To unlock commercial use for your own projects, and get an official product license, please consider to go to the Font Awesome official webiste: https://fontawesome.com/plans

## SETUP

Install the package

```bash
npm install --save-exact webfont-awesome-pro
```

## USAGE

Choose one from the following how you want to use the font awesome pro+.

#### [With Bundler](#bundler-recommended)
**Recommended** if you understand how to work with bundlers.
- via [javascript/typescript](#javascripttypescript-with-bundler) with bundler
- via [scss/css](#scsscss-with-bundler) with bundler

#### [With Downloader](#downloader-not-recommended)
Recommended if you want to host the font awesome pro+ somewhere and decide the folder to store the font awesome pro+ assets. Then you can connect them to your project manually.
- via [command line](#command-line)
- via [script `package.json`](#script-packagejson)
- via file execution [es modules import](#javascripttypescript-es-modules---import)
- via file execution [commonjs require](#javascripttypescript-commonjs---require)

## Bundler (recommended)

You can use some bundlers such as webpack, parcel, etc.

### JavaScript/TypeScript with bundler
> [!TIP]
> This is the most effective way

**All styles**
```javascript
// example-style.ts or example.js
// import all font awesome pro+ styles

// with .scss
import "webfont-awesome-pro/scss/allstyles.scss";
// with .css
import "webfont-awesome-pro/css/allstyles.css";
// or traditional import
import("webfont-awesome-pro/scss/allstyles.scss")

// your code
document.body.innerHTML = `
  <p>Look at these icons!</p>
  <i class="fa-sharp-duotone fa-solid fa-user-secret"></i>
`;

```

**Specific styles**
```javascript
// or if you want to import specific
// font awesome pro+ styles
// make sure to always import
// the 'fontawesome.scss' (or .css)
// before other styles
import "webfont-awesome-pro/scss/fontawesome.scss";

// then the primary styles
import "webfont-awesome-pro/scss/solid.scss";
import "webfont-awesome-pro/scss/regular.scss";
import "webfont-awesome-pro/scss/duotone.scss";
import "webfont-awesome-pro/scss/sharp-solid.scss";
import "webfont-awesome-pro/scss/sharp-duotone-solid.scss";

// then the additional styles
import "webfont-awesome-pro/scss/chisel-regular.scss";
import "webfont-awesome-pro/scss/etch-solid.scss";
import "webfont-awesome-pro/scss/notdog-solid.scss";
```

### SCSS/CSS with bundler

```scss
// example-main.scss or example-main.css
// import all font awesome pro+ styles

// import with scss (support: scss)
@use "webfont-awesome-pro/scss/allstyles.scss";
// or traditional import (support: scss/css)
@import "webfont-awesome-pro/scss/allstyles.scss";
// or even more traditional (support: scss/css)
@import url("webfont-awesome-pro/scss/allstyles.scss");

// same rule applies for specific styles like the javasript example above
```

---

## Downloader (Not Recommended)

> [!NOTE]
> These method bellow will download the font awesome pro+ assets directly into your project folder.

You decide the folder to store the font awesome pro+ assets.

### Command Line
```bash
npx fapro
```

### Script `package.json`
```javascript
...
"scripts": {
  ...
  "get-fapro": "fapro"
}
```
```bash
npm run get-fapro
```

### JavaScript/TypeScript ES Modules - import
```javascript
import { getFapro } from "webfont-awesome-pro";

// start the downloader
getFapro();
```

### JavaScript/TypeScript CommonJS - require
```javascript
const { getFapro } = require("webfont-awesome-pro");

// start the downloader
getFapro();
```
