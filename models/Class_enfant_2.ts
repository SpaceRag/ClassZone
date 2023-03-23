// Class Enfant 2
import Perso from "./Class_Parent"
class Druid extends Perso {
    magie : string = 'Boule de feu'

    constructor() {
        super('Enfant1')
    }

    Power() {
        console.log(this.magie)
    }
}

export default Druid