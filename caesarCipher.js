function caesarCipher(string, shift) {
  return string
    .split('')
    .map((char) => {
      if (char >= 'a' && char <= 'z') {
        return String.fromCharCode(
          ((((char.charCodeAt(0) - 97 + shift) % 26) + 26) % 26) + 97,
        );
      }

      if (char >= 'A' && char <= 'Z') {
        return String.fromCharCode(
          ((((char.charCodeAt(0) - 65 + shift) % 26) + 26) % 26) + 65,
        );
      }

      return char;
    })
    .join('');
}

export { caesarCipher };
