export const UrlMarkers = {
  URL_MARKER_DEFAULT: '/public/img/svg/pin-default.svg',
  URL_MARKER_CURRENT: '/public/img/svg/pin-active.svg'
};

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

export const Coordinates = {
  MAIN_ADDRESS: {
    address: 'Main Address',
    coords: [
      59.968322,
      30.317359
    ]
  }
};

export enum QuestDay {
  Today = 'today',
  Tomorrow = 'tomorrow'
}

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
  Logout = '/logout',
  Booking = '/booking',
  Reservation = '/reservation'
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
