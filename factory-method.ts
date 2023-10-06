/*
  Factory Method: Es un patrón que sirve para reutilizar un método abstracto de creación de objeto en una superclase, el cuál devuelve una misma interfaz; sin embargo la implementacion concretamente la realiza cada subclase.
*/

interface IPet {
  getSound: () => string
}

abstract class Pet {
  abstract createPet(): IPet

  saysSomething() {
    const pet = this.createPet()
    return pet.getSound()
  }
}

class CatCreator extends Pet {
  createPet(): IPet {
    return new Cat()
  }
}

class DogCreator extends Pet {
  createPet(): IPet {
    return new Dog()
  }
}

class Cat implements IPet {
  getSound (): string {
    return `Cat says Miaw`
  }
}

class Dog implements IPet {
  getSound (): string {
    return `Dog says Wow`
  }
}

const gato = new CatCreator()
const perro = new DogCreator()
console.log(perro.saysSomething())
console.log(gato.saysSomething())
