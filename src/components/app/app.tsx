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
import { useAppSelector } from '../../hooks';
import { getAuthorizationStatus } from '../../store/user-process/selectors';
import PrivateRoute from '../private-route/private-route';
import PublicRoute from '../public-route/public-route';

function App(): JSX.Element {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  return (
    <HelmetProvider>
      <Routes>
        <Route
          path={AppRoute.Root}
          element={
            <MainPage />
          }
        />
        <Route
          path={AppRoute.Login}
          element={
            <PublicRoute authorizationStatus={authorizationStatus}>
              <LoginPage />
            </PublicRoute>
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
          />
          <Route
            path={`${AppRoute.QuestId}/${AppRoute.Booking}`}
            element={
              <PrivateRoute authorizationStatus={authorizationStatus}>
                <BookingPage />
              </PrivateRoute>
            }
          />
        </Route>
        <Route
          path={AppRoute.MyQuests}
          element={
            <PrivateRoute
              authorizationStatus={authorizationStatus}
            >
              <MyQuestPage />
            </PrivateRoute>
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
