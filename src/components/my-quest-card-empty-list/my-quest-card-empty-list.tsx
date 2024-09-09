import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';

function MyQuestCardEmptyList(): JSX.Element {
  return (
    <div>
      <h1>Вы ещё ничего не забронировали?!</h1>
      <Link to={AppRoute.Root}>Перейти к квестам</Link>
    </div>
  );
}

export default MyQuestCardEmptyList;
