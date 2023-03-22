
// Class Parent 

class Perso {
    // Propriétés 
    health: number = 100
    armor: number = 50
    

    // Méthodes
    persoHealth() {
        console.log(`Santé : ${this.health}`)
    } 
    persoArmor() {
        console.log(`Armure : ${this.armor}`)
    }
}

// CLass Enfant 
class Warrior extends Perso {
    equipement : string = 'Epée a deux mains'

    Stuff() {
        console.log(this.equipement)
    }
}

class Druid extends Perso {
    magie : string = 'Boule de feu'

    Power() {
        console.log(this.magie)
    }
}

// Instance class Enfant 

const theWarrior = new Warrior()
theWarrior.Stuff()

const theDruid = new Druid()
theDruid.Power()