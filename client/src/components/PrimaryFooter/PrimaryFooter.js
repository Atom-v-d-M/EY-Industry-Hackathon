import './PrimaryFooter.scss';
import instagramIcon from '../../assets/images/social-icons/Instagram.svg'
import youtube from '../../assets/images/social-icons/Youtube.svg'
import facebook from '../../assets/images/social-icons/facebook.svg'
import twitter from '../../assets/images/social-icons/Twitter.svg'

function PrimaryFooter () {
    return (
        <footer className="primary-footer">
            <div className="primary-footer__container">
                <header className="primary-footer__header">
                    <p className="primary-footer__copywrite">©2021 Mango</p>
                    <h3 className="primary-footer__title">Mango</h3>
                </header>
                <div className="primary-footer__body">
                    <nav className="primary-header__nav">
                        <ul className="primary-header__list">
                            <li className="primary-header__item">
                                <a href="#" className="primary-header__link">Home</a>
                            </li>
                            <li className="primary-header__item">
                                <a href="#About Us" className="primary-header__link">About Us</a>
                            </li>
                            <li className="primary-header__item">
                                <a href="#Contact" className="primary-header__link">Contact</a>
                            </li>
                        </ul>
                    </nav>
                    <div className="primary-footer__icons-container">
                        <img src={facebook} alt="Facebook" className="primary-footer__icon"/>
                        <img src={instagramIcon} alt="Instagram" className="primary-footer__icon"/>
                        <img src={twitter} alt="Twitter" className="primary-footer__icon"/>
                        <img src={youtube} alt="Youtube" className="primary-footer__icon"/>
                    </div>
                </div>
            </div>
        </footer>
    );
};
export default PrimaryFooter;