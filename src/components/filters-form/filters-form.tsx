import { useEffect } from 'react';
import { Filter, Level, Type } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { changeQuestLevelFilter, changeQuestThemeFilter, resetFilters } from '../../store/quests-data/quests-data';
import { getCurrentLevelFilter, getCurrentThemeFilter } from '../../store/quests-data/selector';

function FiltersForm(): JSX.Element {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(resetFilters());
  }, [dispatch]);

  const currentThemeFilter = useAppSelector(getCurrentThemeFilter);
  const currentLevelFilter = useAppSelector(getCurrentLevelFilter);

  const handleFilterThemeInputChange = (theme: Type) => {
    dispatch(changeQuestThemeFilter(theme));
  };

  const handleFilterLevelInputChange = (level: Level) => {
    dispatch(changeQuestLevelFilter(level));
  };

  return (
    <form className="filter" action="#" method="get">
      <fieldset className="filter__section">
        <legend className="visually-hidden">Тематика</legend>
        <ul className="filter__list">
          {Object.entries(Filter.THEMES).map((theme) => (
            <li className="filter__item" key={theme[0] + theme[1]}>
              <input
                type="radio"
                name="type"
                id={theme[0]}
                checked={currentThemeFilter === theme[0]}
                onChange={() => handleFilterThemeInputChange(theme[0] as Type)}
              />
              <label className="filter__label" htmlFor={theme[0]}>
                <svg className="filter__icon" width="26" height="30" aria-hidden="true">
                  <use xlinkHref={`#icon-${theme[0]}`}></use>
                </svg><span className="filter__label-text">{theme[1]}</span>
              </label>
            </li>
          ))}
        </ul>
      </fieldset>
      <fieldset className="filter__section">
        <legend className="visually-hidden">Сложность</legend>
        <ul className="filter__list">
          {Object.entries(Filter.LEVELS).map((level) => (
            <li className="filter__item" key={level[0] + level[1]}>
              <input
                type="radio"
                name="level"
                id={level[0]}
                checked={currentLevelFilter === level[0]}
                onChange={() => handleFilterLevelInputChange(level[0] as Level)}
              />
              <label className="filter__label" htmlFor={level[0]}><span className="filter__label-text">{level[1]}</span>
              </label>
            </li>
          ))}
        </ul>
      </fieldset>
    </form>
  );
}

export default FiltersForm;
