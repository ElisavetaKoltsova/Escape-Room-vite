import { Level, Type } from '../../const';
import { useAppSelector } from '../../hooks';
import { getQuests, getFilteredQuests, getCurrentThemeFilter, getCurrentLevelFilter } from '../../store/quests-data/selector';
import { Quest } from '../../types/quest';
import QuestCardItem from '../quest-card-item/quest-card-item';

function QuestCardList(): JSX.Element {
  const quests = useAppSelector(getQuests);

  const filteredQuests = useAppSelector(getFilteredQuests);
  const currentThemeFilter = useAppSelector(getCurrentThemeFilter);
  const currentLevelFilter = useAppSelector(getCurrentLevelFilter);

  let usedQuests: Quest[] = [...quests];

  if (currentLevelFilter !== Level.Any || currentThemeFilter !== Type.All) {
    usedQuests = [...filteredQuests];
  }

  if (usedQuests.length !== 0) {
    return (
      <div className="cards-grid">
        {usedQuests.map((quest) => (
          <QuestCardItem quest={quest} key={quest.id}/>
        ))}
      </div>
    );
  }

  return (
    <div className="cards-grid">
      <h1>Таких квестов нет</h1>
    </div>
  );
}

export default QuestCardList;
