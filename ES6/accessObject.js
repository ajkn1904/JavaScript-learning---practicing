/* const student ={
    name: 'Fredie',
    age: 26,
}
console the value of age */

const student ={
    name: 'Fredie',
    age: 26,
}
console.log('');
console.log(student.age);
console.log('');

/* let data = {
    location: [
        {
        latitude: '34.5, 37.8',
        longitude: '98.77, 58.7',
        city: 'Hydrabad',
        country: 'India',
    }
]
};
console the value of city.*/

let data = {
    location: [
        {
        latitude: '34.5, 37.8',
        longitude: '98.77, 58.7',
        city: 'Hydrabad',
        country: 'India',
    }
]
};
console.log('');
console.log(data.location[0].city);
console.log('');

/* 	
const user = {
    id:	1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {	
    street: "Kulas Light",
    suite: "Apt. 556",
    city: "Gwenborough",
    zipcode: "92998-3874",
    geo:{	
        lat: "-37.3159",
        lng: "81.1496"
    }
},
phone: "1-770-736-8031 x56442",
website: "hildegard.org",
company:{	
    name: "Romaguera-Crona",
    catchPhrase: "Multi-layered client-server neural-net",
    bs: "harness real-time e-markets"
    }
}

● Console the value of email
● Console the value of address
● Console the value of city
● Console the value of lat
● Console the value of company
name*/

const user = {
    id:	1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {	
    street: "Kulas Light",
    suite: "Apt. 556",
    city: "Gwenborough",
    zipcode: "92998-3874",
    geo:{	
        lat: "-37.3159",
        lng: "81.1496"
    }
},
phone: "1-770-736-8031 x56442",
website: "hildegard.org",
company:{	
    name: "Romaguera-Crona",
    catchPhrase: "Multi-layered client-server neural-net",
    bs: "harness real-time e-markets"
    }
}
// ● Console the value of email
console.log('');
console.log('value of email is: ',user.email);
// ● Console the value of address
console.log('');
console.log('value of address is: ',user.address);
// ● Console the value of city
console.log('');
console.log('value of city is: ',user.address.city);
// ● Console the value of lat
console.log(''); 
console.log('value of lat is: ',user.address.geo.lat);
// ● Console the value of company name
console.log('');
console.log(' value of company name is: ',user.company.name);
console.log('');
