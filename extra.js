var request = require('request');
var twitters = require('./keys.js');

twitters(JSON.stringify);
console.log(twitter);

var userinput = process.argv[2];

switch(userinput){
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
var Twitter = require('twitter');

  var client = new Twitter({
consumer_key: 'FOqJxGOD4OEI4YnL21mUekm27',
  consumer_secret: 'jKPJZPvHvilFVY9eeSdIhlsJzFVz3iTwBPQkH9UL1qu6p25opT',
  access_token_key: '2344105260-8RbfXTvPqjevuNZUhMeykiEnpW6mxwUAwvdb2bo',
  access_token_secret: 'Mlo3CiliQadnclXNl0wY6MCHhPf9QZNBi2VdsJtg2utZL',

  // consumer_key: process.env.TWITTER_CONSUMER_KEY,
  // consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  // access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
  // access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
});

// var params = {screen_name: 'nodejs'};
client.get('statuses/user_timeline', params, function(error, tweets, response){
  if (!error) {
    console.log(tweets);
    console.log(response);
  }
});	

