class Key {
  
}

class MyHouse {
  private key: Key;

  constructor(key: Key) {
    this.key = key;
  }

  openDoor(personKey: Key) {
    if (this.key === personKey) {
      console.log("Door opened");
    } else {
      console.log("Access denied");
    }
  }

  comeIn(person: Person) {
    console.log(`${person.getName()} came into the house`);
  }
}

class Person {
  private key: Key;

  constructor(key: Key) {
    this.key = key;
  }

  getKey() {
    return this.key;
  }

  getName() {
    return "John"; 
  }
}


const key = new Key();
const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());
house.comeIn(person);



export {};