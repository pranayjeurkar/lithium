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
module.exports = (event) => {
	console.log("asasas");
 const senderId = event.sender.id;
 const message = event.message.text;
 if(message == 'hi')
 {
sendTextMessage(senderId,"Hi! My name is CheggBot"); 		
 }
 else
 {
sendTextMessage(senderId,"Hi! I am CheggBot");
 }

};