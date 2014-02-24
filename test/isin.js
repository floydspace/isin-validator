var assert = require("assert-plus"),
	isin = require("../index");

describe("isin", function () {
	"use strict";
	describe("sync", function () {
		it("invalid character in ISIN", function () {
			assert.notStrictEqual(isin("EU000a1G0AE8"), undefined);
		});
		it("invalid country code", function () {
			assert.notStrictEqual(isin("XX000A1G0AE8"), undefined);
		});
		it("invalid country code without checks", function () {
			assert.strictEqual(isin("XX000A1G0AE8", undefined, {checkCountryCode: false, checkCheckDigit: false}), undefined);
		});
		it("XS country code", function () {
			assert.strictEqual(isin("XS0832628423"), undefined);
		});
		it("EU country code", function () {
			assert.strictEqual(isin("EU000A1G0AE8"), undefined);
		});
		it("invalid check digit", function () {
			assert.notStrictEqual(isin("DE000A1G0AEA"), undefined);
		});
		it("valid EU000A1G0AE8", function () {
			assert.strictEqual(isin("EU000A1G0AE8"), undefined);
		});
		it("valid US298785DF01", function () {
			assert.strictEqual(isin("US298785DF01"), undefined);
		});
		it("valid LU0953782009", function () {
			assert.strictEqual(isin("LU0953782009"), undefined);
		});
		it("valid XS0425743506", function () {
			assert.strictEqual(isin("XS0425743506"), undefined);
		});
		it("valid DE0005557508", function () {
			assert.strictEqual(isin("DE0005557508"), undefined);
		});
		it("valid DE0001135390", function () {
			assert.strictEqual(isin("DE0001135390"), undefined);
		});
	});
	describe("async", function () {
		it("invalid character in ISIN", function (done) {
			isin("EU000a1G0AE8", function(err) {
				assert.notStrictEqual(err, undefined);
				done();
			});
		});
		it("invalid country code", function (done) {
			isin("XX000A1G0AE8", function(err) {
				assert.notStrictEqual(err, undefined);
				done();
			});
		});
		it("XS country code", function (done) {
			isin("XS0832628423", function(err) {
				assert.strictEqual(err, undefined);
				done();
			});
		});
		it("EU country code", function (done) {
			isin("EU000A1G0AE8", function(err) {
				assert.strictEqual(err, undefined);
				done();
			});
		});
		it("invalid check digit", function (done) {
			isin("DE000A1G0AEA", function(err) {
				assert.notStrictEqual(err, undefined);
				done();
			});
		});
		it("valid EU000A1G0AE8", function (done) {
			isin("EU000A1G0AE8", function(err) {
				assert.strictEqual(err, undefined);
				done();
			});
		});
		it("valid US298785DF01", function (done) {
			isin("US298785DF01", function(err) {
				assert.strictEqual(err, undefined);
				done();
			});
		});
		it("valid LU0953782009", function (done) {
			isin("LU0953782009", function(err) {
				assert.strictEqual(err, undefined);
				done();
			});
		});
		it("valid XS0425743506", function (done) {
			isin("XS0425743506", function(err) {
				assert.strictEqual(err, undefined);
				done();
			});
		});
		it("valid DE0005557508", function (done) {
			isin("DE0005557508", function(err) {
				assert.strictEqual(err, undefined);
				done();
			});
		});
	});
});
