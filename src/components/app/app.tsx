import { HelmetProvider } from 'react-helmet-async';
import MainPage from '../../pages/main-page/main-page';
import { Route, Routes } from 'react-router-dom';
import { AppRoute } from '../../const';
import QuestPage from '../../pages/quest-page/quest-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import ContactsPage from '../../pages/contacts-page/contacts-page';
import MyQuestPage from '../../pages/my-quests-page/my-quests-page';
import LoginPage from '../../pages/login-page/login-page';
import BookingPage from '../../pages/booking-page/booking-page';
import { Quest } from '../../types/quest';
import { useAppSelector } from '../../hooks';
import { getAuthorizationStatus } from '../../store/user-process/selectors';
import { useState } from 'react';

function App(): JSX.Element {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  const [currentQuest, setCurrentQuest] = useState<Quest>({} as Quest);

  const handleQuestClick = (quest: Quest) => {
    setCurrentQuest({
      ...currentQuest,
      id: quest.id
    });
  };

  return (
    <HelmetProvider>
      <Routes>
        <Route
          path={AppRoute.Root}
          element={
            <MainPage
              onQuestClick={handleQuestClick}
            />
          }
        />
        <Route
          path={AppRoute.Login}
          element={
            <LoginPage />
          }
        />
        <Route
          path={AppRoute.Quest}
        >
          <Route
            path={AppRoute.QuestId}
            element={
              <QuestPage />
            }
          >
            <Route
              path={AppRoute.Booking}
              element={
                <BookingPage />
              }
            />
          </Route>
        </Route>
        <Route
          path={AppRoute.MyQuests}
          element={
            <MyQuestPage />
          }
        />
        <Route
          path={AppRoute.Contacts}
          element={
            <ContactsPage />
          }
        />
        <Route
          path='*'
          element={
            <NotFoundPage />
          }
        />
      </Routes>
    </HelmetProvider>
  );
}

export default App;
