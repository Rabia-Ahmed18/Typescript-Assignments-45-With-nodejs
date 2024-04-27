// / Creating a function

function make_shirts(size : string = "large" , printMessage :string = "I Love Typescript"){
    console.log(`Creating a ${size} size shirt with ${printMessage} prints on it`);
}
make_shirts();

function make_shirts2(size :string = "medium", printMessage :string ="I Love Coding"){
console.log(`Creating a ${size} size shirt with ${printMessage} prints on it`);
}
make_shirts2();