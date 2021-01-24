let arr = [];

function fillArray(array) {

for (let i = 0; i < 10; i++){
    //to create an array with random numbers from -100 to 100 
    //Math.round is to round off a number
    arr.push(Math.round(Math.random()*199)-99);
}
    return arr;
}

let x = fillArray(arr);

function replaceFromArray() {
   for (let i = 0; i < x.length; i++){
       //look up negative items and replace with 0
    if(x[i] < 0) {
        x[i]= 0;
       }
   }
   return x;
}

let zr = replaceFromArray(x);

function addToArray() {
    //Starts reading from the end so it does'nt change the index number
    for (let i = zr.length; i > 0; i--) {  
        //Look up even indexes
        if((i%2)===0) {
            //Look up "0" in the array
            if(zr[i]=="0") {
                //splice(index, deleteCount, ...items)
                //index - from which one it has to start reading
                //deleteCount - number of deleted items, if 0 then we can add instead of replacing
                //...items - what to add/replace
                zr.splice(i+1, 0, -1)
            }
    } }  
    console.log(zr);
}

addToArray()
