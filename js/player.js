let player;                                                         //Global Variable

function Player(classType,health,mana,strength,agility,speed){     //Player Constructor

    this.classType=classType;
    this.health=health;
    this.mana=mana;
    this.strength=strength;
    this.agility=agility;
    this.speed=speed;
}

let PlayerMoves={
    calcAttack:function(){                                               //Who attacks First
        let getPlayerSpeed=player.speed;
        let getEnemySpeed=enemy.speed;

        let playerAttack=function(){                                         //Player Attacks

            let calBaseDamage;
            if(player.mana>0){
                calBaseDamage=player.strength*player.mana/1000;
            }else{
                calBaseDamage=player.strength*player.agility/1000;
            }
            let offsetDamage=Math.floor(Math.random()*Math.floor(10));
            let calcoutputDamage=calBaseDamage+offsetDamage;                //offical Damage
            let numberofHits=Math.floor(Math.random()*Math.floor(player.agility/10)/2)+1;      //number of Hits    
            let attackValues=[calcoutputDamage,numberofHits];
            return attackValues;
        }
    
        let enemyAttack=function(){                                         //Enemy Attacks
    
            let calBaseDamage;
            if(enemy.mana>0){
                calBaseDamage=enemy.strength*enemy.mana/1000;
            }else{
                calBaseDamage=enemy.strength*enemy.agility/1000;
            }
            let offsetDamage=Math.floor(Math.random()*Math.floor(10));
            let calcoutputDamage=calBaseDamage+offsetDamage;                //offical Damage
            let numberofHits=Math.floor(Math.random()*Math.floor(enemy.agility/10)/2)+1;      //number of Hits    
            let attackValues=[calcoutputDamage,numberofHits];
            return attackValues;
        }
    
        let getPlayerHealth=document.querySelector(".health-player");           //Player and Enemy Health to change later
        let getEnemyHealth=document.querySelector(".enemy-health");
    
        if(getPlayerSpeed >= getEnemySpeed){                                    //initiate Attacks
            let playerAttackValues=playerAttack();
            let totalDamage=playerAttackValues[0]*playerAttackValues[1];
            enemy.health=enemy.health-totalDamage;
            alert("You Hit "+playerAttackValues[0]+" damage "+playerAttackValues[1]+" times.");
            if(enemy.health<=0){
                alert("You Win!! Refresh the browser to Play Again!!!!");
                getPlayerHealth.innerHTML='Health: '+player.health;
                getEnemyHealth.innerHTML='Health: 0';
            }
            else{
                getEnemyHealth.innerHTML='Health: '+enemy.health;

                let enemyAttackValues=enemyAttack();                        //Enemy Attacks
                let totalDamage=enemyAttackValues[0]*enemyAttackValues[1];
                player.health=player.health-totalDamage;
                alert("Enemy Hit "+enemyAttackValues[0]+" damage "+enemyAttackValues[1]+" times.");
                if(enemy.health<=0){
                    alert("You Loose!! Refresh the browser to Play Again!!!!");
                    getPlayerHealth.innerHTML='Health: 0';
                    getEnemyHealth.innerHTML='Health: '+enemy.health;
                }
                else{
                    getPlayerHealth.innerHTML='Health: '+player.health;
                }
            }
        } else if(getEnemySpeed >= getEnemySpeed){                                    //initiate Attacks
            let EnemyAttackValues=enemyAttack();
            let totalDamage=EnemyAttackValues[0]*EnemyAttackValues[1];
            player.health=player.health-totalDamage;
            alert("Enemy Hit "+EnemyAttackValues[0]+" damage "+EnemyAttackValues[1]+" times.");
            if(player.health<=0){
                alert("You loose!! Refresh the browser to Play Again!!!!");
                getEnemyHealth.innerHTML='Health: '+enemy.health;
                getPlayerHealth.innerHTML='Health: 0';
            }
            else{
                getPlayerHealth.innerHTML='Health: '+player.health;

                let PlayerAttackValues=playerAttack();                               //Player Attacks
                let totalDamage=PlayerAttackValues[0]*PlayerAttackValues[1];
                enemy.health=enemy.health-totalDamage;
                alert("You Hit "+PlayerAttackValues[0]+" damage "+PlayerAttackValues[1]+" times.");
                if(player.health<=0){
                    alert("You Win!! Refresh the browser to Play Again!!!!");
                    getEnemyHealth.innerHTML='Health: 0';
                    getPlayerHealth.innerHTML='Health: '+player.health;
                }
                else{
                    getEnemyHealth.innerHTML='Health: '+enemy.health;
                }
            }
        }
    }
}