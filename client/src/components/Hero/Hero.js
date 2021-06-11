import './Hero.scss';
import appleDownload from '../../assets/images/appleDownload.svg'
import googleDownload from '../../assets/images/googleDownload.svg'
import hero from '../../assets/images/hero.png'

function Hero () {
    return (
        <div className="primary-hero">
            <div className="primary-hero__container">
                <article className="primary-hero__body">
                    <div className="primary-hero__copy-container">
                        <h1 className="primary-hero__title">Rescue food, eat for less.</h1>
                        <p className="primary-hero__subtitle">Rescue food from waste while enjoying a great healthy meal for less.</p>
                        <div className="primary-hero__icon-container">
                            <img src={appleDownload} alt="apple download link" className="primary-hero__image primary-hero__image--apple"/>
                            <img src={googleDownload} alt="google download link" className="primary-hero__image"/>
                        </div>
                    </div>
                    <aside className="primary-hero__aside">
                        <figure className="primary-hero__figure">
                            <img src={hero} alt="view of app on phone" className="primary-hero__hero-image"/>
                        </figure>
                    </aside>
                </article>
            </div>
        </div>
    );
};
export default Hero;