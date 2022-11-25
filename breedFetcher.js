const request = require('request');
let breedName = process.argv[2];

request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}fdfdf`, (error, response, body) => {
  //console.log('error:', error); // Print the error if one occurred
  //console.log('statuscode:', response.statusCode); // Print the response status code if a response was received
  // console.log('body:',typeof body); // Print the HTML for the Google homepage
  if (response.statusCode === 404) {
    console.log("The page you request was not found (error 404)");
    return;
  }
  const data = JSON.parse(body);
  if (!data.length) {
    console.log("msh");
    return;
  }
  if (!data[0]["description"]) {
    console.log("breed does not exist");
    return;
  }
  const description = data[0].description;
  console.log(description);
});