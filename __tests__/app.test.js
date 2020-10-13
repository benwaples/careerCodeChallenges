const add = require('../codeChallenges/add');


describe('codeChallenge tests', () => {
  it('should take a date and a "1s" and return a new date with the 1 second', () => {
    const date = new Date('July 20, 69 00:20:18');
    const expectedDate = new Date('July 20, 69 00:20:19');
    
    const addOneSecond = '1s';
    const result = add(date, addOneSecond);

    expect(result).toEqual(expectedDate.valueOf());
  });

  it('should take a date and a "1m" and return a new date with the 1 minute', () => {
    const date = new Date('July 20, 69 00:20:18');
    const expectedDate = new Date('July 20, 69 00:21:18');
    
    const addOneMinute = '1m';
    const result = add(date, addOneMinute);
    expect(result).toEqual(expectedDate.valueOf());
  });
  
  it('should take a date and a "1h" and return a new date with the 1 hour', () => {
    const date = new Date('July 20, 69 00:20:18');
    const expectedDate = new Date('July 20, 69 01:20:18');
    
    const addOneHour = '1h';
    const result = add(date, addOneHour);
    expect(result).toEqual(expectedDate.valueOf());
  });
  
  it('should take a date and a "1d" and return a new date with the 1 day', () => {
    const date = new Date('July 20, 69 00:20:18');
    const expectedDate = new Date('July 21, 69 00:20:18');
    
    const addOneDay = '1d';
    const result = add(date, addOneDay);
    expect(result).toEqual(expectedDate.valueOf());
  });
  
  it('should take a date and a "1w" and return a new date with the 1 week', () => {
    const date = new Date('July 20, 69 00:20:18');
    const expectedDate = new Date('July 27, 69 00:20:18');
    
    const addOneWeek = '1w';
    const result = add(date, addOneWeek);
    expect(result).toEqual(expectedDate.valueOf());
  });
  
  it('should take a date and a "1m" and return a new date with the 1 month', () => {
    const date = new Date('July 20, 69 00:20:18');
    const expectedDate = new Date('August 20, 69 00:20:18');
    
    const addOneMonth = '1M';
    const result = add(date, addOneMonth);
    expect(result).toEqual(expectedDate.valueOf());
  });
  
  it('should take a date and a "1y" and return a new date with the 1 year', () => {
    const date = new Date('July 20, 69 00:20:18');
    const expectedDate = new Date('July 20, 70 00:20:18');
    
    const addOneYear = '1y';
    const result = add(date, addOneYear);
    expect(result).toEqual(expectedDate.valueOf());
  });
});
