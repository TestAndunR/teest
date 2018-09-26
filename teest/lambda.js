let AWS = require('aws-sdk');
let SL_TWITTER = require('slappforge-sdk-twitter');
let twitterClients = require('./TwitterClients');
const twitter = new SL_TWITTER.TwitterP(twitterClients);

exports.handler = function (event, context, callback) {

    twitter.searchTweets({
        "searchParams": {
            "q": "serverless",
            "count": 100
        },
        "clientName": "twClient"
    }).then(response => {
        let data = response.data;
        // console.log(data)
    }).catch(err => {
        console.log(err);
    });
    twitter.getTweet({
        "tweetID": "1044498000624709632",
        "clientName": "twClient"
    }).then(response => {
        let data = response.data;
        console.log(data)
    }).catch(err => {
        console.log(err);
    });

    callback(null, 'Successfully executed');
}