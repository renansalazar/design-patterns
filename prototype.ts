/*
  Prototype: Es un patron que consiste en copiar/clonar objetos usando una clase padre y no depender de sus subclases
*/

abstract class Home {
  public address: string
  constructor(address: string) {
    this.address = address
  }
  abstract clone(): Home
}

class Apartment extends Home {
  public apartmentNumber: number
  constructor (address: string, apartmentNumber: number) {
    super(address)
    this.apartmentNumber = apartmentNumber
  }

  clone(): Home {
    return new Apartment(this.address, this.apartmentNumber)
  }
}

class House extends Home {
  clone(): Home {
    return new House(this.address)
  }
}

function registerHomes() {
  const homes: Home[] = []

  const house = new House('siempre viva 123')
  homes.push(house)
  homes.push(house.clone())
  const houseNemo = new House('P sherman calle wallaby 42 sydney')
  homes.push(houseNemo)
  const apartment = new Apartment('apartment address', 123)
  homes.push(apartment)
  console.log('homes', homes)
  console.log('clone', apartment.clone())
}

registerHomes()
