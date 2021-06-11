import './SiteBody.scss';
import eatingTogether from '../../assets/images/eatingTogether.svg'
import womanWithPhone from '../../assets/images/womanWithPhone.svg'
import contract from '../../assets/images/contract.svg'
import toronto from '../../assets/images/toronto.svg'

function SiteBody () {
    return (
        <main className="site-body">
            <article className="primary-body-section" id="About Us">
                <div className="primary-body-section__container">
                    <div className="primary-body-section__body">
                        <h2 className="primary-body-section__title">What We Do</h2>
                        <p className="primary-body-section__description primary-body-section__description--about">We save food from being wasted at local Toronto restaurants. Restaurants are a major contributer to food waste. To address this issue, we ensure fresh unused meals are offerred at reduced prices at the end of each day.</p>
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
                        <p className="primary-body-section__description primary-body-section__description--theApp">Hop on our app to find restaurants near you offering great meals for reduced prices. Instead of going to waste these meals can be yours!</p>
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
                        <p className="primary-body-section__description primary-body-section__description--contact">Become a partner to reach new customers, save money and reduce waste.</p>
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
};
export default SiteBody;