import { Link } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import Logo from '../logo/logo';
import { useAppSelector } from '../../hooks';
import { getAuthorizationStatus } from '../../store/user-process/selectors';

type HeaderProps = {
  activeMenuItem: string;
}

function Header({activeMenuItem}: HeaderProps): JSX.Element {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  return (
    <header className="header">
      <div className="container container--size-l">
        <Logo />
        <nav className="main-nav header__main-nav">
          <ul className="main-nav__list">
            <li className="main-nav__item">
              <Link className={`link ${activeMenuItem === AppRoute.Root || activeMenuItem === AppRoute.Quest ? 'active' : ''}`} to={AppRoute.Root}>Квесты</Link>
            </li>
            <li className="main-nav__item">
              <Link className={`link ${activeMenuItem === AppRoute.Contacts ? 'active' : ''}`} to={AppRoute.Contacts}>Контакты</Link>
            </li>
            <li className={`main-nav__item ${activeMenuItem !== AppRoute.Root ? 'visually-hidden' : ''}`}>
              <Link className={`link ${activeMenuItem === AppRoute.MyQuests ? 'active' : ''}`} to={AppRoute.MyQuests}>Мои бронирования</Link>
            </li>
          </ul>
        </nav>
        {
          authorizationStatus === AuthorizationStatus.Auth
            ?
            <div className="header__side-nav">
              <Link className="btn btn--accent header__side-item" to="#">Выйти</Link>
              <Link className="link header__side-item header__phone-link" to="tel:88003335599">8 (000) 111-11-11</Link>
            </div>
            :
            <div className="header__side-nav">
              <Link className="btn header__side-item header__login-btn" to={AppRoute.Login}>Вход</Link>
              <Link className="link header__side-item header__phone-link" to="tel:88003335599">8 (000) 111-11-11</Link>
            </div>
        }
      </div>
    </header>
  );
}

export default Header;
