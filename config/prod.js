// prod.js - production keys here
module.exports = {
	// google
	googleClientID : process.env.GOOGLE_CLIENT_ID,
	googleClientSecret : process.env.GOOGLE_CLIENT_SECRET,
	// instagram
	iyClientID : process.env.IY_CLIENT_ID,
	iyClientSecret : process.env.IY_CLIENT_SECRET,
	// mongo
	mongoURI : process.env.MONGO_URI,
	cookieKey: process.env.COOKIE_KEY,
	// stripe
	stripePublishableKey : process.env.STRIPE_PUBLISHABLE_KEY,
	stripeSecretKey : process.env.STRIPE_SECRET_KEY,
	sendGridKey: process.env.SEND_GRID_KEY,
	redirectDomain: process.env.REDIRECT_DOMAIN,

	// mid trans
	serverKeyDev: process.env.SERVER_KEY_DEV,
	clientKeyDev: process.env.CLIENT_KEY_DEV
};
