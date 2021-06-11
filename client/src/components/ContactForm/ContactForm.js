import { Component } from "react";
import contract from '../../assets/images/contract.svg'

class ContactForm extends Component {

    state = {
        pageLayout: "default"
    }

    handleClick = (e) => {
        e.preventDefault();
        this.setState({
            pageLayout: "contactForm"
        })
    }

    render () {
        let form = () => {
            return (
                <article className="primary-body-section primary-body-section--no-margin" id="Contact">
                    <div className="primary-body-section__container">
                        <div className="primary-body-section__body">
                            <h2 className="primary-body-section__title">Become A Partner</h2>
                            <p className="primary-body-section__description primary-body-section__description--contact">Become a partner to access a wide network of customers from all over the city looking for new, affordable and delicious food. Save money while playing your part in reducing food wastage and shortage while helping the greater good.</p>
                            <div className="primary-body-section__button-container">
                                <a href="#" className="primary-body-section__button">Contact Us</a>
                            </div>
                        </div>
                        <form className="primary-body-section__form">
                            <label className="primary-body-section__label">
                                Business
                                <input type="text" className="primary-body-section__input" placeholder="Enter your business's name"/>
                            </label>
                            <label className="primary-body-section__label">
                                Contact Name
                                <input type="text" className="primary-body-section__input" placeholder="Who should we contact?"/>
                            </label>
                            <label className="primary-body-section__label primary-body-section__label--email">
                                Email
                                <input type="email" className="primary-body-section__input" placeholder="Enter your business's email"/>
                            </label>
                            <div className="primary-body-section__form-button-container">
                                <p className="primary-body-section__button primary-body-section--form-cancel">Cancel</p>
                                <button className="primary-body-section__button primary-body-section--form-submit">Submit</button>
                            </div>
                        </form>
                    </div>
                </article>
            )
        }

        let pageDefault = () => {
            return (
                <article className="primary-body-section primary-body-section--no-margin" id="Contact">
                    <div className="primary-body-section__container">
                        <div className="primary-body-section__body">
                            <h2 className="primary-body-section__title">Become A Partner</h2>
                            <p className="primary-body-section__description primary-body-section__description--contact">Become a partner to access a wide network of customers from all over the city looking for new, affordable and delicious food. Save money while playing your part in reducing food wastage and shortage while helping the greater good.</p>
                            <div className="primary-body-section__button-container">
                                <a href="#" className="primary-body-section__button" onClick={(e) => this.handleClick(e)}>Contact Us</a>
                            </div>
                        </div>
                        <aside className="primary-body-section__aside">
                            <figure className="primary-body-section__figure">
                                <img src={contract} alt="Two people sitting at a table eating food" className="primary-body-section__image primary-body-section__image--contact"/>
                            </figure>
                        </aside>
                    </div>
                </article>
            )
        }

        return this.state.pageLayout === "default" ? pageDefault() : form()

    }
};
export default ContactForm;