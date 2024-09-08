import { useParams } from 'react-router-dom';
import Footer from '../../components/footer/footer';
import { AppRoute } from '../../const';
import Header from '../../components/header/header';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchBookingQuestAction, fetchCurrentQuestAction } from '../../store/api-actions';
import { getBookingQuest, getCurrentQuest, getQuestsDataLoadingStatus, getSelectedBookingQuest } from '../../store/quests-data/selector';
import Loader from '../../components/loader/loader';
import NotFoundPage from '../not-found-page/not-found-page';
import Map from '../../components/map/map';
import BookingForm from '../../components/booking-form/booking-form';
import { setSelectedQuest } from '../../store/quests-data/quests-data';

function BookingPage(): JSX.Element {
  const {id: currentId} = useParams();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (currentId) {
      dispatch(fetchCurrentQuestAction(currentId));
      dispatch(fetchBookingQuestAction(currentId));
    }
  }, [currentId, dispatch]);

  const bookingQuests = useAppSelector(getBookingQuest);
  const currentQuest = useAppSelector(getCurrentQuest);
  const isQuestDataLoading = useAppSelector(getQuestsDataLoadingStatus);

  useEffect(() => {
    dispatch(setSelectedQuest(bookingQuests[0]));
  }, [bookingQuests, dispatch]);

  const selectedBookingQuest = useAppSelector(getSelectedBookingQuest);

  if (isQuestDataLoading) {
    return <Loader />;
  }

  if (bookingQuests.length !== 0 && currentQuest && selectedBookingQuest) {
    const {
      location,
      slots
    } = selectedBookingQuest;

    return (
      <div className="wrapper">
        <Header activeMenuItem={AppRoute.Quest} />
        <main className="page-content decorated-page">
          <div className="decorated-page__decor" aria-hidden="true">
            <picture>
              <source type="image/webp" srcSet="/img/content/maniac/maniac-bg-size-m.webp, /img/content/maniac/maniac-bg-size-m@2x.webp 2x" />
              <img src="/img/content/maniac/maniac-bg-size-m.jpg" srcSet="/img/content/maniac/maniac-bg-size-m@2x.jpg 2x" width="1366" height="1959" alt="" />
            </picture>
          </div>
          <div className="container container--size-s">
            <div className="page-content__title-wrapper">
              <h1 className="subtitle subtitle--size-l page-content__subtitle">Бронирование квеста
              </h1>
              <p className="title title--size-m title--uppercase page-content__title">{currentQuest.title}</p>
            </div>
            <div className="page-content__item">
              <div className="booking-map">
                <div className="map">
                  <div className="map__container">
                    <Map coordinate={location} places={bookingQuests} selectedPlace={selectedBookingQuest}/>
                  </div>
                </div>
                <p className="booking-map__address">Вы&nbsp;выбрали: {location.address}</p>
              </div>
            </div>
            <BookingForm slots={slots}/>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return <NotFoundPage />;
}

export default BookingPage;
