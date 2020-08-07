const person = { name: 'Jack William', age: 17, job: 'facebooker', gfName: 'Ema Watson', address: 'Bashabo', phone: 01763993968, friends: ['Hasan', 'Kabir', 'Dastagir']}

const {phone, gfName, address, salary} = person;

// const gfName = person.gfName; 
// const phone = person.phone;

// console.log(phone, gfName, address, salary);


const friends = ['Sakib Khan', 'Rubel', 'Kabila', 'Misha'];

const [first, ...restFriends] = friends;

console.log(restFriends);

