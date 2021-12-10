export default function isValid(letter) {
  const regex = new RegExp(/^([\wá-ú ]*(\([^{}\[\]][\wá-ú]*\))[\wá-ú ]*)+$/gi);

  return regex.test(letter);
}
