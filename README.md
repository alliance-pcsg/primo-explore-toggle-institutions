# primo-explore-toggle-institutions

<!-- ![Build Status](https://api.travis-ci.org/Alliance-PCJWG/primo-explore-clickable-logo.svg?branch=master) -->

## Features
The list of institutions that also hold an item in details view is collapsed, and a button to toggle expanding the list appears.

### Screenshot
![screenshot](screenshot.png)

## Install
1. Make sure you've installed and configured [primo-explore-devenv](https://github.com/ExLibrisGroup/primo-explore-devenv).
2. Navigate to your template/central package root directory. For example:
    ```
    cd primo-explore/custom/MY_VIEW_ID
    ```
3. If you do not already have a `package.json` file in this directory, create one:
    ```
    npm init -y
    ```
4. Install this package:
    ```
    npm install primo-explore-toggle-institutions --save-dev
    ```

## Usage
Once this package is installed, add `toggleInstitutions` as a dependency for your custom module definition.

```js
var app = angular.module('viewCustom', ['toggleInstitutions'])
```
Note: If you're using the `--browserify` build option, you will need to first import the module with:

```javascript
import 'toggleInstitutions';
```

<!-- ## Running tests
1. Clone the repo
2. Run `npm install`
3. Run `npm test` -->
