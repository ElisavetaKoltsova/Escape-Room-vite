import { Filters } from '../../const';

function FiltersForm(): JSX.Element {
  return (
    <form className="filter" action="#" method="get">
      <fieldset className="filter__section">
        <legend className="visually-hidden">Тематика</legend>
        <ul className="filter__list">
          {Object.entries(Filters.THEMES).map((theme) => (
            <li className="filter__item" key={theme[0] + theme[1]}>
              <input type="radio" name="type" id={theme[0]} defaultChecked />
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
          {Object.entries(Filters.LEVELS).map((level) => (
            <li className="filter__item" key={level[0] + level[1]}>
              <input type="radio" name="level" id={level[0]} defaultChecked />
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
