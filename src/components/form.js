import React from 'react';
import './form';
import warning from '../images/icon-error.svg'


class MailForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            emailValid: false,
            showWarning: false
        }
        this._handleUserInput = this._handleUserInput.bind(this);
        this._validateMail = this._validateMail.bind(this);
        this._handleSubmit = this._handleSubmit.bind(this);
        this._handelClick = this._handelClick.bind(this)
    }

    _validateMail = (mail) => {
        const patt = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
        return patt.test(mail);
    }


    _handleUserInput (e) {
        const email = e.target.value;
        let emailValid = this._validateMail(email)
        this.setState({
            email: email,
            emailValid: emailValid,
            showWarning: false
        });
      }
    
    _handleSubmit (e) {
        if(!this.state.emailValid){
            e.preventDefault()
            return false
        }
    }

    _handelClick(e) {
        if(!this.state.emailValid){
            e.preventDefault()
            this.setState({
                showWarning: true
            })
            return false
        } else {
            this.setState({
                showWarning: false
            })
        }
    }


    render() {
        return (
            <div className="mailForm">
                <form 
                    action="http://localhost:8000/" 
                    className={`mailForm__form ${this.state.showWarning ? "mailForm--invalid" : ""}`}
                    noValidate
                    onSubmit={event => this._handleSubmit(event)}
                >
                    
                    <label htmlFor="" className="mailForm__field">
                        <input 
                            type="email" 
                            placeholder="Email Address" 
                            className="mailForm__input"
                            name="email"
                            value={this.state.email}
                            onChange={(event) => this._handleUserInput(event)}
                        />
                        
                        {this.state.showWarning ? 
                            <img className="mailForm__warningIcon" src={warning} alt=""/> : ''
                        }
                        <button 
                            className="mailForm__btn" 
                            type="submit"
                            onClick={event => this._handelClick(event)}
                        >
                        </button>
                        {this.state.showWarning ? 
                            <p className="mailForm__warning">
                            Please provide a valid email
                            </p> : ''
                        }
                        
                    </label>
                </form>
            </div>
        )
    }
};

export default MailForm