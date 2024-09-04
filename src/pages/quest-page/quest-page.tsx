import { Link } from 'react-router-dom';
import Footer from '../../components/footer/footer';
import { AppRoute } from '../../const';

function QuestPage(): JSX.Element {
  return (
    <div className="wrapper">
      <header className="header">
        <div className="container container--size-l">
          <Link className="logo header__logo" to={AppRoute.Root} aria-label="Перейти на Главную">
            <svg width="134" height="52" aria-hidden="true">
              <use xlinkHref="#logo"></use>
            </svg>
          </Link>
          <nav className="main-nav header__main-nav">
            <ul className="main-nav__list">
              <li className="main-nav__item">
                <Link className="link not-disabled active" to={AppRoute.Root}>Квесты</Link>
              </li>
              <li className="main-nav__item">
                <Link className="link" to={AppRoute.Contacts}>Контакты</Link>
              </li>
            </ul>
          </nav>
          <div className="header__side-nav">
            <Link className="btn header__side-item header__login-btn" to={AppRoute.Login}>Вход</Link>
            <Link className="link header__side-item header__phone-link" to="tel:88003335599">8 (000) 111-11-11</Link>
          </div>
        </div>
      </header>
      <main className="decorated-page quest-page">
        <div className="decorated-page__decor" aria-hidden="true">
          <picture>
            <source type="image/webp" srcSet="img/content/maniac/maniac-size-m.webp, img/content/maniac/maniac-size-m@2x.webp 2x" />
            <img src="img/content/maniac/maniac-size-m.jpg" srcSet="img/content/maniac/maniac-size-m@2x.jpg 2x" width="1366" height="768" alt="" />
          </picture>
        </div>
        <div className="container container--size-l">
          <div className="quest-page__content">
            <h1 className="title title--size-l title--uppercase quest-page__title">Маньяк</h1>
            <p className="subtitle quest-page__subtitle"><span className="visually-hidden">Жанр:</span>Ужасы
            </p>
            <ul className="tags tags--size-l quest-page__tags">
              <li className="tags__item">
                <svg width="11" height="14" aria-hidden="true">
                  <use xlinkHref="#icon-person"></use>
                </svg>3&ndash;6&nbsp;чел
              </li>
              <li className="tags__item">
                <svg width="14" height="14" aria-hidden="true">
                  <use xlinkHref="#icon-level"></use>
                </svg>Средний
              </li>
            </ul>
            <p className="quest-page__description">В&nbsp;комнате с&nbsp;приглушённым светом несколько человек, незнакомых друг с&nbsp;другом, приходят в&nbsp;себя. Никто не&nbsp;помнит, что произошло прошлым вечером. Руки и&nbsp;ноги связаны, но&nbsp;одному из&nbsp;вас получилось освободиться. На&nbsp;стене висит пугающий таймер и&nbsp;запущен отсчёт 60&nbsp;минут. Сможете&nbsp;ли вы&nbsp;разобраться в&nbsp;стрессовой ситуации, помочь другим, разобраться что произошло и&nbsp;выбраться из&nbsp;комнаты?</p>
            <Link className="btn btn--accent btn--cta quest-page__btn" to={`${AppRoute.Quest}/${AppRoute.Booking}`}>Забронировать</Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default QuestPage;
