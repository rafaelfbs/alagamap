const { resolve } = require("path");
const { readFileSync, writeFileSync } = require("fs");

function overwrite(path, transformer) {
  const absPath = resolve(path);
  let data;
  try {
    data = JSON.parse(readFileSync(absPath).toString());
  } catch (e) {
    data = {};
  }

  const newData = transformer(data);
  console.log(`New data for ${path}:\n${JSON.stringify(newData, null, 4)}`);
  writeFileSync(absPath, JSON.stringify(newData, null, 4));

  return () => {
    writeFileSync(absPath, JSON.stringify(data, null, 4));
  };
}

module.exports.overwrite = overwrite;
