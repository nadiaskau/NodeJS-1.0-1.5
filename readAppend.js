const fs = require('fs');
const readline = require('readline-sync');
const parameters = require('./parameters.js');
let filename = 'userid-and-email.txt'; //jeg kan ikke huske, hvordan filnavnet var i process.argv[2] - den er i hvert fald undefined her. 

let user = readline.question("Enter user ID: ");
let email = readline.question("Enter email: ");
console.log( parameters.paramVal(user) );

let newLines = `{"Name": "${user}", "Email": "${email}"}, \n`;

if(parameters.paramVal(user) && parameters.paramVal(email)){ //hvis navn og email er udfyldt - virker dog ikke. Det er ikke null, selvom man ikke indtaster?
    fs.appendFile(filename, newLines , (err) => {
        if(err) {
            throw err;
        }
        console.log('Yes. The new_content was appended successfully and asynchronously');
    });
}

fs.readFile(filename, (err, data) => {
    if (err) {
        throw err;
    }
    console.log("Content now:\n--------\n" + data + "\nRead asynchronously!");
});

console.log(process.argv); //jeg kan ikke huske, hvordan filnavnet var i process.argv[2] - den er i hvert fald undefined her. 