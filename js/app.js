
new Vue({
    el: '#app',
    data: {
        palayerHealth: 100,
        monsterHealth: 100,
        gameIsRuning: false,
    },
    methods: {
        startGame: function () {
            this.palayerHealth = 100;
            this.monsterHealth = 100;
            this.gameIsRuning = true;
        },
        attack: function () {
            var max = 10;
            var min = 3;
            var damage = Math.max(Math.floor(Math.random() * max) + 1, min)
            this.monsterHealth -= damage;
            if(this.monsterHealth <= 0) {
                alert('you won!');
                this.gameIsRuning=false;
                return;
            }
            max=12;
            min=5;
            damage=Math.max(Math.floor(Math.random() * max) + 1, min)
            this.palayerHealth -= damage;
            if(this.palayerHealth <= 0) {
                alert('you lost!')
                this.gameIsRuning=false;
            }
        },
        spicialattack: function () {

        },
        heal: function () {

        },
        giveup: function () {

        }
    }
});