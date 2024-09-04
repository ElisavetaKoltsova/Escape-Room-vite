import { HelmetProvider } from 'react-helmet-async';
import MainPage from '../../pages/main-page/main-page';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppRoute } from '../../const';
import QuestPage from '../../pages/quest-page/quest-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';

function App(): JSX.Element {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path={AppRoute.Root}
            element={
              <MainPage />
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
              />
            </Route>
          </Route>
          <Route
            path='*'
            element={
              <NotFoundPage />
            }
          />
        </Routes>
      </BrowserRouter>

    </HelmetProvider>
  );
}

export default App;
