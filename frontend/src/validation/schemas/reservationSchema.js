import * as Yup from 'yup';
import { MESSAGES, PATTERNS } from '../constants';
import { getOperatingHours, getDayName } from '../helpers';

export const reservationSchema = Yup.object({
  name: Yup.string()
    .required(MESSAGES.name.required)
    .min(2, MESSAGES.name.min),

  email: Yup.string()
    .required(MESSAGES.email.required)
    .email(MESSAGES.email.invalid),

  contactNumber: Yup.string()
    .required(MESSAGES.contactNumber.required)
    .matches(PATTERNS.phone, MESSAGES.contactNumber.invalid),

  numberOfSeats: Yup.number()
    .transform((v, o) => (o === '' || o === null || o === undefined ? undefined : Number(o)))
    .required(MESSAGES.numberOfSeats.required)
    .min(1, MESSAGES.numberOfSeats.range)
    .max(20, MESSAGES.numberOfSeats.range)
    .integer(MESSAGES.numberOfSeats.integer)
    .typeError(MESSAGES.numberOfSeats.typeError),

  date: Yup.string()
    .required(MESSAGES.date.required)
    .matches(PATTERNS.date, MESSAGES.date.invalid)
    .test('not-past', MESSAGES.date.notPast, (value) => {
      if (!value) return true;
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      return new Date(value + 'T12:00:00') >= today;
    }),

  time: Yup.string()
    .required(MESSAGES.time.required)
    .matches(PATTERNS.time, MESSAGES.time.invalid),
}).test('operating-hours', function (values) {
  const { date, time } = values;
  if (!date || !time) return true;

  const d = new Date(date + 'T12:00:00');
  const day = d.getDay();
  const [hours, minutes] = time.split(':').map(Number);
  const timeInMinutes = hours * 60 + minutes;
  const { start, end, label } = getOperatingHours(day);
  const isValid = timeInMinutes >= start && timeInMinutes <= end;

  if (!isValid) {
    return this.createError({
      path: 'time',
      message: `We are open ${label} on ${getDayName(day)}. Please select a time within our hours.`,
    });
  }
  return true;
});
