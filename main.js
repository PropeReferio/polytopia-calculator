class PolyUnit {
  constructor(attack, defense, max_hp, cur_hp) {
    this.attack = attack;
    this.defense = defense;
		this.max_hp = max_hp;
		this.cur_hp = cur_hp;
  }

   attack(defender) {
     attackForce = this.attack * (this.cur_hp/this.max_hp);
     defenseForce = defender.defense * (defender.cur_hp/defender.max_hp);
     totalDamage = attackForce + defenseForce;
     this.cur_hp -= round((attackForce/totalDamage)*this.attack*4.5);
     defender.cur_hp -= round((defenseForce/totalDamage)*defender.defense*4.5);
   }
}

units = {
	'Warrior': new PolyUnit(2, 2, 10, 10),
	'Defender': new PolyUnit(1, 3, 15, 15),
	'Archer': new PolyUnit(2, 1, 10, 10),
	'Giant': new PolyUnit(5, 4, 40, 40)
}

console.log(units['Warrior'].cur_hp)
// If selection is 'Warrior', attacker = units['Warrior']

new_obj = {
	'apple': 'red'
}

console.log(new_obj['apple'])