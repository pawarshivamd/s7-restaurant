const STORAGE_KEY = 's7_reservations';

const generateBookingId = () => {
  return '#RES' + Math.random().toString(36).substr(2, 6).toUpperCase();
};

const toDateString = (val) => {
  if (!val) return val;
  if (val instanceof Date) return val.toISOString().split('T')[0];
  if (typeof val === 'string' && val.length >= 10) return val.slice(0, 10);
  return val;
};

export const saveReservation = (reservationData) => {
  const bookingId = generateBookingId();
  const reservation = {
    id: bookingId,
    ...reservationData,
    date: toDateString(reservationData.date),
    createdAt: new Date().toISOString(),
  };
  const existing = getReservations();
  const updated = [reservation, ...existing];
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  return reservation;
};

export const getReservations = () => {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
};

export const getReservationById = (id) => {
  return getReservations().find((r) => r.id === id);
};
