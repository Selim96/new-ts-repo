abstract class House {
    protected door: boolean = false;
    
    protected tenants: Person[] = [];

    constructor( protected key: Key) {
        this.key = key;
    };

    comeIn(tenant: Person): void {
        if (this.door) {
            this.tenants.push(tenant);
        }
    };

    public abstract openDoor(key: Key): void;
};

class MyHouse extends House {

    constructor(key: Key) {
        super(key);
    };

    public openDoor(key: Key): void {
        if (key.getSignature() === this.key.getSignature()) {
            this.door = true;
            console.log('Door is opened!');
        }
    };

    seeTenants(): void {
        console.log(this.tenants) ;
    }
};

class Key {
    private signature: number;

    constructor() {
        this.signature = Math.round(Math.random() * 100);
    };

    getSignature(): number {
        return this.signature;
    }
};

class Person {
    constructor(private key: Key, private name: string) {
        this.key = key;
        this.name = name;
    };

    getKey(): Key {
        return this.key;
    };
    getName(): string {
        return this.name;
    }
};

const newKey = new Key();

const newHouse = new MyHouse(newKey);

const newPerson = new Person(newKey, "Max");


newHouse.openDoor(newPerson.getKey());
newHouse.comeIn(newPerson);

newHouse.seeTenants();