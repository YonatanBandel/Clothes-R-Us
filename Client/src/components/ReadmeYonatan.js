import React, { Component } from 'react';

class ReadmeYonatan extends Component {
    render () {
        return (
            <span><br/>
                i. This 'readme' was made by Yonatan Bandel<br/><br/>
                ii. The name of the store is "Clothes-R-Us" (which comes from "Toys-R-Us")<br/><br/>
                iii. We sell clothes<br/><br/>
                iv. A "Our Products" page that shows 2 youtube videos of our products in fashion shows<br/> 
                    A "Delivery Policy" page that ensures our reliablity to customers<br/><br/>
                v. The hard thing to do was to learn and implement the app with React<br />
                In addition, working with Redux was difficult at the beggining, but once you understand the concept it makes life easier, so it was the right thing to do<br />
                BTW, server side was simpler than client side, because we did HWs on server side, so I feel comfortable in this area<br/><br/>
                vi. My awesome partner is Inbal Preuss, id 206073272<br/>
                (The following refers to question no.2 in the "Final Project (2019)" docs file)<br/>
                I did: section b: i, ii (login screen), iii, iv, v, vi, vii<br/>
                She did: section b: ii (remember me + cookies), viii, ix, section d<br/><br/>
                vii. The routes the app supports are:<br/>
                '/admin', '/cart', '/checkout', '/delivery', '/'(home), '/login', '/logout', '/products', '/readmeyonatan', 'readmeinbal', '/registration'<br/>
                The only routes which are exposed to users before login are 'login' and 'registration' and 'readme's<br/><br/>
                viii. As Inbal wrote in her 'readme':<br />
                I used secured cookies which I setup on the server side using express cookie-parser library.
                I signed the cookie with the username, so the user will not be able to manipulate them.
                In addition, I made them HttpOnly so they can't be accessed from code, and they will be sent for every request
                to the server.<br/><br/>
                ix. Yes <br/><br/>       
            </span>
        )
    }
}

export default ReadmeYonatan