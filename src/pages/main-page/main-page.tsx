import QuestCardList from '../../components/quest-card-list/quest-card-list';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import FiltersForm from '../../components/filters-form/filters-form';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getQuestsDataLoadingStatus } from '../../store/quests-data/selector';
import Loader from '../../components/loader/loader';
import { AppRoute } from '../../const';
import { useEffect } from 'react';
import { resetFilters } from '../../store/quests-data/quests-data';

function MainPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const isQuestsDataLoading = useAppSelector(getQuestsDataLoadingStatus);

  useEffect(() => {
    dispatch(resetFilters());
  }, [dispatch]);

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
              <QuestCardList />
          }
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default MainPage;
