const { resolve } = require("path");
const { readFileSync, writeFileSync } = require("fs");
const { spawn } = require("child_process");

function overwrite(path, transformer) {
  const absPath = resolve(path);
  let data;
  try {
    data = JSON.parse(readFileSync(absPath).toString());
  } catch (e) {
    data = {};
  }

  const newData = transformer(data);
  writeFileSync(absPath, JSON.stringify(newData, null, 4));

  return () => {
    writeFileSync(absPath, JSON.stringify(data, null, 4));
  };
}

function exec(cmd) {
  return new Promise((resolve, reject) => {
    console.log("Running cmd " + cmd);
    const proc = spawn(cmd, { shell: true });
    proc.stderr.pipe(process.stderr);
    proc.stdout.pipe(process.stdout);
    proc.on("close", code => {
      if (code !== 0) return reject(code);
      return resolve(code);
    });
  });
}

module.exports.overwrite = overwrite;
module.exports.exec = exec;
