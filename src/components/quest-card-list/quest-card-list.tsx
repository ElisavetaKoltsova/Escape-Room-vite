import { quests } from '../../mock/quest';
import QuestCardItem from '../quest-card-item/quest-card-item';

function QuestCardList(): JSX.Element {
  return (
    <div className="cards-grid">
      {quests.map((quest) => (
        <QuestCardItem quest={quest} key={quest.id}/>
      ))}
    </div>
  );
}

export default QuestCardList;
