const request = require('request');

const fetchBreedDescription = function(breedName, callback) {

  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    if (response.statusCode === 404) {
      return callback("The page you request was not found (error 404)");
    }
    const data = JSON.parse(body);
    if (!data.length) {
      return callback("Breed does not exist (breed name was not found in API to be fetched)");
    }
    const description = data[0].description;
    return callback(null, description);
  });
};

module.exports = { fetchBreedDescription };
