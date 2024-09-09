import { Link } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { logoutAction } from '../../store/api-actions';
import { getAuthorizationStatus } from '../../store/user-process/selectors';

function LoginButton(): JSX.Element {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const dispatch = useAppDispatch();
  if (authorizationStatus === AuthorizationStatus.Auth) {
    return (
      <Link
        className="btn btn--accent header__side-item"
        to="#"
        onClick={(evt) => {
          evt.preventDefault();
          dispatch(logoutAction());
        } }
      >
        Выйти
      </Link>
    );
  }
  return (
    <Link
      className="btn header__side-item header__login-btn"
      to={AppRoute.Login}
    >
      Вход
    </Link>
  );
}

export default LoginButton;
