// .then()

function animalData() {
  fetch("https://fakerapi.it/api/v1/persons")
  .then((response) => {
    response.json()
    .then((data) => {
      console.log(data);
    });
  });
}

 // Async-await

async function asyncAnimalData() {
    const response = await fetch("https://fakerapi.it/api/v1/persons");
    const data = await response.json();
    console.log(data);
}

// animalData();
asyncAnimalData();