let age: number;
age = 12;

let userName: string;
userName = "Dudu";

let isInstructor: boolean;
isInstructor = true;

// Complex Types

let hobbies: string[];

hobbies = ['Sports','Cooking'];

// Type Aliases
type Person = {
    name: string;
    age: number;
}

let person: Person;

person = {
    name: userName,
    age,
}
/* Error
person = {
    isEmployee: true
}
*/

let people: {
    name: string;
    age: number;
}[];


// Type Inference / Union Types

let course: string | number| boolean = "Angular - The Complete Guide";

/* Error without pipe assignment
course = 12341;
*/


// Functions & types

function sum(a: number,b: number){
    return a+b;
}

function printOutput(value: any){
    console.log(value);
}

// Generics

function insertAtBeginning<T>(array: T[], value: T){
    const newArray = [value, ...array];
    return newArray;
}

const demoArray = [1,2,3];

const updatedArray = insertAtBeginning(demoArray,-1);

const stringArray = insertAtBeginning(['a','b','c'],'d')

// Error updatedArray[0].split('');
stringArray[0].split(' ');


// Classes

class Student{
    /*
    firstName: string;
    lastName: string;
    age: number;
    private courses: string[];
    */

    constructor(
        public firstName: string,
        public lastName:string,
        public age:number,
        private courses:string[]
    ) {}

    enroll(courseName: string){
        this.courses.push(courseName);
    }
    listCourses(){
        return this.courses.slice();
    }
}

const student = new Student("Dudu","RPP",19,["Angular","Spring"]);
student.enroll('Python');
// Error student.courses
student.listCourses();


// Interfaces

interface Human{
    firstName:string;
    age:number;

    greet: () => void;
}

let max: Human;

max = {
    firstName: 'Max',
    age: 32,
    greet(){
        console.log("Hello!");
    },
};

class Instructor implements Human{
    firstName: string;
    age: number;
    greet(){
        console.log("Hello!!!!!!!")
    }
}