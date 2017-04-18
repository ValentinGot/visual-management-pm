const program = require('commander'),
  chalk = require('chalk'),
  debug = require('debug')('vism-add'),

  pkg = require('../package.json'),
  logger = require('../vendors/logger'),
  CLI = require('../lib/cli'),
  Plugin = require('../lib/plugin'),
  Install = require('../lib/commands/install'),
  cli = CLI.getInstance();

let id;

program
  .version(pkg.version)
  .parse(process.argv);

cli.init()
  .then(() => {
    cli.exitIfNotVisualManagementProject('install');

    // Create installation folder if not exists
    Plugin.createPluginsFolder(cli);

    const install = new Install(id, {});

    return install.start();
  })
  .then(() => {
    logger.pop(`${chalk.green('success')} All plugins installed.`);
  })
  .catch((err) => {
    debug(err);

    CLI.exitOnError(err);
  });
