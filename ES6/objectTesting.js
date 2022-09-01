const person = {
    name: 'Chinku',
    age: 10,
    skill: ['Swimming', 'Chess', 'Long jump'],
    study: {
        schoolName: 'Tinku School',
        class: 4,
        hobby: 'Swimming'
    },
    likes: function doo(){
        return (this.name + ' likes to help other.')
    }
    

}


const accessingObj = `We are talking about ${person.name}.
He is in class ${person.study.class}.
He is good at ${person.skill[1]}.
`


console.log('');

console.log(accessingObj);
console.log(person.likes());

console.log('');