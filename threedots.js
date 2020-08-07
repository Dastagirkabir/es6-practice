const ages = [10, 12, 13, 11];
const ages2 = [5, 6, 7, 8];
const ages3 = [20, 22, 23, 21];
const allAges = ages.concat(ages2).concat([5]).concat(ages3);
const allAges2 = [...ages, ...ages2, ...ages3];
// console.log(allAges2);

const business = 650;
const minister = 500;
const shochib = 450;
const takaPoysha = [650, 450, 500];
const maximum = Math.max(business, minister, shochib);
const maximum2 = Math.min(...takaPoysha);
console.log(maximum2);