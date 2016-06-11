		console.log('are you there?');
var Twitter = require('twitter');
var request = require('request');
var spotify = require('spotfy')
 
var fs = require('fs');
var twitters = require('./keys.js');
var textfile = require('./random.txt');
fs.readfile
// var info= twitters(JSON.stringify);
		console.log(twitters);

var command = process.argv[2];
var userinput = process.argv[3];

		console.log(userinput);

switch(command){
	case 'my-tweets':
		tweets();
	break;
	
	case 'spotify-this-song':
	 	spotify();
	break;

	case 'movie-this':
	 	movie();
	break;

	case 'do-what-it-says':
	 	dosay();
	break;
}


// tweets function 
function tweets(){
		console.log('tweets function');

// var Twitter = require('twitter');
var client = new Twitter({
  
  // for testing the key information  to be retrieved through the Key.js file
  consumer_key: 'FOqJxGOD4OEI4YnL21mUekm27',
  consumer_secret: 'jKPJZPvHvilFVY9eeSdIhlsJzFVz3iTwBPQkH9UL1qu6p25opT',
  access_token_key: '2344105260-8RbfXTvPqjevuNZUhMeykiEnpW6mxwUAwvdb2bo',
  access_token_secret: 'Mlo3CiliQadnclXNl0wY6MCHhPf9QZNBi2VdsJtg2utZL',
  // consumer_key: process.env.TWITTER_CONSUMER_KEY,
  // consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  // access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
  // access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
});
		// debugging program marker
		console.log('pass client'); 

var params = {screen_name: 'nodejs'};
client.get('.statuses/user_timeline', params, function(error, tweets, response){
  if (!error) throw error;
  	
  	// checking for response from twitter
  	console.log(tweets);
    console.log(response);
  });
};


// Spotify function 
function spotify(){
		console.log('spotify function');

spotify.search({ type: 'artist', spotify: "https://open.spotify.com/artist/08td7MxkoHQkXnWAYD8d6Q", 
	name: userinput, uri: "spotify:artist:08td7MxkoHQkXnWAYD8d6Q", 
	query: userinput }, function(err, data) {
    if ( err ) {
        console.log('Error occurred: ' + err);
        return;
    }
 });
// fs.readFile('random.txt', 'utf8', function(err, data){
// if (err) {
// 	return console.log(err);
// }
// console.log(data);
// })
};
 

// Movie function 
function movie(){
		console.log('movie function');
var url = 'http://www.omdbapi.com/?t='+ userinput + '&y=&plot=short&r=json';

request(url, function(err, response, body){
	body = JSON.parse(body); 
	console.log(body.Title);
	console.log(body.Released);
	console.log(body.Rated);
	console.log(body.Country);
	console.log(body.Plot);
	console.log(body.Actors);
	console.log(body.imdbRating);
	console.log(body.Poster);

 if ( err ) {
        console.log('Error occurred: ' + err);
        return;
    }
});
