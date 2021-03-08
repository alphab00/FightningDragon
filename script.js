var wrap= document.body.querySelector(".wrapper") 
let dragonHP = 10;
let PlayerHP = 5;
while(dragonHP > 0 && PlayerHP > 0){
  var damage = prompt("Please input the amount of damage you wish to do up to 5");
  
  
  randDamage = Math.floor(Math.random() * damage) + 1;
  if(randDamage > 5){
    dragonHP = dragonHP - 1;
  }
  else{
    dragonHP = dragonHP - randDamage;
  }
  
  if(dragonHP > 0){
    dragRandDamage = Math.floor(Math.random() * 2) + 1;
    PlayerHP = PlayerHP - dragRandDamage;
  }

  else{
    wrap.innerHTML = "User Wins! " + "User Health = " + PlayerHP + ", Dragon Health = " + dragonHP;
    break;
  }
  
  if(PlayerHP <= 0){
     wrap.innerHTML = "Dragon Wins! " + "User Health = " + PlayerHP + ", Dragon Health = " + dragonHP;
    break;
  }
  
  
}