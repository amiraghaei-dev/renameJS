const yargs = require("yargs");
const chalk = require("chalk");
const { renameFN } = require("./modules");

// using ===>  node ./app.js rename p --path C:\Users\ujkgm\OneDrive\Desktop\renameJS\title t --text _Downloadly.ir_en

yargs.scriptName(`${chalk.yellow("rename files")}`);
yargs.usage(`$0 ${chalk.red("<command>")} ${chalk.green("[args]")}`);

yargs.version("1.1.0");

yargs.command({
  command: "rename",
  aliases: ["r"],
  describe: `${chalk.green("[rename Files]")}`,
  builder: {
    path: {
      alias: "p",
      describe: "A folder where you can search and rename files",
      demandOption: true,
      type: "string",
    },
    path: {
      alias: "t",
      describe: "Text to remove from file name",
      demandOption: true,
      type: "string",
    },
  },
  handler({ path, text }) {
    renameFN(path, text);
  },
});

yargs.parse();
