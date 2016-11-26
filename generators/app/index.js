const generator = require('yeoman-generator');
const yosay = require('yosay');

module.exports = class MeteorAppGenerator extends generator.Base {
  constructor(...args) {
    super(...args);
  }

  initializing () {
    this.log(yosay('Welcome to the meteor guide generator.'));
  }

  prompting() {
    return this.prompt([{
      type    : 'input',
      name    : 'name',
      message : 'Your project name',
      default : this.appname
    }, {
      type    : 'list',
      name    : 'cool',
      choices : [
        'Blaze',
        'React',
        'Angular',
        'Vue'
      ],
      default: 0,
      message : 'Which front-end framework do you want to use?'
    }, {
      type    : 'checkbox',
      name    : 'packages',
      choices : [
        {
          name  : 'bootstrap',
          value : 'boostrap'
        },
        {
          name  : 'semantic',
          value : 'boostrap'
        },
        {
          name  : 'blabla',
          value : 'boostrap'
        },
        {
          name  : 'blabla',
          value : 'boostrap'
        },
      ],
      message : 'Select some awesome packages'
    }
    ]).then(function (answers) {

    }.bind(this));
  }

  configuring () {
    this.log('configuring');
  }

  install () {
    this.log('install');
  }

  end () {
    this.log(yosay('Thank you for using the Meteor guide generator.'));
  }
};
