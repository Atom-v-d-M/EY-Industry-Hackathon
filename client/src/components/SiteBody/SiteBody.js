import './SiteBody.scss';
import { Component } from "react";
import eatingTogether from '../../assets/images/eatingTogether.svg'
import womanWithPhone from '../../assets/images/womanWithPhone.svg'
import contract from '../../assets/images/contract.svg'
import toronto from '../../assets/images/toronto.svg'

class SiteBody extends Component {

    state = {
        pageLayout: "default"
    }

    handleClick = () => {
        this.setState({
            pageLayout: "contactForm"
        })
    }

    render () {
        // let pageState = {
        //     return
        // }

        if (this.state.pageLayout === "contactForm") {

        }
        return (
            <main className="site-body">
                <article className="primary-body-section" id="About Us">
                    <div className="primary-body-section__container">
                        <div className="primary-body-section__body">
                            <h2 className="primary-body-section__title">What We Do</h2>
                            <p className="primary-body-section__description primary-body-section__description--about">Mango works to tackle the nation-wide food waste crisis by collaborating with local Toronto restaurants to offer fresh, healthy meals at reduced prices. At the end of the day, instead of throwing out leftover food products, restaurants will offer the remains on the Mango app and connect with hungry Torontonians looking for discounted food.</p>
                            <div className="primary-body-section__icon-container">
                                <img src={toronto} alt="Map marker with text Toronto" className="primary-body-section__icon"/>
                            </div>
                        </div>
                        <aside className="primary-body-section__aside">
                            <figure className="primary-body-section__figure">
                                <img src={eatingTogether} alt="Two people sitting at a table eating food" className="primary-body-section__image primary-body-section__image--about"/>
                            </figure>
                        </aside>
                    </div>
                </article>
                <article className="primary-body-section">
                    <div className="primary-body-section__container primary-body-section__container--reverse">
                        <div className="primary-body-section__body primary-body-section__body--theApp">
                            <h2 className="primary-body-section__title">Try The App</h2>
                            <p className="primary-body-section__description primary-body-section__description--theApp">Discover restaurants near you offering fresh meals at affordable prices, while contributing to a more sustainable world. View the health rating on each meal to give your body the fuel is deserves.</p>
                        </div>
                        <aside className="primary-body-section__aside primary-body-section__aside--reverse">
                            <figure className="primary-body-section__figure">
                                <img src={womanWithPhone} alt="Two people sitting at a table eating food" className="primary-body-section__image primary-body-section__image--theApp"/>
                            </figure>
                        </aside>
                    </div>
                </article>
                <article className="primary-body-section primary-body-section--no-margin" id="Contact">
                    <div className="primary-body-section__container">
                        <div className="primary-body-section__body">
                            <h2 className="primary-body-section__title">Become A Partner</h2>
                            <p className="primary-body-section__description primary-body-section__description--contact">Become a partner to access a wide network of customers from all over the city looking for new, affordable and delicious food. Save money while playing your part in reducing food wastage and shortage while helping the greater good.</p>
                            <div className="primary-body-section__button-container">
                                <a href="#" className="primary-body-section__button">Contact Us</a>
                            </div>
                        </div>
                        <aside className="primary-body-section__aside">
                            <figure className="primary-body-section__figure">
                                <img src={contract} alt="Two people sitting at a table eating food" className="primary-body-section__image primary-body-section__image--contact"/>
                            </figure>
                        </aside>
                    </div>
                </article>
            </main>
        );
    }
};
export default SiteBody;