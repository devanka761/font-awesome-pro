# Font Awesome Pro+ v7.3.1

```bash
npm install --save-exact webfont-awesome-pro
```

> Downloadable version: [font-awesome-pro-v7.3.1.zip](https://github.com/devanka761/font-awesome-pro/releases)

Use the Latest [**Font Awesome Pro+**](https://fontawesome.com/) for Free. Get all stylesheets and webfonts into your project easily!

- Package Version: 7.3.2-wip.2 (versions older than 7.2.0 will not work due to the latest anti-bot measures)
- Font Awesome Pro+ Version: 7.3.1

## NOTICE
**Font Awesome Pro+** was made for educational purposes only!

This package provides **Paid (Pro+) Version** for the latest official package. It is intended for experimental and **personal use** only. It is **licensed for commercial** use.

**DO NOT** use this package if you are not the *Creators* or you have not buy the official product from the official website.

To unlock commercial use for your own projects, and get an official product license, please consider to go to the Font Awesome official webiste: https://fontawesome.com/plans

## TABLE OF CONTENTS
- [**NOTICE**](#notice)
- **SETUP**
  - [Setup with NPM](#setup)
  - or [Download font-awesome-pro-v7.3.1.zip](https://github.com/devanka761/font-awesome-pro/releases)
- **HOW TO USE**
  - [NPM version](#how-to-use-with-npm)
  - [Download version](#how-to-use-download-version)
- **SPECIFY ICON PACKS**
  - [Use specific icon packs only](#specify-icon-packs)
- [**PROBLEMS**](#problems)

## SETUP

Install the package

```bash
npm install --save-exact webfont-awesome-pro
```

## USAGE

### HOW TO USE: WITH NPM

You're used to working with a bundler, huh?
- [TypeScript/JavaScript](#typescriptjavascript) with bundler
- [SCSS/CSS](#scsscss) with bundler

Use your favorite bundler (webpack, vite, etc).

#### TypeScript/JavaScript

example `style-main.ts` / `style-main.js`:

```javascript
// SCSS
import "webfont-awesome-pro/scss/allstyles.scss";

// or CSS
import "webfont-awesome-pro/css/allstyles.css";

// your code
document.body.innerHTML = `
  <p>Look at these icons!</p>
  <i class="fa-sharp-duotone fa-solid fa-user-secret"></i>
`;

```

#### SCSS/CSS

example `style.scss` / `style.css`:

```scss
// support: SCSS
@use "webfont-awesome-pro/scss/allstyles.scss";

// support: CSS, SCSS
@import "webfont-awesome-pro/scss/allstyles.scss";

// support: CSS, SCSS
@import url("webfont-awesome-pro/scss/allstyles.scss");

```

---

### HOW TO USE: DOWNLOAD VERSION

Extract `css` and `webfonts` into the same folder.

Example:

```
MY-PROJECT
│   index.html
│   style.css
│   ...
│
└───fapro
    ├───css
    │     ...css
    │     ...css
    │     ...
    │
    └───webfonts
          ...woff2
          ...woff2
          ...
```

#### CSS

example `style.css`

```css
@import "./fapro/css/allstyles.css";
```

#### HTML

example `index.html`:

```html
<!DOCTYPE html>
<html lang="en">
<head>

  ... meta, etc

  <link rel="stylesheet" href="./fapro/css/allstyles.css" />

  ... style, theme, script, etc

  <title>MyCoolApp</title>
</head>
<body>
  
  <main class="main-example">
    <i class="fa-vellum fa-solid fa-pizza-slice"></i>
    <i class="fa-pixel fa-regular fa-shirt"></i>
  </main>

</body>
</html>
```


### SPECIFY ICON PACKS

You can import specific font awesome pro+ styles. Make sure to always import the `fontawesome.scss` / `fontawesome.css` before other styles.

example `main-style.js` with bundler:

```javascript
import "webfont-awesome-pro/css/fontawesome.css";

import "webfont-awesome-pro/scss/regular.scss";
import "webfont-awesome-pro/scss/duotone.scss";
import "webfont-awesome-pro/scss/sharp-duotone-solid.scss";

import "webfont-awesome-pro/scss/chisel-regular.scss";
import "webfont-awesome-pro/scss/etch-solid.scss";
import "webfont-awesome-pro/scss/notdog-solid.scss";

// imported: fa-regular, fa-duotone, fa-sharp-duotone-solid, fa-chisel-regular, fa-etch-solid, fa-notdog-solid
```

## PROBLEMS?

Please post any bugs as a [GitHub issue](https://github.com/devanka761/font-awesome-pro/issues).