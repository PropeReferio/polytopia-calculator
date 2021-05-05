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

const changeAttacker = (polyUnitObj) => {
  $('#attackerCurrentHP').val() = polyUnitObj.cur_hp
  $('#attackerMaxHP').val() = polyUniObj.max_hp
}

const changeDefender = (polyUnitObj) => {
  $('#defenderCurrentHP').val() = polyUnitObj.cur_hp
  $('#defenderMaxHP').val() = polyUniObj.max_hp
}
