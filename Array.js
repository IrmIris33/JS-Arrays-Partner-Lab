let myarray = [5];

if (myarray.length <= 0) { 
    console.log("This is empty")
} else {
    console.log("This is correct")
}

let message = (myarray.length === 0) ? "This is empty" : "This is correct";
console.log(message);