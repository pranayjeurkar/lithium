const FACEBOOK_ACCESS_TOKEN = 'EAAaZCAxmwyCcBADRcutTZCAp0azmj03NSFqk9yTtsUlgDOkdrZB2SQjwnrTA5gsWPSwZAZAlLRDXgn461MoureeHUYkTiUZCPLjrZBqeMW4lf6frpXg46X3fVN0Op9JZCeTy963H5UoGjz7LBSP9ySKczR9jCmklj0I2iqt9ghbaFJTsyzfjUcc0aBx99mjPoKEZD'
const request = require('request');
const sendTextMessage = (senderId, text) => {
	console.log("ahsghg");
 request({
 url: 'https://graph.facebook.com/v2.6/me/messages',
 qs: { access_token: FACEBOOK_ACCESS_TOKEN },
 method: 'POST',
 json: {
 recipient: { id: senderId },
 message: { text },
 }
 });
};

function getLuisIntent(senderId, utterance) {

var endpoint = 'https://westus.api.cognitive.microsoft.com/luis/v2.0/apps/1744c2b5-be97-4816-820c-617c812e199c?subscription-key=0e079552e3fa4302bb49b4ea78809cfc&spellCheck=true&bing-spell-check-subscription-key=0e079552e3fa4302bb49b4ea78809cfc&timezoneOffset=-360&q='+ utterance;
console.log(endpoint);
request(endpoint,
        function (err,
            response, body) {

            // HTTP Response
            if (err)
                console.log(err);
            else {

                var data = JSON.parse(body);
            	console.log(data);

 
sendTextMessage(senderId,data.entities[0].type);

            }
        });
};
module.exports = (event) => {
	console.log("asasas");
 const senderId = event.sender.id;
 const message = event.message.text;
             	 returnMessage = getLuisIntent(senderId,message);
 		
 
 
};