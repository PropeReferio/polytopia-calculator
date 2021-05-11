window.onload=function() {
  document.getElementById("attacker-vet").addEventListener("change", adjAttackerVetHP);
  document.getElementById("defender-vet").addEventListener("change", adjDefenderVetHP);
}

function adjAttackerVetHP() {
  if (this.checked) {
    document.getElementById("attackerCurrentHP").value = document.getElementById("attackerCurrentHP").value+5;
  } else {
    document.getElementById("attackerCurrentHP").value -= 5;
  }
}

function adjDefenderVetHP() {
  if (this.checked) {
    document.getElementById("defenderCurrentHP").value = document.getElementById("defenderCurrentHP").value+5;
  } else {
    document.getElementById("defenderCurrentHP").value -= 5;
  }
}

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

function calculateDamage () {
	const attackerAttack = document.getElementById('attackerAttack').value;
	const attackerCurHP = document.getElementById('attackerCurrentHP').value;
	const attackerMaxHP = document.getElementById('attackerMaxHP').value;

	const defenderDefense = document.getElementById('defenderDefense').value;
	const defenderCurHP = document.getElementById('defenderCurrentHP').value;
	const defenderMaxHP = document.getElementById('defenderMaxHP').value;

	// TODO:
	let defenseBonus = 1

	attackForce = attackerAttack * (attackerCurHP / attackerMaxHP)
	defenseForce = defenderDefense * (defenderCurHP / defenderMaxHP) * defenseBonus 
	totalDamage = attackForce + defenseForce
	attackResult = Math.round((attackForce / totalDamage) * attackerAttack * 4.5) 
	defenseResult = Math.round((defenseForce / totalDamage) * defenderDefense * 4.5)

	attackerFinalHP = attackerCurHP - defenseResult
	defenderFinalHP = defenderCurHP - attackResult

	console.log("Defender HP was " + defenderCurHP + ". Now it is " + defenderFinalHP)
	let defensePara = document.createElement("p");
	var node = document.createTextNode("Defender HP was " + defenderCurHP + ". Now it is " + defenderFinalHP);
	defensePara.appendChild(node);
	let body = document.getElementsByTagName("body")[0];
	body.appendChild(defensePara);
}
