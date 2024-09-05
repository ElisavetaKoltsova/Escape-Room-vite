import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { Quest } from '../../types/quest';

type QuestCardItemProps = {
  quest: Quest;
}

function QuestCardItem({quest}: QuestCardItemProps): JSX.Element {
  const {id, title, previewImgWebp, previewImg, peopleMinMax, level} = quest;
  return (
    <div className="quest-card">
      <div className="quest-card__img">
        <picture>
          <source type="image/webp" srcSet={`${previewImgWebp}, img/content/crypt/crypt-size-s@2x.webp 2x`} />
          <img src={previewImg} srcSet="img/content/crypt/crypt-size-s@2x.jpg 2x" width="344" height="232" alt={title} />
        </picture>
      </div>
      <div className="quest-card__content">
        <div className="quest-card__info-wrapper"><Link className="quest-card__link" to={`${AppRoute.Quest}/${id}`}>{title}</Link>
        </div>
        <ul className="tags quest-card__tags">
          <li className="tags__item">
            <svg width="11" height="14" aria-hidden="true">
              <use xlinkHref="#icon-person"></use>
            </svg>{peopleMinMax[0]}&ndash;{peopleMinMax[1]}&nbsp;чел
          </li>
          <li className="tags__item">
            <svg width="14" height="14" aria-hidden="true">
              <use xlinkHref="#icon-level"></use>
            </svg>{level}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default QuestCardItem;
