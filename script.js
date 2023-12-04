

class User {
    constructor(_firstName, _lastName, _age, _location, _anotherUser) {
        this.firstName = _firstName
        this.lastName = _lastName
        this.age = _age
        this.location = _location
        this.anotherUser = _anotherUser

    }

    compareAge(anotherUser){
        let results
        if (this.age > anotherUser.age) {
            results = this.firstName +  'è più vecchio di'  + anotherUser.firstName
        }
        else {
            results = anotherUser.firstName + 'è più vecchioo di' + this.firstName
        }
        return results
    }

}


const User1 = new User ('Luca', 'Rossi', 30, 'Roma')
const User2 = new User ('Mario', 'Verdi', 35, 'Firenze')
const User3 = new User ('Matteo', 'Grassi', 29, 'Berlino')
const User4 = new User ('Angelo', 'Bianchi', 40, 'Torino')

console.log(User1.compareAge(User2))

// ************************ 
//    ************************
//        *************************
// ESERCIZIO2 


class Pet {
    constructor(_petName, _ownerName, _species, _breed, _anotherPet) {
        this.petName = _petName
        this.ownerName = _ownerName
        this.species = _species
        this.breed = _breed
        this.anotherPet = _anotherPet
    }

    compareOwner (anotherPet) {
        let results2 
        if (this.ownerName === anotherPet.ownerName) {
            results2 = this.petName +  'e' + anotherPet.p +  "appartengono allo stesso padrone"
        }
        return results2
    }
}




const Pet1 = new Pet ('Ray', 'Francesco', 'Cane', 'Meticcio')
const Pet2 = new Pet ('Bianca', 'Gianluca', 'Cane', 'Meticcio')
const Pet3 = new Pet ('Tigro', 'Gianluca', 'Gatto', 'Siamese')

console.log(Pet2.compareOwner(Pet3))