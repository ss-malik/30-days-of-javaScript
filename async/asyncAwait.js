// async function Name() {
//   return "Salman";
// }

// console.log(Name());

const apiUrl = "https://dummyjson.com/users";

const getUserData = async () => {
  try {
    const promise = fetch(apiUrl);
    const data = await promise;
    const response = await data.json();
    console.log(response);
  } catch (err) {
    console.log(err);
  }
};
getUserData();
