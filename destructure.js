const student = { 
    name: "Tanbir Sakib", 
    id: "C171038", 
    department: "cse",
    hobbies : {first : 'football', second : 'gaming'},
    food : {first : 'burger', second : 'pizza'}
};

const {name, id} = student;
const {first, second} = student.hobbies;

console.log(name, id, first, second);