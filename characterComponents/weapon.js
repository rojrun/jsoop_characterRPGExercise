

class Weapon{
	constructor(name, type, attackSound, damageStats, weight){
		this.name = name;
		this.type = type;
		this.attackSound = attackSound;
		this.damageStats = this.getData(damageStats);
		this.weight = weight;
	}
	wield( bearer ){

	}
	use(){

	}
	remove(){
		
	}
	generateAttackMessage(){
		//bludgeoning weapons swings
		//slashing weapons slashes
		//piercing weapons stabs
	}
	getData(damageStats){
        var total = 0;
        for (var i=0; i < damageStats.count; i++){
            var roll = Math.floor( Math.random() * 6 ) + 1;
            total += roll;
        }
        return total;
	}
}