export const enum ValidationMessages {
    REQUIRED = 'Поле обязательно',
    EMAIL_INVALID = 'Некорректная почта',
    PASSWORD_MISMATCH = 'Пароли не совпадают',
    PHONE_INVALID = 'Некорректный номер телефона',
    POSITIVE_NUMBER = 'Только положительные числа',
    PAST_DATE = 'Нельзя выбрать прошедшую дату',
    START_IS_AFTER_END = 'Дата начала должна быть раньше даты окончания',
    RANGE_START_IS_AFTER_END = 'Начало диапазона должно быть меньше окончания',
    SPENT_TIME_INVALID = 'Формат N (года|год|лет) N(минуту|минуты|минута|минут) от лет до минут',
    END_IS_BEFORE_START = 'Дата окончания должна быть позже даты начала',
    URL_INVALID = 'Некорректная ссылка'
  }