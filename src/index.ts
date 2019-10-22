import { getName, registerLocale } from 'i18n-iso-countries';

registerLocale(require('i18n-iso-countries/langs/en.json'));

const PSEUDO_COUNTRY_CODES = {
  XS: true,
  XA: true,
  XB: true,
  XC: true,
  XD: true,
  XF: true,
  QS: true,
  QT: true,
  QW: true,
  EU: true,
};

function ret(callback: (err?: Error) => void, err?: Error) {
  if (callback !== undefined) {
    callback(err);
    return;
  }
  return err;
}

function calcCrossSum(i: number) {
  let qs = 0;

  do {
    qs += i % 10;
    i = Math.floor(i / 10);
  } while (i > 0);
  return qs;
}

function calculateCheckDigit(countryCode: string, NSIN: string) {
  const s = countryCode + NSIN;
  const nums: number[] = [];
  const weights: number[] = [];
  let crossSum = 0;

  for (let i = 0; i < s.length; i += 1) {
    const c = s[i];
    if (c === '0') {
      nums.push(0);
    } else if (c === '1') {
      nums.push(1);
    } else if (c === '2') {
      nums.push(2);
    } else if (c === '3') {
      nums.push(3);
    } else if (c === '4') {
      nums.push(4);
    } else if (c === '5') {
      nums.push(5);
    } else if (c === '6') {
      nums.push(6);
    } else if (c === '7') {
      nums.push(7);
    } else if (c === '8') {
      nums.push(8);
    } else if (c === '9') {
      nums.push(9);
    } else if (c === 'A') {
      nums.push(1);
      nums.push(0);
    } else if (c === 'B') {
      nums.push(1);
      nums.push(1);
    } else if (c === 'C') {
      nums.push(1);
      nums.push(2);
    } else if (c === 'D') {
      nums.push(1);
      nums.push(3);
    } else if (c === 'E') {
      nums.push(1);
      nums.push(4);
    } else if (c === 'F') {
      nums.push(1);
      nums.push(5);
    } else if (c === 'G') {
      nums.push(1);
      nums.push(6);
    } else if (c === 'H') {
      nums.push(1);
      nums.push(7);
    } else if (c === 'I') {
      nums.push(1);
      nums.push(8);
    } else if (c === 'J') {
      nums.push(1);
      nums.push(9);
    } else if (c === 'K') {
      nums.push(2);
      nums.push(0);
    } else if (c === 'L') {
      nums.push(2);
      nums.push(1);
    } else if (c === 'M') {
      nums.push(2);
      nums.push(2);
    } else if (c === 'N') {
      nums.push(2);
      nums.push(3);
    } else if (c === 'O') {
      nums.push(2);
      nums.push(4);
    } else if (c === 'P') {
      nums.push(2);
      nums.push(5);
    } else if (c === 'Q') {
      nums.push(2);
      nums.push(6);
    } else if (c === 'R') {
      nums.push(2);
      nums.push(7);
    } else if (c === 'S') {
      nums.push(2);
      nums.push(8);
    } else if (c === 'T') {
      nums.push(2);
      nums.push(9);
    } else if (c === 'U') {
      nums.push(3);
      nums.push(0);
    } else if (c === 'V') {
      nums.push(3);
      nums.push(1);
    } else if (c === 'W') {
      nums.push(3);
      nums.push(2);
    } else if (c === 'X') {
      nums.push(3);
      nums.push(3);
    } else if (c === 'Y') {
      nums.push(3);
      nums.push(4);
    } else if (c === 'Z') {
      nums.push(3);
      nums.push(5);
    }
  }
  for (let i = 0; i < nums.length; i += 1) {
    if (i % 2 === 0) {
      weights.push(2);
    } else {
      weights.push(1);
    }
  }
  weights.reverse();
  for (let i = 0; i < nums.length; i += 1) {
    crossSum += calcCrossSum(nums[i] * weights[i]);
  }
  const diff = 10 - (crossSum % 10);
  if (diff === 10) {
    return 0;
  }
  return diff;
}

export interface Options {
  checkCountryCode?: boolean;
  checkCheckDigit?: boolean;
}

export default function (ISIN: string, callback?: (err?: Error) => void, options?: Options) {
  options = options || {};

  if (ISIN.length !== 12) {
    return ret(callback, new Error('ISIN must be 12 characters long'));
  }

  if (!/^[A-Z0-9]+$/.test(ISIN)) {
    return ret(callback, new Error('ISIN contains not only [A-Z0-9]'));
  }

  const countryCode = ISIN.substr(0, 2);
  if (!/^[A-Z]+$/.test(countryCode)) {
    return ret(callback, new Error('Country code contains not only [A-Z]'));
  }
  if (options.checkCountryCode !== false) {
    if (PSEUDO_COUNTRY_CODES[countryCode] !== true && getName(countryCode, 'en') === undefined) {
      return ret(callback, new Error('Country code is wrong'));
    }
  }

  const NSIN = ISIN.substr(2, 9);
  if (!/^[A-Z0-9]+$/.test(NSIN)) {
    return ret(callback, new Error('NSIN contains not only [A-Z0-9]'));
  }

  let checkDigit: string | number = ISIN[11];
  if (!/^[0-9]+$/.test(checkDigit)) {
    return ret(callback, new Error('Check digit contains not only [0-9]'));
  }
  if (options.checkCheckDigit !== false) {
    checkDigit = parseInt(checkDigit, 10);
    if (checkDigit !== calculateCheckDigit(countryCode, NSIN)) {
      return ret(callback, new Error('Check digit is wrong'));
    }
  }

  return ret(callback);
}
