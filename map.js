const numbers = [2, 6, 123, 54, 786, 2, 4, 223];

const double = numbers.map(num => num *2);

// console.log(double);

const players = [
    {name : "messi", age : 36, club : 'PSG' , country : 'Argentina' },
    {name : "neymar", age : 32, club : 'PSG' , country : 'Brazil' },
    {name : "ronaldo", age : 37, club : 'ManU' , country : 'Portugal' }
]
const playername = players.map(player => player.name );
const country = players.map(player => player.country);
console.log(playername);
console.log(country);

