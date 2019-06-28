// Summary Comment - instead of combining if statements, separate into imbedded if statements. 

function lookUpProfile(name, prop){
// Only change code below this line

for (var i = 0; i < contacts.length; i++){
    if (contacts[i].firstName === name) {
        if (contacts[i].hasOwnProperty(prop)) {
            return contacts[i][prop];
        } else {
            return "No such property";
        }
    }
}
return "No such contact";
// Only change code above this line
