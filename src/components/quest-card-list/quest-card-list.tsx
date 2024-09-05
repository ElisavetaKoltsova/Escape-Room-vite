import { Quest } from '../../types/quest';
import QuestCardItem from '../quest-card-item/quest-card-item';

type QuestCardListProps = {
  quests: Quest[];
}

function QuestCardList({quests}: QuestCardListProps): JSX.Element {
  return (
    <div className="cards-grid">
      {quests.map((quest) => (
        <QuestCardItem quest={quest} key={quest.id}/>
      ))}
    </div>
  );
}

export default QuestCardList;
