import { Link, useParams } from 'react-router-dom';
import { BookingQuest, CurrentQuest, ReserveQuestData } from '../../types/quest';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useAppDispatch } from '../../hooks';
import { postReserveQuest } from '../../store/api-actions';
import { ErrorMassage, InputFormRule, QuestDay } from '../../const';
import { FormEvent } from 'react';
import NotFoundPage from '../../pages/not-found-page/not-found-page';

type BookingFormProps = {
  currentQuest: CurrentQuest;
  selectedBookingQuest: BookingQuest;
}

function BookingForm({currentQuest, selectedBookingQuest}: BookingFormProps): JSX.Element {
  const dispatch = useAppDispatch();
  const { id: currentId } = useParams();

  const { slots } = selectedBookingQuest;
  const { today, tomorrow } = slots;

  const { register, setValue, handleSubmit, formState: {errors} } = useForm<ReserveQuestData>();

  const onSubmit: SubmitHandler<ReserveQuestData> = (data) => {
    dispatch(postReserveQuest(data));
  };

  const handleDateChange = (evt: FormEvent<HTMLInputElement>) => {
    const type = evt.currentTarget.id;
    const date = type.includes('today') ? QuestDay.Today : QuestDay.Tomorrow;
    const time = type.replace(date, '');

    setValue('time', time);
  };

  const handleWithChildrenStatusChange = (evt: FormEvent<HTMLInputElement>) => {
    const isChecked = evt.currentTarget.checked;

    setValue('withChildren', isChecked);
  };

  const handlePeopleCountInput = (evt: FormEvent<HTMLInputElement>) => {
    const value = evt.currentTarget.value;

    setValue('peopleCount', Number(value));
  };

  const checkPeopleCountInput = (value: number) => {
    if (value >= currentQuest.peopleMinMax[0] && value <= currentQuest.peopleMinMax[1]) {
      return true;
    }

    return `Количество участников должно быть от ${currentQuest.peopleMinMax[0]} до ${currentQuest.peopleMinMax[1]}`;
  };


  if (currentId) {
    register('placeId');
    setValue('placeId', selectedBookingQuest.id);
    register('currentId');
    setValue('currentId', currentId);
    register('withChildren');
    setValue('withChildren', false);

    return (
      <form
        className="booking-form"
        // eslint-disable-next-line @typescript-eslint/no-misused-promises
        onSubmit={handleSubmit(onSubmit)}
      >
        <fieldset className="booking-form__section">
          <legend className="visually-hidden">Выбор даты и времени</legend>
          <fieldset className="booking-form__date-section">
            <input {...register('time')} type="hidden" />
            <input {...register('placeId')} type="hidden" />
            <input {...register('withChildren')} type="hidden" />
            <legend className="booking-form__date-title">Сегодня</legend>
            <div className="booking-form__date-inner-wrapper">
              {today.map(({time, isAvailable}) => (
                <label className="custom-radio booking-form__date" key={time}>
                  <input type="radio" id={`today${time}`}
                    required value='today'
                    disabled={!isAvailable}
                    {...register('date')}
                    onChange={handleDateChange}
                  />
                  <span className="custom-radio__label">{time}</span>
                </label>
              ))}
            </div>
          </fieldset>
          <fieldset className="booking-form__date-section">
            <legend className="booking-form__date-title">Завтра</legend>
            <div className="booking-form__date-inner-wrapper">
              {tomorrow.map(({time, isAvailable}) => (
                <label className="custom-radio booking-form__date" key={time}>
                  <input type="radio" id={`tomorrow${time}`}
                    required value='tomorrow'
                    disabled={!isAvailable}
                    {...register('date')}
                    onChange={handleDateChange}
                  />
                  <span className="custom-radio__label">{time}</span>
                </label>
              ))}
            </div>
          </fieldset>
        </fieldset>
        <fieldset className="booking-form__section">
          <legend className="visually-hidden">Контактная информация</legend>
          <div className="custom-input booking-form__input">
            <label className="custom-input__label" htmlFor="name">Ваше имя</label>
            <input
              type="text"
              id="name"
              placeholder="Имя"
              required pattern="[А-Яа-яЁёA-Za-z'- ]{1,}"
              {...register('contactPerson', {
                required: {value: true, message: ErrorMassage.REQUIRED},
                minLength: {value: InputFormRule.MIN_NAME_LENGTH, message: ErrorMassage.NAME_LENGTH},
                maxLength: {value: InputFormRule.MAX_NAME_LENGTH, message: ErrorMassage.NAME_LENGTH}
              })}
            />
          </div>
          <div className="custom-input booking-form__input">
            <label className="custom-input__label" htmlFor="tel">Контактный телефон</label>
            <input
              type="tel"
              id="tel"
              placeholder="Телефон"
              required pattern="([\+]*[7-8]{1}\s?[\(]*9[0-9]{2}[\)]*\s?\d{3}[-]*\d{2}[-]*\d{2})"
              {...register('phone')}
            />
          </div>
          <div className="custom-input booking-form__input">
            <label className="custom-input__label" htmlFor="person">Количество участников</label>
            <input
              type="number"
              id="person"
              placeholder="Количество участников"
              required
              onInput={handlePeopleCountInput}
              {...register('peopleCount', {
                required: { value: true, message: ErrorMassage.REQUIRED },
                valueAsNumber: true,
                validate: checkPeopleCountInput
              })}
            />
            {errors.peopleCount && <p>{errors.peopleCount.message}</p>}
          </div>
          <label className="custom-checkbox booking-form__checkbox booking-form__checkbox--children">
            <input type="checkbox" id="children" name="children" onChange={handleWithChildrenStatusChange}/>
            <span className="custom-checkbox__icon">
              <svg width="20" height="17" aria-hidden="true">
                <use xlinkHref="#icon-tick"></use>
              </svg>
            </span><span className="custom-checkbox__label">Со&nbsp;мной будут дети</span>
          </label>
        </fieldset>
        <button className="btn btn--accent btn--cta booking-form__submit" type="submit">Забронировать</button>
        <label className="custom-checkbox booking-form__checkbox booking-form__checkbox--agreement">
          <input type="checkbox" id="id-order-agreement" name="user-agreement" required />
          <span className="custom-checkbox__icon">
            <svg width="20" height="17" aria-hidden="true">
              <use xlinkHref="#icon-tick"></use>
            </svg>
          </span>
          <span className="custom-checkbox__label">Я&nbsp;согласен с
            <Link className="link link--active-silver link--underlined" to="#">правилами обработки персональных данных</Link>&nbsp;и пользовательским соглашением
          </span>
        </label>
      </form>
    );
  }

  return <NotFoundPage />;

}

export default BookingForm;
