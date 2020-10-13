

const addDate = (date, diff) => {
  const addNumber = diff.split('');
  const operator = addNumber.pop();
  addNumber.join('');
  
  // add to seconds
  if(operator === 's') {
    const currentSecond = date.getSeconds();
    const updatedSecond = currentSecond + Number(addNumber[0]);
    return date.setSeconds(updatedSecond);
  }
  // add to minutes
  if(operator === 'm') {
    const currentSecond = date.getMinutes();
    const updatedSecond = currentSecond + Number(addNumber[0]);
    return date.setMinutes(updatedSecond);
  }
  // add to hours
  if(operator === 'h') {
    const currentSecond = date.getHours();
    const updatedSecond = currentSecond + Number(addNumber[0]);
    return date.setHours(updatedSecond);
  }
  
  // add to days
  if(operator === 'd') {
    const currentDay = date.getDate();
    const updatedDay = currentDay + Number(addNumber[0]);

    return date.setDate(updatedDay);
  }
  
  // add to weeks
  if(operator === 'w') {
    const currentDay = date.getDate();
    const updateWeek = currentDay + (Number(addNumber[0] * 7));

    return date.setDate(updateWeek);
  }
  
  // add to days
  if(operator === 'M') {
    const currentMonth = date.getMonth();
    const updateMonth = currentMonth + (Number(addNumber[0]));

    return date.setMonth(updateMonth);
  }
  return date.toISOString();
};

module.exports = addDate;
