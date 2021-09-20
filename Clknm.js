var chalk = require('chalk');
// console.log(chalk.green.inverse.bold("Success...!"));
const command = process.argv[2];

if(command == 'add')
{
    console.log(chalk.green.inverse.bold('Notes Has Added....!'));

}
else if(command == 'remove'){
    console.log(chalk.red.inverse.bold('Notes Has been Removed...!'));
}