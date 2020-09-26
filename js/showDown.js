function fight() {
  let monster = prompt("What is the name of monster you're fighting?");
  let hero = prompt("What is the name of hero you're fighting?");

  let villainHealth = 50;
  let heroHealth = 50;

  let i = 1;

  while (villainHealth > 0 && heroHealth > 0) {
    let heroRoll = Math.floor(Math.random() * 20 + 1); //1
    let villainRoll = Math.floor(Math.random() * 20 + 1); //2

    if (i % 2 === 0) {
      //odds
      if (villainRoll === 1 || villainRoll === 2) {
        villainHealth -= 5;

        alert(`Critical failure! ${monster} accidentally stabs self!`);
        alert(
          `${hero} has ${heroHealth} hitpoints left. ${monster} has ${villainHealth} hitpoints left.`
        );
      } else if (villainRoll >= 3 && villainRoll <= 10) {
        heroHealth -= 0;

        alert(`${monster} misses!`);
        alert(
          `${hero} has ${heroHealth} hitpoints left. ${monster} has ${villainHealth} hitpoints left.`
        );
      } else if (villainRoll >= 11 && villainRoll <= 18) {
        heroHealth -= 10;

        alert(`Hit! ${monster} strikes ${hero}!`);
        alert(
          `${hero} has ${heroHealth} hitpoints left. ${monster} has ${villainHealth} hitpoints left.`
        );
      } else {
        heroHealth -= 20;

        alert(`Critical hit! ${monster} does double damage!`);
        alert(
          `${hero} has ${heroHealth} hitpoints left. ${monster} has ${villainHealth} hitpoints left.`
        );
      }
    } else {
      if (heroRoll === 1 || heroRoll === 2) {
        heroHealth -= 5;

        alert(`Critical failure! ${hero} accidentally stabs self!`);
      } else if (heroRoll >= 3 && heroRoll <= 10) {
        villainHealth -= 0;

        alert(`${hero} misses!`);
      } else if (heroRoll >= 11 && heroRoll <= 18) {
        villainHealth -= 10;
        alert(`Hit! ${hero} strikes ${monster}!`);
      } else {
        villainHealth -= 20;
        alert(`Critical hit! ${hero} does double damage!`);
      }
    }

    i++;
  }
  if (villainHealth <= 0 && heroHealth <= 0) {
    alert(`Both ${hero} & ${monster} loses`);
  } else if (villainHealth < heroHealth) {
    alert(`${hero} wins`);
  } else {
    alert(`${monster} wins`);
  }

  let answer = prompt("Want to play again? Type 'yes' or 'no'");

  if (answer === "yes") {
    fight();
  } else if (answer === "no") {
    alert(`Thank you for playing the game!`);
  } else {
    answer = prompt("Want to play again? Type 'yes' or 'no'");
  }
}
fight();
