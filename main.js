

var dan = new Character('Dan', 'Bard');
var stats = ['strength', 'dexterity', 'constitution', 'willpower','intelligence', 'charisma'];
for(var statI = 0; statI < stats.length; statI++){
	var generatedStat = dan.generateStat(stats[statI], {count: 3, dice: 6});
	console.log( dan.name + ' has a '+ stats[statI]+ ' of ' + generatedStat);
	//eg: Dan has a strength of 12
}

var shirt = new Wearable('t-shirt', 0, 'torso', .25);
var pants = new Wearable('a pair of blue-jeans', 0, 'legs', 2);
var fists = new Weapon('a balled up fist', 'bludgeoning', 'wiff', {count: 1, dice: 3}, 0);

var message = dan.wearItem( shirt );
console.log(dan.name + ' ' + message);
//eg: Dan wears a t-shirt on his torso
message = dan.wearItem( pants );
console.log(dan.name + ' ' + message);
//eg: Dan wears a pair of blue-jeans on his legs
message = dan.equipWeapon ( fists );
console.log(dan.name + ' ' + message);
//eg: Dan wields a balled up fist

var nad = new Character('Nad', 'Fighter');
for(var statI = 0; statI < stats.length; statI++){
	var generatedStat = nad.generateStat(stats[statI], {count: 3, dice: 6});
	console.log( nad.name + ' has a '+ stats[statI]+ ' of ' + generatedStat);
}

var stinkyFish = new Weapon('a day old herring', 'bludgeoning', 'squish', {count: 1, dice: 3}, 0);
nad.equipWeapon( stinkyFish );

message = nad.attack( dan );
console.log( message );
//Nad swings a day old hearing at Dan with a squish!  Nad does 2 damage to Dan

message = dan.attack( nad );
console.log( message );
//Dan swings a balled up fist at Nad with a wiff!  Dan does 1 damage to Nad


