import React, {Component} from 'react'

export class Contact extends Component{
    render(){
        return(
        <div id="mainBody">
        <div className="container">
            <hr className="soften" />
            <h1>Visit us</h1>
            <hr className="soften" />	
            <div className="row">
            <div className="span4">
                <h4>Contact Details</h4>
                <p>	18 Fresno,<br /> CA 93727, USA
                <br /><br />
                info@bootsshop.com<br />
                Tel 123-456-6780<br />
                Fax 123-456-5679<br />
                web:bootsshop.com
                </p>		
            </div>
            <div className="span4">
                <h4>Opening Hours</h4>
                <h5> Monday - Friday</h5>
                <p>09:00am - 09:00pm<br /><br /></p>
                <h5>Saturday</h5>
                <p>09:00am - 07:00pm<br /><br /></p>
                <h5>Sunday</h5>
                <p>12:30pm - 06:00pm<br /><br /></p>
            </div>
            <div className="span4">
                <h4>Email Us</h4>
                <form className="form-horizontal">
                <fieldset>
                    <div className="control-group">
                    <input type="text" placeholder="name" className="input-xlarge" />
                    </div>
                    <div className="control-group">
                    <input type="text" placeholder="email" className="input-xlarge" />
                    </div>
                    <div className="control-group">
                    <input type="text" placeholder="subject" className="input-xlarge" />
                    </div>
                    <div className="control-group">
                    <textarea rows={3} id="textarea" className="input-xlarge" defaultValue={""} />
                    </div>
                    <button className="btn btn-large" type="submit">Send Messages</button>
                </fieldset>
                </form>
            </div>
            </div>
            <div className="row">
            <div className="span12">
                <iframe style={{width: '100%', height: 300, border: 0}} scrolling="no" src="https://maps.google.co.uk/maps?f=q&source=s_q&hl=en&geocode=&q=18+California,+Fresno,+CA,+United+States&aq=0&oq=18+California+united+state&sll=39.9589,-120.955336&sspn=0.007114,0.016512&ie=UTF8&hq=&hnear=18,+Fresno,+California+93727,+United+States&t=m&ll=36.732762,-119.695787&spn=0.017197,0.100336&z=14&output=embed" /><br />
                <small><a href="https://maps.google.co.uk/maps?f=q&source=embed&hl=en&geocode=&q=18+California,+Fresno,+CA,+United+States&aq=0&oq=18+California+united+state&sll=39.9589,-120.955336&sspn=0.007114,0.016512&ie=UTF8&hq=&hnear=18,+Fresno,+California+93727,+United+States&t=m&ll=36.732762,-119.695787&spn=0.017197,0.100336&z=14" style={{color: '#0000FF', textAlign: 'left'}}>View Larger Map</a></small>
            </div>
            </div>
        </div>
        </div>
        )
    }
}

export default Contact