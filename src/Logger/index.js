const fs = require('fs').promises;
const path = require('path');

class Logger {
  constructor(source, logFilePath) {
    this.sourse = source;
    this.logFilePath = logFilePath ? path.join(__dirname, '../../' , path.basename(logFilePath)) : null;
  }

  async writeLog(text) {
    await fs.appendFile(this.logFilePath, text, 'utf8').catch(err => console.err(err));
  }

   info(text) {
    const date = new Date(Date.now()).toLocaleString();
    const toFileLog = `[${date}] (${this.sourse}) [INFO] ${text}`;
    const toConsoleLog = `[${date}] (${this.sourse}) [INFO] ${text}\x1b[0m`;

    console.log(toConsoleLog);
    this.writeLog(toFileLog + '\n');
  }

  success(text) {
    const date = new Date(Date.now()).toLocaleString();
    const toFileLog = `[${date}] (${this.sourse}) [INFO] ${text}`;
    const toConsoleLog = `\x1b[36m[${date}] (${this.sourse}) [INFO] ${text}\x1b[0m`;

    console.log(toConsoleLog);
    this.writeLog(toFileLog + '\n');
  }

  warn(text) {
    const date = new Date(Date.now()).toLocaleString();
    const toFileLog = `[${date}] (${this.sourse}) [WARN] ${text}`;
    const toConsoleLog = `\x1b[33m[${date}] (${this.sourse}) [WARN] ${text}\x1b[0m`;

    console.log(toConsoleLog);
    this.writeLog(toFileLog + '\n');
  }

  error(text) {
    const date = new Date(Date.now()).toLocaleString();
    const toFileLog = `[${date}] (${this.sourse}) [ERROR] ${text}`;
    const toConsoleLog = `\x1b[31m[${date}] (${this.sourse}) [ERROR] ${text}\x1b[0m`;

    console.log(toConsoleLog);
    this.writeLog(toFileLog + '\n');
  }
}

module.exports = Logger;
