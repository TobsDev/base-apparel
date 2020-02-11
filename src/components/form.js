import React from 'react';
import './form';



class MailForm extends React.Component {
    render() {
        return (
            <div className="mailForm">
                <form action="" className="mailForm__form">
                    <label htmlFor="" className="mailForm__field">
                        <input type="email" placeholder="Email Address" className="mailForm__input"/>
                        
                        <div className="mailForm__btn">
                            <input type="submit" className="mailForm__btn--hide" value=""/>
                        </div>
                    </label>
                </form>
            </div>
        )
    }
};

export default MailForm