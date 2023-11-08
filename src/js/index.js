import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.css';
flatpickr('.js-data', {
  minDate: Date.now(),
  enableTime: true,
  dateFormat: 'Y-m',
  onChange: function (selectedDates, dateStr, instance) {
    console.log(dateStr);
  },
});
