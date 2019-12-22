const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const UserService = require('./services/user-service');
const TransactionService = require('./services/transaction-service');
const morgan = require('morgan');

const app = express();
const port = 8080;

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", req.get('origin'));
    res.header("Access-Control-Allow-Credentials", true);
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.use(express.static('public'))

app.use(morgan('dev'));

app.use(bodyParser.json());

app.use(cookieParser("m2qpZkb?nvZ3dad"));

// Init Start
const USER_COOKIE = 'user_id';
const userService = new UserService();
const transactionService = new TransactionService();

app.get('/products', (req,res) => {
    const username = (req.signedCookies['user_id']);
    if (!userService.isUserExists(username)) {
        return res.sendStatus(403);
    }
    
    console.log(req.signedCookies['user_id']);
    const data = require('./Products.json');
    res.json(data);
});

app.post('/register', async (req,res) => {  
    const registerResponse = await userService.register(req.body);
    
    if (registerResponse.status) {
        res.sendStatus(204);
    } else {
        res.status(500).send(registerResponse.reason);
    }
});

app.post('/login' , async (req,res) => {
    const matched = await userService.login(req.body.username,req.body.password);

    if (matched) {
        if (req.body.rememberMe) {
            res.cookie(USER_COOKIE, req.body.username, 
            { domain: '', signed: true, httpOnly: true, expires: new Date(253402300000000) })
            .sendStatus(204);
        } else {
            res.cookie(USER_COOKIE, req.body.username,    
            { domain: '', signed: true, httpOnly: true, maxAge: 5 * 60 * 1000});
            res.sendStatus(204);
        }
    } else {
        res.sendStatus(401);
    }
});

app.post('/logout' , (req,res) => {
    res.clearCookie(USER_COOKIE).sendStatus(204);
});

app.post('/checkout', (req,res) => {
    const username = req.signedCookies[USER_COOKIE];
    if (!userService.isUserExists(username)) {
        return res.sendStatus(403);
    }

    transactionService.addTransaction(username,req.body);

    res.sendStatus(204);
});

app.get('/transactions', (req,res) => {
    const username = req.signedCookies[USER_COOKIE];
    console.log(username);
    if (username !== 'admin') {
        return res.sendStatus(403);
    }

    res.send(transactionService.transactions);
})

app.listen(port, () => console.log(`The server is listening on localhost, port ${port}.`));

module.exports = app