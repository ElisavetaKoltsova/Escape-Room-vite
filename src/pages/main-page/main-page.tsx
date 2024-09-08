import QuestCardList from '../../components/quest-card-list/quest-card-list';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import FiltersForm from '../../components/filters-form/filters-form';
import { useAppSelector } from '../../hooks';
import { getQuests, getQuestsDataLoadingStatus } from '../../store/quests-data/selector';
import Loader from '../../components/loader/loader';
import { AppRoute } from '../../const';

function MainPage(): JSX.Element {
  const quests = useAppSelector(getQuests);
  const isQuestsDataLoading = useAppSelector(getQuestsDataLoadingStatus);

  return (
    <div className="wrapper">
      <Header activeMenuItem={AppRoute.Root}/>
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
              />
          }
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default MainPage;
