function getRandomValue(max,min){
    return Math.floor(Math.random()*(max-min))+min;
}

const App=Vue.createApp({

    data(){
        return {

            playerHealth:100,
            monsterHealth:100,
            Attackcounter:0,
            winner:null,
            logmessages:[]
        };

    },
    watch:{

        playerHealth(value){
            if(value<=0 && this.monsterHealth<=0){
                this.winner='draw';
            }
            else if(value<=0){

                this.winner='monster'
            }
        },
        monsterHealth(value){
            if(value<=0 && this.playerHealth<=0){
                this.winner='draw'
            }
            else if(value<=0)
            {

                this.winner='player'
            }       
         }
    },
    computed:{
      monsterBarstyle(){
    return {width: this.monsterHealth +'%'};
       },
       playerBarStyle(){
           return {width: this.playerHealth+'%'};
   
       },
       takeSpecialAttack(){
        return this.Attackcounter %3 !==0;
       }
    },
    methods:{
        startGame(){

            this.Attackcounter=0;
            this.playerHealth=100,
            this.monsterHealth=100,
            this.logmessages=[],
            this.winner=null
        },
        attackMonster(){
            this.Attackcounter++;
            const attackedValue=getRandomValue(12,5);
            this.monsterHealth= this.monsterHealth-attackedValue;
            this.attackPlayer();
            this.addlogMessages('player','attack',attackedValue);
        },
        attackPlayer(){
           const attackedValue=getRandomValue(15,8);
           this.playerHealth=this.playerHealth-attackedValue;
           this.addlogMessages('monster','attack',attackedValue);

        },
        specialAttackMonster(){
            this.Attackcounter++;
            const attackValue=getRandomValue(25,10);
            this.monsterHealth=this.monsterHealth-attackValue;
            this.attackPlayer();
            this.addlogMessages('player','attack',attackValue);


        },
        healPlayer(){

            this.Attackcounter++;
            const healValue=getRandomValue(20, 8);
            if(this.playerHealth>100){
                this.playerHealth=100;
            }else{
            this.playerHealth=this.playerHealth+healValue;
            }
            this.logMessages('player','heal',healValue);

            this.attackPlayer();

        },
        surrender(){
            this.winner='monster';
        },
        addlogMessages(who ,what, value ){
       this.logmessages.unshift({

           actionBy:who,
           actionBytype:what,
           actionValue:value
          });

        }
    }
});

App.mount('#game');