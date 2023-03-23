// CLass Enfant 1
import Perso from "./Class_Parent"
class Warrior extends Perso {
    equipement : string = 'Epée a deux mains'

    constructor() {
        super('Enfant2')
    }

    Stuff() {
        console.log(this.equipement)
    }
}
export default Warrior