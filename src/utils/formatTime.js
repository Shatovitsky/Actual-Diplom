function formatTime(dateTime) {
  const date = new Date(dateTime);

  // Получение дня недели
  const daysOfWeek = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  const dayOfWeek = daysOfWeek[date.getDay()];

  // Получение месяца
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const month = months[date.getMonth()];

  // Получение числа месяца
  const day = date.getDate();

  // Получение времени в формате AM/PM
  const hours = date.getHours();
  const minutes = date.getMinutes();

  // Получение времени начала и окончания
  const startHours = hours % 12 || 12;
  const startMinutes = minutes < 10 ? `0${minutes}` : minutes;
  const endHours = startHours === 12 ? 1 : startHours + 1;

  // Определение AM/PM
  const ampm = hours < 12 ? 'am' : 'pm';

  // Составление строки формата
  const formattedDate = `${dayOfWeek}, ${month} ${day}`;
  const formattedStartTime = `${startHours}:${startMinutes}${ampm}`;

  return `${formattedDate}\n${formattedStartTime}`;
}
export default formatTime;
