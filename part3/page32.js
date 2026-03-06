// Page 32.js

async function getData() {
  try {
    const url = "https://jsonplaceholder.typicode.com/users";
h
    let result = await fetch(url);
    let data = await result.json();

    console.log(data);
  } 
  catch (error) {
    console.log(error);
  }
}

getData();