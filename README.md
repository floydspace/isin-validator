
[![Build Status](https://secure.travis-ci.org/michaelwittig/node-isin-validator.png)](http://travis-ci.org/michaelwittig/node-isin-validator)
[![NPM version](https://badge.fury.io/js/cinovo-isin-validator.png)](http://badge.fury.io/js/cinovo-isin-validator)
[![NPM dependencies](https://david-dm.org/michaelwittig/node-isin-validator.png)](https://david-dm.org/michaelwittig/node-isin-validator)

# cinovo-isin-validator

Validate International Securities Identification Number (ISIN) . Checks:

* if the format is correct
* if the Country Code is correct
* if the check digit is correct

## Getting started

```
npm install cinovo-isin-validator
```

sync style

```
var validator = require("cinovo-isin-validator");
if (validator("XX000A1G0AE8")) {
	console.log("ISIN is invalid!");
} else {
	console.log("ISIN is fine!");
}
```

async style

```
var validator = require("cinovo-isin-validator");
validator("XX000A1G0AE8", function(err) {
	if (err) {
		console.log("ISIN is invalid!", err);
	} else {
		console.log("ISIN is fine!");
	}
});
```

## Options

* `checkCountryCode`: Boolean - validate of Country Code (Default: `true`)
* `checkCheckDigit`: Boolean -  validate of Check Digit (Default: `true`)

```
var validator = require("cinovo-isin-validator");
if (validator("XX000A1G0AE8", undefined, {checkCountryCode: false, checkCheckDigit: false}) {
	console.log("ISIN is invalid!");
} else {
	console.log("ISIN is fine!");
}

var validator = require("cinovo-isin-validator");
validator("XX000A1G0AE8", function(err) {
	if (err) {
		console.log("ISIN is invalid!", err);
	} else {
		console.log("ISIN is fine!");
	}
}, {checkCountryCode: false, checkCheckDigit: false});
```
