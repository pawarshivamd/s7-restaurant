// Validation messages
export const MESSAGES = {
  name: {
    required: 'Name is required',
    min: 'Name must be at least 2 characters',
  },
  email: {
    required: 'Email is required',
    invalid: 'Invalid email address',
  },
  contactNumber: {
    required: 'Contact number is required',
    invalid: 'Invalid phone number',
  },
  numberOfSeats: {
    required: 'Number of seats is required',
    range: 'Min 1, max 20 seats',
    integer: 'Enter whole number only (1-20)',
    typeError: 'Please enter a valid number between 1 and 20',
  },
  date: {
    required: 'Date is required',
    invalid: 'Please select a valid date',
    notPast: 'Please select today or a future date',
  },
  time: {
    required: 'Time is required',
    invalid: 'Invalid time format (HH:MM)',
  },
};

// Regex patterns
export const PATTERNS = {
  date: /^\d{4}-\d{2}-\d{2}$/,
  time: /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/,
  phone: /^[+]?[\d\s-]{10,15}$/,
};

// Restaurant operating hours (minutes from midnight)
// Mon-Fri: 12:00 PM - 10:00 PM | Sat-Sun: 9:00 AM - 12:00 PM
export const OPERATING_HOURS = {
  weekdays: {
    start: 12 * 60, // 12:00 PM
    end: 22 * 60,   // 10:00 PM
    label: '12:00 PM - 10:00 PM',
  },
  weekend: {
    start: 9 * 60,  // 9:00 AM
    end: 12 * 60,   // 12:00 PM
    label: '9:00 AM - 12:00 PM',
  },
};
