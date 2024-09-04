import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';

function NotFoundPage(): JSX.Element {
  return (
    <>
      <h1>Not found page (404)</h1>
      <Link to={AppRoute.Root}>Go back</Link>
    </>
  );
}

export default NotFoundPage;
