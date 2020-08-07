class student{
    constructor(sID, sNAME){
        this.id = sID;
        this.name = sNAME;
        this.school = "balsal School"
    }
}

const student1 = new student(12, "Hasan");
const student2 = new student(22, "Kabir");
const student3 = new student(36, "Dastagir")

console.log(student1, student2, student3);