import { ReserveQuest } from '../../types/quest';

type MyQuestCardItemProps = {
  reserveQuest: ReserveQuest;
}

function MyQuestCardItem({reserveQuest}: MyQuestCardItemProps): JSX.Element {
  const {
    quest,
    date,
    time,
    location,
    peopleCount
  } = reserveQuest;

  const {
    previewImg,
    previewImgWebp,
    title,
    level
  } = quest;

  const {
    address
  } = location;

  return (
    <div className="quest-card">
      <div className="quest-card__img">
        <picture>
          <source type="image/webp" srcSet={`${previewImgWebp}, img/content/maniac/maniac-size-s@2x.webp 2x`} />
          <img src={previewImg} srcSet="img/content/maniac/maniac-size-s@2x.jpg 2x" width="344" height="232" alt="Мужчина в маске в тёмном переходе." />
        </picture>
      </div>
      <div className="quest-card__content">
        <div className="quest-card__info-wrapper"><a className="quest-card__link" href="quest.html">{title}</a>
          <span className="quest-card__info">[{date === 'today' ? 'сегодня' : 'завтра'},&nbsp;{time}. {address}]</span>
        </div>
        <ul className="tags quest-card__tags">
          <li className="tags__item">
            <svg width="11" height="14" aria-hidden="true">
              <use xlinkHref="#icon-person"></use>
            </svg>{peopleCount}&nbsp;чел
          </li>
          <li className="tags__item">
            <svg width="14" height="14" aria-hidden="true">
              <use xlinkHref="#icon-level"></use>
            </svg>{level}
          </li>
        </ul>
        <button className="btn btn--accent btn--secondary quest-card__btn" type="button">Отменить</button>
      </div>
    </div>
  );
}

export default MyQuestCardItem;
