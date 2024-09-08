import { Level, Type } from '../const';
import { Coordinate } from './coordinate';

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

export type Slot = {
  time: string;
  isAvailable: boolean;
};

export type Slots = {
  today: Slot[];
  tomorrow: Slot[];
}

export type BookingQuest = {
  id: string;
  location: Coordinate;
  slots: Slots;
};

export type QuestClick = (quest: Quest) => void;
