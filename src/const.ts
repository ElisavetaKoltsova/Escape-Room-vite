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
