import { Link } from 'react-router-dom';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useAppDispatch } from '../../hooks';
import { loginAction } from '../../store/api-actions';
import { AuthData } from '../../types/auth-data';

const MAX_PASSWORD_LENGTH = 15;
const MIN_PASSWORD_LENGTH = 3;

const ErrorMassage = {
  MAX_LENGTH_ERROR: 'Длина пароля не может быть больше 15ти символов',
  MIN_LENGTH_ERROR: 'Длина пароля не может быть меньше 3ёх символов',
  REQUIRED: 'Поле обязательное'
};

function LoginForm(): JSX.Element {
  const dispatch = useAppDispatch();

  const { register, handleSubmit, formState: {errors} } = useForm<AuthData>();

  const onSubmit: SubmitHandler<AuthData> = (data) => {
    dispatch(loginAction(data));
  };

  return (
    <form className="login-form"
      // eslint-disable-next-line @typescript-eslint/no-misused-promises
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="login-form__inner-wrapper">
        <h1 className="title title--size-s login-form__title">Вход</h1>
        <div className="login-form__inputs">
          <div className="custom-input login-form__input">
            <label className="custom-input__label" htmlFor="email">E&nbsp;&ndash;&nbsp;mail</label>
            <input
              type="email"
              id="email"
              placeholder="Адрес электронной почты"
              required
              {...register('email',
                {required: {value: true, message: ErrorMassage.REQUIRED}}
              )}
            />
            {errors.email && <span>{errors.email.message}</span>}
          </div>
          <div className="custom-input login-form__input">
            <label className="custom-input__label" htmlFor="password">Пароль</label>
            <input
              type="password"
              id="password"
              placeholder="Пароль"
              required
              {...register('password', {
                required: { value: true, message: ErrorMassage.REQUIRED },
                minLength: { value: MIN_PASSWORD_LENGTH, message: ErrorMassage.MIN_LENGTH_ERROR },
                maxLength: { value: MAX_PASSWORD_LENGTH, message: ErrorMassage.MAX_LENGTH_ERROR }
              })}
            />
            {errors.password && <span>{errors.password.message}</span>}
          </div>
        </div>
        <button className="btn btn--accent btn--general login-form__submit" type="submit">Войти</button>
      </div>
      <label className="custom-checkbox login-form__checkbox">
        <input type="checkbox" id="id-order-agreement" name="user-agreement" required />
        <span className="custom-checkbox__icon">
          <svg width="20" height="17" aria-hidden="true">
            <use xlinkHref="#icon-tick"></use>
          </svg>
        </span>
        <span className="custom-checkbox__label">Я&nbsp;согласен с
          <Link className="link link--active-silver link--underlined" to="#">правилами обработки персональных данных</Link>&nbsp;и пользовательским соглашением
        </span>
      </label>
    </form>
  );
}

export default LoginForm;
