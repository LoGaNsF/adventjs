export default function pangram(letter) {
  return new Set(letter.toLowerCase().match(/[a-záéíóúäëïöü]/g)).size > 26;
}
