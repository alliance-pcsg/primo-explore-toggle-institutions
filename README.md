# primo-explore-toggle-institutions

![Build Status](https://api.travis-ci.org/alliance-pcsg/primo-explore-toggle-institutions.svg?branch=master)
[![npm version](https://img.shields.io/npm/v/primo-explore-toggle-institutions.svg)](https://www.npmjs.com/package/primo-explore-toggle-institutions)

## Features
The list of institutions that also hold an item in details view is collapsed, and a button to toggle expanding the list appears.
### screenshot
![screenshot](screenshot.png)

## Installation
### simple
copy the contents of `dist/module.js` into your view package `custom.js` file. you're done!

### with npm
you'll need [primo-explore-devenv](https://github.com/ExLibrisGroup/primo-explore-devenv).
2. Navigate to your view package root directory. For example:
    ```
    cd primo-explore/custom/MY_VIEW
    ```
3. If you do not already have a `package.json` file in this directory, create one:
    ```
    npm init -y
    ```
4. Install this package:
    ```
    npm install primo-explore-toggle-institutions --save
    ```

## Usage
First, add `toggleInstitutions` as a dependency for your local view module definition.

```js
var app = angular.module('viewCustom', ['toggleInstitutions'])
```
Then, enable the customization by embedding it in the `prmAlmaMoreInstAfter` hook:
```js
app.component('prmAlmaMoreInstAfter', {template: '<toggle-institutions />'})
```
### configuration
The default is to initially collapse the list. If you wish to keep it open initially, you can replace the above with:
```js
app.component('prmAlmaMoreInstAfter', {template: '<toggle-institutions start-hidden=false />'})
```

<!-- ## Running tests
1. Clone the repo
2. Run `npm install`
3. Run `npm test` -->
