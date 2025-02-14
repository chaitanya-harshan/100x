// function myOwnSetTimeout(fn, delay){
//     setTimeout(fn,delay);
// }
// myOwnSetTimeout( ()=> {
//     console.log("Hi there!");
// },2000)

function myOwnSetTimeout(delay) {
  return new Promise(function (resolve) {
    setTimeout(resolve, delay);
  });
}

myOwnSetTimeout(2000).then(() => {
  console.log(bro);
  console.log("Hi there! 2 sec-");
});

const bro = myOwnSetTimeout(4000);
// console.log(bro); // <pending>
bro.then(() => {
  console.log(bro);
  console.log("After 4 sec");
});

//async await

async function main(){
  await myOwnSetTimeout(6000);
  console.log("After 6 sec");
};

main();



// ways to create async function
/*
async function myFunction() {
    // async function body
}

const myFunction = async () => {
    // async function body
};
*/