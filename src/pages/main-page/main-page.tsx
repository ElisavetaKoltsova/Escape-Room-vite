import QuestCardList from '../../components/quest-card-list/quest-card-list';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import FiltersForm from '../../components/filters-form/filters-form';
import { useAppSelector } from '../../hooks';
import { getQuests, getQuestsDataLoadingStatus } from '../../store/quests-data/selector';
import { getAuthorizationStatus } from '../../store/user-process/selectors';
import Loader from '../../components/loader/loader';
import { QuestClick } from '../../types/quest';

type MainPageProps = {
  onQuestClick: QuestClick;
}

function MainPage({onQuestClick}: MainPageProps): JSX.Element {
  const quests = useAppSelector(getQuests);
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const isQuestsDataLoading = useAppSelector(getQuestsDataLoadingStatus);

  return (
    <div className="wrapper">
      <Header />
      <main className="page-content">
        <div className="container">
          <div className="page-content__title-wrapper">
            <h1 className="subtitle page-content__subtitle">квесты в Санкт-Петербурге
            </h1>
            <h2 className="title title--size-m page-content__title">Выберите тематику</h2>
          </div>
          <div className="page-content__item">
            <FiltersForm />
          </div>
          <h2 className="title visually-hidden">Выберите квест</h2>
          {
            isQuestsDataLoading
              ? <Loader />
              :
              <QuestCardList
                quests={quests}
                // onQuestClick={onQuestClick}
              />
          }
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default MainPage;
