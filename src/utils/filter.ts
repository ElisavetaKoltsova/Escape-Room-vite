import { Level, Type } from '../const';
import { Quest } from '../types/quest';

export const filterTheme = {
  [Type.All]: (quests: Quest[]) => quests,
  [Type.Adventure]: (quests: Quest[]) => quests.filter((quest: Quest) => quest.type === Type.Adventure),
  [Type.Detective]: (quests: Quest[]) => quests.filter((quest: Quest) => quest.type === Type.Detective),
  [Type.Horror]: (quests: Quest[]) => quests.filter((quest: Quest) => quest.type === Type.Horror),
  [Type.Mystic]: (quests: Quest[]) => quests.filter((quest: Quest) => quest.type === Type.Mystic),
  [Type.SciFi]: (quests: Quest[]) => quests.filter((quest: Quest) => quest.type === Type.SciFi),
};

export const filterLevel = {
  [Level.Any]: (quests: Quest[]) => quests,
  [Level.Easy]: (quests: Quest[]) => quests.filter((quest: Quest) => quest.level === Level.Easy),
  [Level.Medium]: (quests: Quest[]) => quests.filter((quest: Quest) => quest.level === Level.Medium),
  [Level.Hard]: (quests: Quest[]) => quests.filter((quest: Quest) => quest.level === Level.Hard),
};
