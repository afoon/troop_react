const express = require('express');
const session = require('express-session');
const { json } = require("body-parser");
const massive = require('massive');
const cors = require('cors');
const passport = require('passport');
const Auth0Strategy = require('passport-auth0');
const {domain,secret,dbUser, database,client,clSecret, access} = require('./config');


const connectionString = access;
const request = require('request');

const port = 3001;
const app = express();
const router = express.Router();
app.use("/api", router);
app.use(json());
///////////////////////////////////
///////// middleware //////////////
///////////////////////////////////
app.use(cors());
app.use(express.static(__dirname + '/../client/public'));


///////////////////////////////////
///////// authentication //////////
///////////////////////////////////
massive(connectionString).then(instance => {
  app.set('db',instance)
}).catch(err => {
  console.log(err);
})

app.use( session({
  secret: secret,
  resave: true,
  saveUninitialized: true
}));

//||||||| login/logout ||||||||
app.use(passport.initialize());
app.use(passport.session());

// using passport to access auth0
// { domain: config.auth0.domain ... etc}
passport.use(new Auth0Strategy({
    domain: domain,
    clientID: client,
    clientSecret: clSecret,
    callbackURL:  '/auth/callback'
   }, (accessToken, refreshToken, extraParams, profile, done) => {
     //Find user in database
     const db = app.get('db');
     // .then means this is a promise
     db.getUserByAuthId([profile._json.sub]).then((user, err) => {
          //console.log('INITIAL: ', profile._json.context.clientMetadata);
          if (profile.provider == 'facebook'){
            profile._json.context.mutual_friends.data.forEach(function(element) {
              db.checkFriend([profile._json.sub,'facebook|'+element.id]).then(response => {
                if (response.length === 0) {
                  db.updateFriends([profile._json.sub,'facebook|'+element.id])}})
            });
          }
       if (!user[0]) { //if there isn't a user, we'll create one!
        //  console.log('CREATING USER');
         db.createUserByAuth([profile._json.sub, profile.displayName,profile.picture,profile._json.given_name,profile._json.family_name]).then((user, err) => {
          //  console.log('USER CREATED', user[0]);
          
           return done(err, user[0]); // GOES TO SERIALIZE USER
         })
       } else { //when we find the user, return it
        //  console.log('FOUND USER', user[0]);
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
    //  console.log(user);
     done(null, user);
 });




//////////////////////////////////
///////// controllers ////////////
//////////////////////////////////
const usersCtrl = require('./controls/usersCtrl');
const tripCtrl = require('./controls/tripCtrl');
const housingCtrl = require('./controls/housingCtrl');
const transportCtrl = require('./controls/transportationCtrl');
const activityCtrl = require('./controls/activityCtrl');
///////////////////////////////////
/////////// endpoints /////////////
///////////////////////////////////
// auth endpoints

// initial endpoint to fire off login
app.get('/login', passport.authenticate('auth0', {scope: 'openid profile'}))
;

// redirect to home and use the resolve to catch the user
app.get('/auth/callback',
    passport.authenticate('auth0', { successRedirect: '/',failureRedirect: '/login' }), (req, res) => {
        res.status(200).json(req.user);
});

// if not logged in, send error message and catch in resolve
// else send user
app.get('/auth/me', (req, res) => {
    if (!req.user) {res.redirect('/');}
    if (req.user) { console.log('no logged');}
});

// remove user from session
app.get('/auth/logout', (req, res) => {
    req.logout();
    res.redirect('/');
});

app.get('/',(req,res)=>{
    res.status(200).send(req.user);
})

//////other endpoints//////
app.get('/auth/logged', (req, res) => {
  if (!req.user) {res.redirect('/login');}
  if (req.user) {res.redirect('/')}
});


///////////////////////////////user endpoints//////////////////////////////

////////////////////////////trip endpoints///////////////////////////////
//   ******All Trips *******


//   ******Current Trip *******


//////////////////////////////housing endpoints///////////////////////////////


//   ******Voting App *******


//////////////////////////////////transportation endpoints////////////////////////


//////////////////////////////activity endpoints//////////////////////////////////


///////////////////////////////////rules endpoints/////////////////////////////////









app.listen( port, () => { console.log(`Andre ${port}`); } );