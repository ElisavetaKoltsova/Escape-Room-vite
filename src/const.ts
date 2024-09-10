
export const InputFormRule = {
  MAX_PASSWORD_LENGTH: 15,
  MIN_PASSWORD_LENGTH: 3,
  MAX_NAME_LENGTH: 15,
  MIN_NAME_LENGTH: 1
};

export const ErrorMassage = {
  PASSWORD_LENGTH: 'Длина пароля может быть от 3ёх до 15ти символов',
  NAME_LENGTH: 'Длина имени должна быть от 1ого до 15ти символов ',
  REQUIRED: 'Поле обязательное'
};

export const UrlMarkers = {
  URL_MARKER_DEFAULT: '/public/img/svg/pin-default.svg',
  URL_MARKER_CURRENT: '/public/img/svg/pin-active.svg'
};

export const Filter = {
  THEMES: {
    'all': 'Все квесты',
    'adventure': 'Приключения',
    'horror': 'Ужасы',
    'mystic': 'Мистика',
    'detective': 'Детектив',
    'sci-fi': 'Sci-fi'
  },
  LEVELS: {
    'any': 'Любой',
    'easy': 'Лёгкий',
    'medium': 'Средний',
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
  Any = 'any',
  Easy = 'easy',
  Medium = 'medium',
  Hard = 'hard'
}

export enum Type {
  All = 'all',
  Adventure = 'adventure',
  Horror = 'horror',
  Mystic = 'mystic',
  Detective = 'detective',
  SciFi = 'sci-fi'
}
