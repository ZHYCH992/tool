//base64解码
const decodeBase64 = (base64String) => {
  const raw = window.atob(base64String);
  const len = raw.length;
  const bytes = new Uint8Array(len);

  for (let i = 0; i < len; i++) {
    bytes[i] = raw.charCodeAt(i);
  }
  return new TextDecoder('utf-8').decode(bytes);
};
//生成随机字符串
function shuffleString(str) {
  const arr = str.split('');
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr.join('');
}
function generateRandomString(length = 10, mode = 'all') {
  const DIGITS = '0123456789';
  const LOWERCASE = 'abcdefghijklmnopqrstuvwxyz';
  const UPPERCASE = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const SYMBOLS = '!@#$%^&*()_+-=[]{}|;:\'",./<>?';
  let result = '';
  let charSets;

  switch (mode) {
    case 'numeric':
      charSets = DIGITS;
      break;
    case 'alpha':
      charSets = LOWERCASE;
      break;
    case 'alphanumeric':
      charSets = {
        digits: DIGITS,
        letters: LOWERCASE + UPPERCASE,
      };
      break;
    case 'all':
      charSets = {
        digits: DIGITS,
        lowercase: LOWERCASE,
        uppercase: UPPERCASE,
        symbols: SYMBOLS,
      };
      break;
    default:
      throw new Error(
        'Invalid mode. Valid modes are "numeric", "alpha", "alphanumeric", and "all".',
      );
  }

  if (mode === 'all' && length < 4) {
    throw new Error(
      'For mode "all", the length must be at least 4 to include one of each category.',
    );
  }

  // Generate specific proportions of characters for "alphanumeric" and "all" modes
  if (mode === 'alphanumeric') {
    const halfLength = Math.floor(length / 2);
    for (let i = 0; i < halfLength; i++) {
      result += charSets.digits.charAt(
        Math.floor(Math.random() * charSets.digits.length),
      );
      result += charSets.letters.charAt(
        Math.floor(Math.random() * charSets.letters.length),
      );
    }
  } else if (mode === 'all') {
    const quarterLength = Math.floor(length / 4);
    for (let i = 0; i < quarterLength; i++) {
      result += charSets.digits.charAt(
        Math.floor(Math.random() * charSets.digits.length),
      );
      result += charSets.lowercase.charAt(
        Math.floor(Math.random() * charSets.lowercase.length),
      );
      result += charSets.uppercase.charAt(
        Math.floor(Math.random() * charSets.uppercase.length),
      );
      result += charSets.symbols.charAt(
        Math.floor(Math.random() * charSets.symbols.length),
      );
    }
  }

  // Adjust length if necessary
  length -= result.length;

  // Generate remaining random characters
  let characters;
  if (mode === 'alphanumeric') {
    characters = charSets.digits + charSets.letters;
  } else if (mode === 'all') {
    characters =
      charSets.digits +
      charSets.lowercase +
      charSets.uppercase +
      charSets.symbols;
  } else {
    characters = charSets;
  }

  const charactersLength = characters.length;

  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  // Shuffle the result to ensure randomness
  result = shuffleString(result);

  return result;
}

const code = {
  base64: {
    encode: (str) => {
      return window.btoa(unescape(encodeURIComponent(str)));
    },
    decode: decodeBase64,
  },
  random: generateRandomString,
};

export default code;
