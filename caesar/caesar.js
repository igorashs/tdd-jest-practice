export default function caesar(plainText, key) {
  function encrypt(codes, key) {
    return codes.map(c => {
      if (c >= 65 && c <= 90) {
        let enc = c + key;
        if (enc > 90) enc -= 26;
        return enc;
      }
      if (c >= 97 && c <= 122) {
        let enc = c + key;
        if (enc > 122) enc -= 26;
        return enc;
      }
      return c;
    });
  }

  if ((!key || key <= 0) && plainText) return plainText;

  if (plainText) {
    const arr = plainText.split('');
    const asciiArr = arr.map(c => c.charCodeAt());
    const caesarAsciiArr = encrypt(asciiArr, key);
    const caesarArr = caesarAsciiArr.map(c => String.fromCharCode(c));
    const caesarStr = caesarArr.join('');
    return caesarStr;
  }
  return '';
}
