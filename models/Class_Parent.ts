// Class Parent 

class Perso {
    // Propriétés 
    health: number = 100
    armor: number = 50
    name: string 
    
    constructor(name: string) {
        this.name = name
    }

    // Méthodes
    persoHealth() {
        console.log(`Santé : ${this.health}`)
    } 
    persoArmor() {
        console.log(`Armure : ${this.armor}`)
    }
}

export default Perso