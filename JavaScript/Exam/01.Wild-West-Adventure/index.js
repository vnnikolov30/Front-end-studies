function solve(input) {
  const teamCount = Number(input.shift());

  let team = {};

  for (let i = 0; i < teamCount; i++) {
    let [name, hp, bullets] = input.shift().split(" ");
    // IF THIS DOESNT WORK USE parseInt
    team[name] = { hp: +hp, bullets: +bullets };
  }

  let commandLine = input.shift();

  while (commandLine != "Ride Off Into Sunset") {
    const [command, name, firstArg, secondArg] = commandLine.split(" - ");
    const character = team[name];

    let target, damage, attacker, amount;

    switch (command) {
      case "FireShot":
        target = firstArg;

        if (character.bullets > 0) {
          character.bullets -= 1;
          console.log(
            `${name} has successfully hit ${target} and now has ${character.bullets} bullets!`
          );
        } else {
          console.log(
            `${name} doesn't have enough bullets to shoot at ${target}!`
          );
        }
        break;
      case "TakeHit":
        damage = firstArg;
        attacker = secondArg;

        character.hp -= damage;
        if (character.hp > 0) {
          console.log(
            `${name} took a hit for ${damage} HP from ${attacker} and now has ${character.hp} HP!`
          );
        } else {
          console.log(`${name} was gunned down by ${attacker}!`);
          delete team[name];
        }
        break;
      case "Reload":
        if (character.bullets < 6) {
          const bulletsReloaded = Math.min(6 - character.bullets, 6);
          character.bullets += bulletsReloaded;
          console.log(`${name} reloaded ${bulletsReloaded} bullets!`);
        } else {
          console.log(`${name}'s pistol is fully loaded!`);
        }
        break;
      case "PatchUp":
        amount = firstArg;

        if (character.hp < 100) {
          const amountRecovered = Math.min(100 - character.hp, + amount);
          character.hp += amountRecovered;
          console.log(`${name} patched up and recovered ${amountRecovered} HP!`);
      } else {
        console.log(`${name} is in full health!`);
      }
        break;
    }

    commandLine = input.shift();
  }
  for (const character in team) {
    console.log(
      `${character}\n  HP: ${team[character].hp}\n  Bullets: ${team[character].bullets}`
    );
  }
}

