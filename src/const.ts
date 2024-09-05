export const Filters = {
  THEMES: {
    'all-quests': 'Все квесты',
    'adventure': 'Приключения',
    'horror': 'Ужасы',
    'mystic': 'Мистика',
    'detective': 'Детектив',
    'sci-fi': 'Sci-fi'
  },
  LEVELS: {
    'any': 'Любой',
    'easy': 'Лёгкий',
    'middle': 'Средний',
    'hard': 'Сложный'
  }
};

export enum AppRoute {
  Root = '/',
  Quest = '/quest',
  QuestId = ':id',
  Booking = 'booking',
  Login = '/login',
  MyQuests = '/my-quests',
  Contacts = '/contacts'
}

export enum APIRoute {
  Quests = '/quest',
  Login = '/login',
  Logout = '/logout'
}

export enum NameSpace {
  Quests = 'QUESTS',
  User = 'USER'
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN'
}

export enum Level {
  Easy = 'easy',
  Medium = 'medium',
  Hard = 'hard'
}

export enum Type {
  Adventure = 'adventure',
  Horror = 'horror',
  Mystic = 'mystic',
  Detective = 'detective',
  SciFi = 'sci-fi'
}
