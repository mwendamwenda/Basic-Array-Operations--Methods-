// console.log('it shall be well with my soul');

const friends = ['milan','hervey','Tokiti'];
friends.push('peter');// .push() method add elements at the end of the array
friends.unshift('osiepa');// .unshift adds elements ath the begining of the array;
friends.pop();//removes the last item in an array its the opposite of .push();
friends.shift();//removes the first element in the array its the opposite of .unshift();
const shifted = friends.shift();
console.log(shifted);
console.log(friends);
console.log(friends.indexOf('Tokiti'));// indexof check the indexof an element and if its available in an array;
console.log(friends.indexOf('bob'));
console.log(friends.includes('Tokiti'));//most current and modern method to check if an element is an array;

// we can use .include() to write conditionals

if(friends.includes('Tokiti')){
    console.log('you have a friend called Tokiti');
}else{
    console.log('no friend')
}

