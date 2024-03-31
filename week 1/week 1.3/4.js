
//split string


/*
function splitString(str,separator){
  console.log("Original Sting:" , str);
  console.log("After After split:",str.split(separator));
}
splitString("Hello world jaja" ," ", " " );

const forSplit=(str, separator)=>{
  console.log("Original Sting: ",str);
  console.log("After the split : ",str.split(separator));
}
splitString("abcd hij kmps pplo jaja", " " ," " ," " );



*/
const value = "hey ,this, is, sujit   "
const word = value.split(" ");

console.log(word);

//output
/*
[ 'hey', ',this,', 'is,', 'sujit', '', '', '' ]
*/