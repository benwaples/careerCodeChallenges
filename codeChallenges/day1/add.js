

const addDate = (date, diff) => {
  const addNumber = diff.split('');
  const operator = addNumber.pop();
  addNumber.join('');
  
  // add to seconds
  if(operator === 's') {
    const currentTime = date.getSeconds();
    const updatedTime = currentTime + Number(addNumber[0]);
    return date.setSeconds(updatedTime);
  }
  // add to minutes
  if(operator === 'm') {
    const currentTime = date.getMinutes();
    const updatedTime = currentTime + Number(addNumber[0]);
    return date.setMinutes(updatedTime);
  }
  // add to hours
  if(operator === 'h') {
    const currentTime = date.getHours();
    const updatedTime = currentTime + Number(addNumber[0]);
    return date.setHours(updatedTime);
  }
  
  // add to days
  if(operator === 'd') {
    const currentTime = date.getDate();
    const updatedTime = currentTime + Number(addNumber[0]);

    return date.setDate(updatedTime);
  }
  
  // add to weeks
  if(operator === 'w') {
    const currentTime = date.getDate();
    const updatedTime = currentTime + (Number(addNumber[0] * 7));

    return date.setDate(updatedTime);
  }
  
  // add to months
  if(operator === 'M') {
    const currentTime = date.getMonth();
    const updatedTime = currentTime + (Number(addNumber[0]));

    return date.setMonth(updatedTime);
  }
  
  // add to months
  if(operator === 'y') {
    const currentTime = date.getFullYear();
    const updatedTime = currentTime + (Number(addNumber[0]));
    return date.setFullYear(updatedTime);
  }
  
  return date.toISOString();
};

module.exports = addDate;
