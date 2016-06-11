console.log('are you there?');
var Twitter = require('twitter');
var request = require('request');


var twitters = require('./keys.js');

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

function tweets(){
console.log('getting closer');
// var Twitter = require('twitter');
var client = new Twitter({
  // consumer_key: process.env.TWITTER_CONSUMER_KEY,
  // consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  // access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
  // access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
});

console.log('pass client');

var params = {screen_name: 'nodejs'};
client.get('.statuses/user_timeline', params, function(error, tweets, response){
  if (!error) throw error;
  
  	console.log(tweets);
    console.log(response);
  });
};

function spotify(){
console.log('getting closer');

spotify.search({ type: 'artist','track','track link','album', query: userinput }, function(err, data) {
    if ( err ) {
        console.log('Error occurred: ' + err);
        return;
    }
 
    // Do something with 'data' 
});

function movie(){
console.log('getting closer');
var url = 'http://www.omdbapi.com/?t='+ userinput+ '&y=&plot=short&r=json';

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
})
 if ( err ) {
        console.log('Error occurred: ' + err);
        return;



