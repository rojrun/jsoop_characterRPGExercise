

class Character{
	constructor(name, charClass){
		this.name = name;
		this.charClass = charClass;
		this.stats = {
			strength: null,
			dexterity: null,
			constitution: null,
			willpower: null,
			intelligence: null,
			charisma: null
		}
		this.weapon = null;
		this.armor = null;
		this.itemWeight = 0;
		this.clothing = {
			head: null,
			neck: null,
			torso: null,
			hands: null,
			legs: null,
			feet: null
		}
	}
	generateStat( statName, valueDice){
		var total = 0;
		for (var i=0; i < valueDice.count; i++){
			var roll = Math.floor( Math.random() * 6 ) + 1;
			total += roll;
		}
		this.stats[statName] = total;
		return total;
	}
	equipWeapon( weapon ){
        return "wields " + weapon.name;
	}
	wearItem( wearable ){
		this.clothing[wearable.location] = wearable;
		return "wears a " + wearable.name + " on his " + wearable.location;
	}
	attack( target ){
		return this.name + " swings " + weapon.name + target + " with a " + weapon.attackSound + "!" + this.name + " does " + weapon.getData() + " damage to " + target;
        //Nad swings a day old hearing at Dan with a squish!  Nad does 2 damage to Dan
	}
}