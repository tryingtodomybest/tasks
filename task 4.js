//Returns the array of strings for drawing triangle


function Triangle(n){
    let m = arguments.length > 1 ? arguments[1] : ' ', //left side(empty)
    k    = arguments.length > 2 ? arguments[2] : '# ', //sign that builds triangle
    r  = arguments.length > 3 ? arguments[3] : ' ',// right side(empty)
    line    = n, //amount of strings
    result  = [];


while(line-->0)/*decreases line on 1 while it's bigger than 0*/ {
result.push(Array(line+1).join(m) +Array(n-line).join(k) +Array(line+1).join(r));
} 
return result;// return array
}

// Output
Triangle(6).map(function(printTriangle){console.log(printTriangle)});