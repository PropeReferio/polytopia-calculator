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
  ///document.getElementById("attackerCurrentHP").value += 5;
  ///console.log("I deed it!");
}

function adjDefenderVetHP() {
  if (this.checked) {
    document.getElementById("defenderCurrentHP").value = document.getElementById("defenderCurrentHP").value+5;
  } else {
    document.getElementById("defenderCurrentHP").value -= 5;
  }
}
