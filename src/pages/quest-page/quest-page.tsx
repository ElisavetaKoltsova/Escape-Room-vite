import { Link, useParams } from 'react-router-dom';
import Footer from '../../components/footer/footer';
import { AppRoute } from '../../const';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchCurrentQuestAction } from '../../store/api-actions';
import { getCurrentQuest, getQuestsDataLoadingStatus } from '../../store/quests-data/selector';
import NotFoundPage from '../not-found-page/not-found-page';
import Loader from '../../components/loader/loader';
import Header from '../../components/header/header';

function QuestPage(): JSX.Element {
  const {id: currentId} = useParams();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if(currentId) {
      dispatch(fetchCurrentQuestAction(currentId));
    }
  }, [currentId, dispatch]);

  const currentQuest = useAppSelector(getCurrentQuest);
  const isQuestsDataLoading = useAppSelector(getQuestsDataLoadingStatus);

  if (isQuestsDataLoading) {
    return <Loader />;
  }

  if (currentQuest) {
    const {
      id,
      description,
      coverImg,
      coverImgWebp,
      title,
      type,
      level,
      peopleMinMax
    } = currentQuest;

    return (
      <div className="wrapper">
        <Header activeMenuItem={AppRoute.Quest} />
        <main className="decorated-page quest-page">
          <div className="decorated-page__decor" aria-hidden="true">
            <picture>
              <source type="image/webp" srcSet={`${coverImgWebp}, /img/content/maniac/maniac-size-m@2x.webp 2x`} />
              <img src={coverImg} srcSet="/img/content/maniac/maniac-size-m@2x.jpg 2x" width="1366" height="768" alt="" />
            </picture>
          </div>
          <div className="container container--size-l">
            <div className="quest-page__content">
              <h1 className="title title--size-l title--uppercase quest-page__title">{title}</h1>
              <p className="subtitle quest-page__subtitle"><span className="visually-hidden">Жанр:</span>{type}
              </p>
              <ul className="tags tags--size-l quest-page__tags">
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
              <p className="quest-page__description">{description}</p>
              <Link className="btn btn--accent btn--cta quest-page__btn" to={`${AppRoute.Quest}/${id}/${AppRoute.Booking}`}>Забронировать</Link>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return <NotFoundPage />;
}

export default QuestPage;
