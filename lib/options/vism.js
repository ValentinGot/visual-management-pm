module.exports.name = 'vism|help';

module.exports.commands = [
  {
    name: 'list',
    description: 'lists all available plugins for installation'
  },
  {
    name: 'install',
    description: 'installs all the plugins defined in .visual-management.json file'
  },
  {
    name: 'add',
    description: 'adds a new plugin to your visual management'
  },
  {
    name: 'remove',
    description: 'removes an unused plugin from your visual management'
  }
];
