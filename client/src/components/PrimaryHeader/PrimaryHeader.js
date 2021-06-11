import './PrimaryHeader.scss';
import mangoIcon from '../../assets/images/mango-icon.png'

function PrimaryHeader () {
    return (
        <header className="primary-header">
            <div className="primary-header__container">
                <a className="primary-header__logo-container">
                    <img src={mangoIcon} alt="mango icon" className="primary-header__logo-image"/>
                    <p className="primary-header__logo-text">Mango</p>
                </a>
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
            </div>
        </header>
    );
};
export default PrimaryHeader;