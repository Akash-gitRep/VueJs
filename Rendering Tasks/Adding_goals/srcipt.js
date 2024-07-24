const App=Vue.createApp({

    data(){

        return{

            enteredGoal:'',
            goals:[]

        };
    },
    methods:{
        addGoal(){
            this.goals.push(this.enteredGoal);
        },
        removeGoal(index){
            this.goals.splice(index,1);
        }
    }
});

App.mount('#box')