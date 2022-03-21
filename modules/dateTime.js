export default function dateTime() {
  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December',
  ];

  const date = new Date();

  const dateString = `${monthNames[date.getMonth()]} ${date.getDate()} ${getNumberSuffix(date.getDate())} ${date.getFullYear()}, ${date.toLocaleTimeString()}`;
  return dateString;
}

function getNumberSuffix(num) {
  if (num >= 11 && num <= 20) return '<sup>th</sup>';

  const lastDigit = num.toString().slice(-1);

  switch (lastDigit) {
    case '1':
      return '<sup>st</sup>';
    case '2':
      return '<sup>nd</sup>';
    case '3':
      return '<sup>rd</sup>';
    default:
      return '<sup>th</sup>';
  }
}