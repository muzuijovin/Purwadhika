//output Output : [{ David: ‘name’, 20: ‘age’}]
const input = [{ name: "david", age: 20 }];

function switchStudent(switch01) {
  
}

function SwitchProperty(input) {}

SwitchProperty([{ name: 'David', age: 20 }]);



const student = {
    name: 'David', 
    age: 20
}; 

const switchStudent = {}; 

for(let key in student){
    console.log(key) // name -> age
    console.log(student[key]) // 'David' -> 20
    // switchStudent[key] = student[key]; 
    switchStudent[student[key]] = key; 
}

console.log(switchStudent)

const people = {
    fullName: 'Defryan'
}; 

people.fullName; 
people['fullName']; 

people.address = ''; 
people['address'] = '';