class Parent{
    constructor(){
        this.fatherName = "amare_chinos?"
    }
}

class Child extends Parent{
    constructor(name){
        super();
        this.name = name;
    }
    getFullName(){
        return this.name + " " + this.fatherName
    }
}

const baby = new Child("Abul");
const baby2 = new Child("Kashem");

console.log(baby.getFullName());
console.log(baby2);