//1-a
function myFunction (myParameter) {
    for(let i = 0; i < 3; i++){
        console.log(i+ myParameter);

    }
}
 myFunction("karin");

//2- arrow

const myLambdaFunction = myParameter1 => {
    let words = "";
    for(let i = 0; i < 5; i++){ 
      words = words + myParameter1;
}
return words;
}

console.log(myLambdaFunction("michael"));

//___________________
//3
const repeater = (a, b) => {
    let words = "";
    for(let i = 0; i < a; i++){
        words = words + b ;
    }
    return words;
}
console.log(repeater (3, "woah"));

//4

function largestNumber(x){
    let max = 0;
    for(let i = 0; i < x.length; i++){
        if(x[i] > max){ 
            max = x[i];

        }
    }
    return max;
}
console.log(largestNumber([1,6,83,91,0,-4,1337,5]));

//5

const evennumber = x =>{
    if(x % 10 === 0){
       return("Even 10!");
    } else {
    return("no output");
    }
}
console.log(evennumber(10));

for(let i = 0; i<=125 ; i++){
    console.log(i, evennumber(i));
}

//6

const largestNumber2 = (a, b, c, d, e) => {
    let max = a;
  if(b>max){
    max=b;
  } 
  if(c>max){
    max=c;
  }
  if(d>max){
    max=d;
  }
  if(e>max){
    max=e;
  }
  return max
}
 console.log(largestNumber2(10,12,22,13,15));

 //6 -b
const largestNumber3 = (a, b, c, d, e) => Math.max(a,b,c,d,e)
console.log(largestNumber3(10,12,22,13,15));

//6-c
const largestNumber4 = (arr)=> Math.max(...arr)
console.log(largestNumber4([10,12,52,13,15]));

//7

const parameterIsString = (x)=>{
     if(typeof(x) === 'string'){
        return true
    } else {
        return false
    }
  
}
console.log(parameterIsString('banana'));
console.log(parameterIsString(10));

//8
console.log('task number 8: ');

const parameterIsString2 = (x, b)=>{
     if(typeof(x) === 'string' && typeof(b) === 'string' ){
        return true
    } else {
        return false
    }
  
}
console.log(parameterIsString2('banana', 'mango'));
console.log(parameterIsString2(10, 'whater'));

 //9

 const firstWord = x =>{
     let splitTheWord = x.split(" ");
     return(splitTheWord[0]);
 }
 console.log(firstWord('Hello world'));
 console.log(firstWord('Internetting is hard'));
 console.log(firstWord('karin yahud'));

 //10

 const hardArrow = x =>{
     let newWord = x.split(" ");
     let output = "";
    for(let i = 0; i < newWord.length; i++){
        for(let j = 0; j < newWord.length; j++){
             output = output + " " + newWord[i];
        }
        
    }
    return output;
 }
 console.log(hardArrow('omg banana mango'));

 //11
 const shortLinrArrow = x => x.slice(0, 1).toUpperCase();

 console.log(shortLinrArrow('karin'));
  console.log(shortLinrArrow('cat'));
   console.log(shortLinrArrow('banana'));

//12
const theNewString = x => {
   let newWordSplit = x.split(" ");
   let output = "";
   for (let i = 0; i < newWordSplit.length; i++){
       output = output + newWordSplit[i].slice(0, 1);
   }

return output;
}
console.log(theNewString('hi karin, whats up?'));

//13

const funTakes = x=> {
if (typeof(x)=== 'string' || Array.isArray(x) ){
    return x.length 
}
return null

}
    
console.log(funTakes(["C", "a", "t"]));

//14
console.log('task number 14');

const oneVarible = x => {
    if (typeof(x) !== 'string')
        return null;
        return x.toUpperCase().split('');
}
    console.log(oneVarible('banana mango apple'));


//15 

const foo = (str)=> console.log(str.charAt(str.length-1) === "o");

foo('omero');
foo('karin');

// 16
const bar = (x) => "Cat"+x.slice(2);

console.log(bar(""))
console.log(bar("x"))
console.log(bar("Cat"))
console.log(bar("Foobar"))
console.log(bar("Potato"))
console.log(bar("Tomato"))
