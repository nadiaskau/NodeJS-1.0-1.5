const fs = require('fs');
const readline = require('readline-sync');
const parameters = require('./parameters.js');
let filename = 'userid-and-email.txt'; //jeg kan ikke huske, hvordan filnavnet var i process.argv[2] - den er i hvert fald undefined her. 

let user = readline.question("Enter user ID: ");
let email = readline.question("Enter email: ");
let newEmail; 
let reg = new RegExp(`${user}`);
let regEmail = new RegExp(`${email}`); 

let newLines = `{"Name": "${user}", "Email": "${email}"}, \n`; //JSON format - but not in an array, not sure how to append in the middle of the text? I need [] surrounding the objects

if(parameters.paramVal(user) && parameters.paramVal(email)){ //if userid and email are not empty

    fs.readFile(filename, (err, data) => { //read file
        if (err) {
            throw err;
        }

        if( reg.test(data) ){  //returns boolean - if true, user already exist
            console.log('User already exist'); 
            newEmail = readline.question("Enter new email: "); //asks for new email
            let newData = regEmail[Symbol.replace](data, newEmail); //creating new string with replaced email
            fs.writeFile(filename, newData, (err) => { //overwrite file with new data
                if(err) {
                    throw err;
                }
                console.log('Yes, the e-mail was updated');
            });
        }
        else {    
            fs.appendFile(filename, newLines , (err) => { //append user to file
                if(err) {
                    throw err;
                }
                console.log('Yes. The new_content was appended successfully and asynchronously');
            });
        }
    });

}

