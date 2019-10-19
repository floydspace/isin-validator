
[![Build Status](https://secure.travis-ci.org/floydspace/isin-validator.png)](http://travis-ci.org/floydspace/isin-validator)
[![NPM version](https://badge.fury.io/js/isin-validator.png)](http://badge.fury.io/js/isin-validator)
[![NPM dependencies](https://david-dm.org/floydspace/isin-validator.png)](https://david-dm.org/floydspace/isin-validator)

# isin-validator

Validate International Securities Identification Number (ISIN) . Checks:

* if the format is correct
* if the Country Code is correct
* if the check digit is correct

## Getting started

```
npm install isin-validator
```

sync style

```
var validator = require("isin-validator");
if (validator("XX000A1G0AE8")) {
	console.log("ISIN is invalid!");
} else {
	console.log("ISIN is fine!");
}
```

async style

```
var validator = require("isin-validator");
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
var validator = require("isin-validator");
if (validator("XX000A1G0AE8", undefined, {checkCountryCode: false, checkCheckDigit: false}) {
	console.log("ISIN is invalid!");
} else {
	console.log("ISIN is fine!");
}

var validator = require("isin-validator");
validator("XX000A1G0AE8", function(err) {
	if (err) {
		console.log("ISIN is invalid!", err);
	} else {
		console.log("ISIN is fine!");
	}
}, {checkCountryCode: false, checkCheckDigit: false});
```
