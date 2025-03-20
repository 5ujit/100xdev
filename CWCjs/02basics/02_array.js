const marvel_heros = ["thor", "Ironman","spiderman"]
const dc_heros=["superman","flash", "batman"]
// marvel_heros.push(dc_heros) 

// console.log(marvel_heros);

// console.log(marvel_heros[3][1]);

// marvel_heros.concat(dc_heros);
// const allHeros =marvel_heros.concat(dc_heros);

// console.log(allHeros);

// console.log(allHeros);



// spread opreater // this is advance one 

const all_new_hero =[...marvel_heros, ...dc_heros]
// console.log(all_new_hero);


const another_array=[1,2,3,[4,5,6], 7,[6,7[4,5]]]

const real_another_array=another_array.flat(Infinity)
// console.log(real_another_array);
 
// console.log(Array.isArray("fdafda"));

// console.log(Array.from("Hitesh"));
console.log(Array.from({name:"hitesh"}));// intrasting here we hv to mention which you  want t make thei arrary wteree key or value  

let score1=100
let score2=200
let score3=300
console.log(Array.of(score1,score2,score3));
