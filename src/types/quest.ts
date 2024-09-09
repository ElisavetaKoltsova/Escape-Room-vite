import { Level, QuestDay, Type } from '../const';
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

export type ReserveQuestPlace = {
  currentId: string;
  placeId: string;
}

export type ReserveQuestData = ReserveQuestPlace & {
  date: QuestDay;
  time: string;
  contactPerson: string;
  phone: string;
  withChildren: boolean;
  peopleCount: number;
  id?: string;
}

export type ReserveQuest = ReserveQuestData & {
  location: Coordinate;
  quest: Quest;
}

export type QuestClick = (quest: Quest) => void;
