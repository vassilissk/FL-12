
class Fighter {
    constructor(obj) {
        for (let i in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, i)) {
                this[i] = obj[i]
            }

        }
        this.wins = 0; this.losses = 0;
        this.maxpercent = 100;
    }

    getName() {
        return this.name;
    }
    getDamage() {
        return this.damage;
    }
    getStrength() {
        return this.strength;
    }
    getAgility() {
        return this.agility;
    }
    getHealth() {
        return this.hp;
    }
    getWins() {
        return this.wins;
    }
    getLosses() {
        return this.losses;
    }
    attack(obj) {
        let success = Math.round(Math.random() * this.maxpercent) < this.maxpercent -
            obj.getStrength() - obj.getAgility();
        if (success) {
            obj.dealDamage(this.getDamage());
            console.log(this.getName() + ' makes ' + this.getDamage() + ' damage to ' + obj.getName())
        } else {
            console.log(this.getName() + ' attack missed ')
        }
    }
    logCombatHistory() {
        console.log('Name: ' + this.getName() + ', Wins: ' + this.getWins() + ', Losses: ' + this.getLosses())
    }
    heal(health) {
        this.getHealth() + health < this.maxpercent ? this.hp += health : this.hp = this.maxpercent;
    }
    dealDamage(damage) {
        this.getHealth() - damage > 0 ? this.hp -= damage : this.hp = 0;
    }
    addWin() {
        this.wins++;
    }
    addLoss() {
        this.losses++;
    }
}

function battle(fighter1, fighter2) {
    function swap(f1, f2) {
        let c = {};
        for (let prop in f1) {
            if (Object.prototype.hasOwnProperty.call(f1, prop)) {
                c[prop] = f1[prop]
            }
        }
        for (let prop in f2) {
            if (Object.prototype.hasOwnProperty.call(f2, prop)) {
                f1[prop] = f2[prop]
            }
        }
        for (let prop in c) {
            if (Object.prototype.hasOwnProperty.call(c, prop)) {
                f2[prop] = c[prop]
            }
        }

    }
    if (fighter1.hp === 0) {
        console.log(fighter1.name + ' is dead and can\'t fight');
        return
    }
    if (fighter2.hp === 0) {
        console.log(fighter2.name + ' is dead and can\'t fight');
        return
    }
    fighter1.attack(fighter2);
    if (fighter2.hp === 0) {
        fighter1.addWin();
        fighter2.addLoss();
        console.log(fighter1.name + ' has won !')
    } else {
        swap(fighter1, fighter2);
        battle(fighter1, fighter2)
    }
}

const first = new Fighter({ name: 'Maximus', damage: 25, hp: 100, strength: 20, agility: 15 })
const second = new Fighter({ name: 'Commodus', damage: 25, hp: 90, strength: 25, agility: 20 })




battle(first, second);
battle(first, second)
first.logCombatHistory();
second.logCombatHistory();


