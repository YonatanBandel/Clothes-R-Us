import React, { Component } from 'react';

class ReadmeYonatan extends Component {
    render () {
        return (
            <span><br/>
                i. This 'readme' was made by Inbal Preuss<br/><br/>
                ii. The name of the store is "Clothes-R-Us" (which comes from "Toys-R-Us")<br/><br/>
                iii. We sell clothes<br/><br/>
                iv. A "Our Products" that shows 2 youtube videos embedded in the component that show our products in fashion shows <br/> A
                "Delivery Policy" page that ensures our customers that we are reliable<br/><br/>
                v. Understanding how to setup cookies in the server and how to implement them in express<br />
                Also the testing part, I spend some time online to further understand how testing in the api world works.<br />
                In addition, I had to learn react and how to work with react router library and Redux.<br/><br/>
                vi. My insanly cool partner is Yonatan Bandel, id 203662572<br/>
                (The following refers to question no.2 in the "Final Project (2019)" docs file)<br/>
                Yonatan did: section b: i, ii (login screen), iii, iv, v, vi, vii<br/>
                I did: section b: ii (remember me + cookies), viii, ix, section d<br/><br/>
                vii. The routes the app supports are:<br/>
                '/admin', '/cart', '/delivery' '/checkout', '/login', '/logout' '/registration', '/products', <br/>
                The only routes which are exposed to users before login are 'login' and 'registration' and 'readme's<br/><br/>
                viii. I used secured cookies which I setup on the server side using express cookie-parser library.
                I signed the cookie with the username, so the user will not be able to manipulate them.
                In addition, i made them HttpOnly so they can't be accessed from code, and they will be sent for every request
                to the server.<br/><br/>
                ix. Yes <br/><br/>        
                </span>
        )
    }
}

export default ReadmeYonatan