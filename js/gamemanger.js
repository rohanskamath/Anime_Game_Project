let GameManager={

    setGameStart:function(classType){
        this.resetPlayer(classType);
        this.setPreFight();
    },
    resetPlayer:function(classType){                                            //Selecting our Character
        switch(classType){
            case "sauske":
                player=new Player(classType,200,0,200,100,50);
                break;
            case "goku":
                player=new Player(classType,1000,100,200,200,1000);
                break;
            case "naruto":
                player=new Player(classType,200,100,200,100,500);
                break;
        }
        let getInterface=document.querySelector(".interface");                  //Setting in Browser
        getInterface.innerHTML='<img src="img/heroes/'+ classType.toLowerCase() +'.png" class="img-avatar"><div><h3>'
        + classType+'</h3><p class="health-player">Health: '+ player.health+'</p><p>Chakra: '+ player.mana+'</p><p>strength: '
        + player.strength+'</p><p>Agility: '+ player.agility+'</p><p>Speed: '+ player.speed+'</p></div>';
    },
    setPreFight:function(){
        let getHeader=document.querySelector(".header");
        let getActions=document.querySelector(".actions");                     //Action to start Battle
        let getArena=document.querySelector(".arena");
        getHeader.innerHTML='<p>Task: Find an Enemy to Start the Battle!!</p>';
        getActions.innerHTML='<a href="#" class="btn-prefightn" onclick="GameManager.setFight()">Search for Enemy</a>';
        getArena.style.visibility="visible";
    },
    setFight: function(){
        let getHeader=document.querySelector(".header");
        let getActions=document.querySelector(".actions");
        let getEnemy=document.querySelector(".enemy");
        let enemy00=new Enemy("obito",100,0,50,100,100);
        let enemy01=new Enemy("vegeta",200,0,150,120,500);                              //Create Enemy Character
        let chooseRandomEnemy=Math.floor(Math.random()*Math.floor(2));
        switch(chooseRandomEnemy){
           case 0:
               enemy=enemy00;
               break;
            case 1:
               enemy=enemy01;
               break;
        }
        getHeader.innerHTML='<p>Task: Choose Your Move</p>';                           //Setting Enemy Character
        getActions.innerHTML='<a href="#" class="btn-prefightn" onclick="PlayerMoves.calcAttack()">Attack!!!!!</a>';
        getEnemy.innerHTML='<img src="img/enemies/'+ enemy.classType.toLowerCase() + '.png" class="img-avatar"><div><h3>'
        + enemy.classType +'</h3><p class="enemy-health">Health: '+ enemy.health+'</p><p>Chakra: '+ enemy.mana+'</p><p>strength: '
        + enemy.strength+'</p><p>Agility: '+ enemy.agility+'</p><p>Speed: '+ enemy.speed +'</p></div>';

    }

}