const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const cors = require('cors');
const {domain,secret,dbUser, database,client,clSecret} = require('./config');

const passport = require('passport');
const strategy = require('./login');
const massive = require('massive');

const connectionString = `postgres://${dbUser}@localhost/${database}`
const request = require('request');

const port = 3000;
const app = express();

///////////////////////////////////
///////// authentication //////////
///////////////////////////////////


app.use( session({
  secret: secret,
  resave: true,
  saveUninitialized: true
}));
passport.use(strategy);

// passport.serializeUser(function(user, done) {
//   done(null, user);
// });

// passport.deserializeUser(function(obj, done) {
//   done(null, obj);
// });

///////////////////////////////////
///////// middleware //////////////
///////////////////////////////////
app.use('/', express.static(__dirname + '/public'));
massive(connectionString).then(db => {
  app.set('db', db);
});
app.use(cors());
app.use(bodyParser.json());

//||||||| login/logout ||||||||
app.use(passport.initialize());
app.use(passport.session());

// using passport to access auth0
// { domain: config.auth0.domain ... etc}
passport.use(new Auth0Stratergy({
    domain,
    client,
    clSecret,
    callbackURL:  '/auth/callback'
   }, (accessToken, refreshToken, extraParams, profile, done) => {
     //Find user in database
     console.log(profile);
     const db = app.get('db');
     // .then means this is a promise
     db.getUserByAuthId([profile._json.sub]).then((user, err) => {
         console.log('INITIAL: ', user);
       if (!user[0]) { //if there isn't a user, we'll create one!
         console.log('CREATING USER');
         db.createUserByAuth([profile._json.sub]).then((user, err) => {
           console.log('USER CREATED', user[0]);
           return done(err, user[0]); // GOES TO SERIALIZE USER
         })
       } else { //when we find the user, return it
         console.log('FOUND USER', user[0]);
         return done(err, user[0]);
       }
     });
   }
 ));

// put user on session
 passport.serializeUser((user, done) => {
     done(null, user);
 });

// pull user from session for manipulation
 passport.deserializeUser((user, done) => {
     console.log(user);
     done(null, user);
 });

//////////////////////////////////
///////// controllers ////////////
//////////////////////////////////
const ctrl = require('./server/controls/dataCtrl')

///////////////////////////////////
/////////// endpoints /////////////
///////////////////////////////////


app.get('/api/users', ctrl.getAll);

app.post('/api/users',ctrl.createUser);
app.post('/api/trips',ctrl.createTrip);
app.post('/api/housing',ctrl.createHousing);
app.post('/api/trips/:id',ctrl.addTripGuest);

app.put('/api/housing/:id', ctrl.updateHousing);
app.put('/api/trips/:id', ctrl.updateTrip);

app.delete('/api/trips/:id', ctrl.deleteTrip);
app.delete('/api/housing/:id', ctrl.deleteHousing);
app.delete('/api/trips/:id', ctrl.removeTripUser);


app.listen( port, () => { console.log(`Andre ${port}`); } );