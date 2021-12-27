export default function fixFiles(files) {
  return files.map((file, idx) => {
    const partialArray = files.slice(0, idx + 1);
    const count = partialArray.filter((x) => x === file).length;

    if (count - 1) {
      return `${file}(${count - 1})`;
    }

    return file;
  });
}
