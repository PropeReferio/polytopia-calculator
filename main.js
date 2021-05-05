class PolyUnit {
  constructor(attack, defense, max_hp, cur_hp) {
    this.attack = attack;
    this.defense = defense;
		this.max_hp = max_hp;
		this.cur_hp = cur_hp;
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
