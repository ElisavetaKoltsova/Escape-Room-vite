import { useEffect } from 'react';
import MyQuestCardItem from '../my-quest-card-item/my-quest-card-item';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchReservationQuests } from '../../store/api-actions';
import { getQuestsDataLoadingStatus, getReservationQuests } from '../../store/quests-data/selector';
import Loader from '../loader/loader';
import MyQuestCardEmptyList from '../my-quest-card-empty-list/my-quest-card-empty-list';

function MyQuestCardList(): JSX.Element {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchReservationQuests());
  }, [dispatch]);

  const reservationQuests = useAppSelector(getReservationQuests);
  const isQuestDataLoading = useAppSelector(getQuestsDataLoadingStatus);

  if (isQuestDataLoading) {
    return <Loader />;
  }

  return (
    <div className="cards-grid">
      {
        reservationQuests.length === 0
          ? <MyQuestCardEmptyList />
          : reservationQuests.map((quest) => <MyQuestCardItem reserveQuest={quest} key={quest.id}/>)
      }
    </div>
  );
}

export default MyQuestCardList;
