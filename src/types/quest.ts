import { Level, Type } from '../const';

export type Quest = {
  id: string;
  title: string;
  previewImg: string;
  previewImgWebp: string;
  level: Level;
  type: Type;
  peopleMinMax: [
    number,
    number
  ];
};

export type CurrentQuest = Quest & {
  description: string;
  coverImg: string;
  coverImgWebp: string;
};

export type QuestClick = (quest: Quest) => void;
