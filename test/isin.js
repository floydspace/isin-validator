const assert = require('assert-plus');
const isin = require('../index');

describe('isin', () => {
  describe('sync', () => {
    it('invalid character in ISIN', () => {
      assert.notStrictEqual(isin('EU000a1G0AE8'), undefined);
    });
    it('invalid country code', () => {
      assert.notStrictEqual(isin('XX000A1G0AE8'), undefined);
    });
    it('invalid country code without checks', () => {
      assert.strictEqual(isin('XX000A1G0AE8', undefined, { checkCountryCode: false, checkCheckDigit: false }), undefined);
    });
    it('XS country code', () => {
      assert.strictEqual(isin('XS0832628423'), undefined);
    });
    it('EU country code', () => {
      assert.strictEqual(isin('EU000A1G0AE8'), undefined);
    });
    it('invalid check digit', () => {
      assert.notStrictEqual(isin('DE000A1G0AEA'), undefined);
    });
    it('valid EU000A1G0AE8', () => {
      assert.strictEqual(isin('EU000A1G0AE8'), undefined);
    });
    it('valid US298785DF01', () => {
      assert.strictEqual(isin('US298785DF01'), undefined);
    });
    it('valid LU0953782009', () => {
      assert.strictEqual(isin('LU0953782009'), undefined);
    });
    it('valid XS0425743506', () => {
      assert.strictEqual(isin('XS0425743506'), undefined);
    });
    it('valid DE0005557508', () => {
      assert.strictEqual(isin('DE0005557508'), undefined);
    });
    it('valid DE0001135390', () => {
      assert.strictEqual(isin('DE0001135390'), undefined);
    });
  });
  describe('async', () => {
    it('invalid character in ISIN', (done) => {
      isin('EU000a1G0AE8', (err) => {
        assert.notStrictEqual(err, undefined);
        done();
      });
    });
    it('invalid country code', (done) => {
      isin('XX000A1G0AE8', (err) => {
        assert.notStrictEqual(err, undefined);
        done();
      });
    });
    it('XS country code', (done) => {
      isin('XS0832628423', (err) => {
        assert.strictEqual(err, undefined);
        done();
      });
    });
    it('EU country code', (done) => {
      isin('EU000A1G0AE8', (err) => {
        assert.strictEqual(err, undefined);
        done();
      });
    });
    it('invalid check digit', (done) => {
      isin('DE000A1G0AEA', (err) => {
        assert.notStrictEqual(err, undefined);
        done();
      });
    });
    it('valid EU000A1G0AE8', (done) => {
      isin('EU000A1G0AE8', (err) => {
        assert.strictEqual(err, undefined);
        done();
      });
    });
    it('valid US298785DF01', (done) => {
      isin('US298785DF01', (err) => {
        assert.strictEqual(err, undefined);
        done();
      });
    });
    it('valid LU0953782009', (done) => {
      isin('LU0953782009', (err) => {
        assert.strictEqual(err, undefined);
        done();
      });
    });
    it('valid XS0425743506', (done) => {
      isin('XS0425743506', (err) => {
        assert.strictEqual(err, undefined);
        done();
      });
    });
    it('valid DE0005557508', (done) => {
      isin('DE0005557508', (err) => {
        assert.strictEqual(err, undefined);
        done();
      });
    });
  });
});
