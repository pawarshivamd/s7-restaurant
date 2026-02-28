import html2pdf from 'html2pdf.js';

const formatTime = (timeStr) => {
  if (!timeStr) return '--:--';
  const [hours, minutes] = timeStr.split(':').map(Number);
  const period = hours >= 12 ? 'PM' : 'AM';
  const h = hours % 12 || 12;
  return `${h}:${minutes.toString().padStart(2, '0')} ${period}`;
};

const formatDate = (dateValue) => {
  if (dateValue === null || dateValue === undefined || dateValue === '') return '--';
  let date;
  if (dateValue instanceof Date) {
    date = dateValue;
  } else if (typeof dateValue === 'string') {
    date = /^\d{4}-\d{2}-\d{2}$/.test(dateValue)
      ? new Date(dateValue + 'T12:00:00')
      : new Date(dateValue);
  } else {
    date = new Date(dateValue);
  }
  if (isNaN(date.getTime())) return '--';
  return date.toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
};

export const generateReservationPDF = async (reservation) => {
  const bookingId = reservation.id || '#RES----';
  const guestName = reservation.name || '--';
  const dateFormatted = formatDate(reservation.date);
  const timeFormatted = formatTime(reservation.time);
  const guests = reservation.numberOfSeats || '--';

  const element = document.createElement('div');
  element.innerHTML = `
    <div style="
      width: 210mm; ; padding: 40mm 30mm; box-sizing: border-box;
      background: #FFFFFF; font-family: Georgia, serif; color: #333333;
    ">
      <div style="text-align: center; margin-bottom: 50px;">
        <div style="font-size: 36px; letter-spacing: 8px; font-weight: bold; color: #111111;">s7</div>
        <div style="font-size: 28px; margin-top: 15px; color: #B58D66;">Reservation Confirmation</div>
      </div>
      <div style="height: 1px; background: #EAEAEA; margin: 40px 0;"></div>
      <div style="display: flex; flex-direction: column; gap: 30px;">
        <div style="display: flex; justify-content: space-between; font-size: 20px; padding-bottom: 15px; border-bottom: 1px solid #EAEAEA;">
          <span style="color: #666666;">Booking ID</span><span style="font-weight: bold; color: #111111;">${bookingId}</span>
        </div>
        <div style="display: flex; justify-content: space-between; font-size: 20px; padding-bottom: 15px; border-bottom: 1px solid #EAEAEA;">
          <span style="color: #666666;">Guest Name</span><span style="font-weight: bold; color: #111111;">${guestName}</span>
        </div>
        <div style="display: flex; justify-content: space-between; font-size: 20px; padding-bottom: 15px; border-bottom: 1px solid #EAEAEA;">
          <span style="color: #666666;">Date</span><span style="font-weight: bold; color: #111111;">${dateFormatted}</span>
        </div>
        <div style="display: flex; justify-content: space-between; font-size: 20px; padding-bottom: 15px; border-bottom: 1px solid #EAEAEA;">
          <span style="color: #666666;">Time</span><span style="font-weight: bold; color: #111111;">${timeFormatted}</span>
        </div>
        <div style="display: flex; justify-content: space-between; font-size: 20px; padding-bottom: 15px; border-bottom: 1px solid #EAEAEA;">
          <span style="color: #666666;">Guests</span><span style="font-weight: bold; color: #111111;">${guests}</span>
        </div>
      </div>
      <div style="margin-top: 60px; padding: 25px; background: #F8F8F8; border: 1px solid #EAEAEA; border-radius: 8px; text-align: center; font-size: 18px; color: #333333;">
        Please arrive 10 minutes before your reserved time.
      </div>
      <div style="margin-top: 50px; text-align: center; font-size: 14px; color: #777777;">
        S7 Restaurant<br>Open: 9:00 AM – 10:00 PM<br>Contact: +91 877262627
      </div>
    </div>
  `;
  element.style.position = 'absolute';
  element.style.left = '-9999px';
  element.style.top = 0;

  document.body.appendChild(element);

  try {
    await html2pdf()
      .set({
        margin: 0,
        filename: `reservation-${guestName.replace(/\s/g, '-')}-${reservation.date}.pdf`,
        image: { type: 'jpeg', quality: 1 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
      })
      .from(element.firstElementChild)
      .save();
  } finally {
    document.body.removeChild(element);
  }
};
