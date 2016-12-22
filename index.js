//Setting up variables.
var victimNames = [];
var victimNumbers = [];
var victimStreets = [];
var volunteerNames = [];
var volunteerNumbers = [];
var volunteerStreets = [];
//Prompt to see how many victims wish to enter.
var victims = parseInt(prompt ("How many disaster victims wish to enter?"));
// Loop to request information about each victim.
for (var i=0; i<victims; i++) {
      victimNames.push(prompt("Please provide the victim's name."));
      victimNumbers.push(prompt("Please provide the victim's phone number."));
      victimStreets.push(prompt ("Please provide the victim's street address."));
}
//Prompt to see how many volunteers wish to enter.
var volunteers = parseInt(prompt ("How many disaster victims wish to enter?"));
// Loop to request information about each victim.
for (var i=0; i<volunteers; i++) {
      volunteerNames.push(prompt("Please provide the victim's name."));
      volunteerNumbers.push(prompt("Please provide the victim's phone number."));
      volunteerStreets.push(prompt ("Please provide the victim's street address."));
}

var message = "# Victims: " + victims + "\n" +
	"# Volunteers: " + volunteers + "\n";

message += "Victims:\n";
for(var i=0; i<victims; i++) {
	message += "  Name: " + victimNames[i] + ", " +
		"Phone: " + victimNumbers[i] + ", " +
		"Street: " + victimStreets[i] + "\n";
}

message += "Volunteers:\n";
for(var i=0; i<volunteers; i++) {
	message += "  Name: " + volunteerNames[i] + ", " +
		"Phone: " + volunteerNumbers[i] + ", " +
		"Street: " + volunteerStreets[i] + "\n";
}

alert(message);
