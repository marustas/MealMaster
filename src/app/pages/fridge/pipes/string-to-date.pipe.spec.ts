import { StringToDatePipe } from './string-to-date.pipe';

describe('StringToDatePipe', () => {
  let pipe: StringToDatePipe;

  beforeEach(() => {
    pipe = new StringToDatePipe();
  });

  it('should create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should convert "01/01/2020" to Date object of January 1, 2020', () => {
    const date = pipe.transform('01/01/2020');
    expect(date).toEqual(new Date(2020, 0, 1));
  });

  it('should convert "15/12/1995" to Date object of December 15, 1995', () => {
    const date = pipe.transform('15/12/1995');
    expect(date).toEqual(new Date(1995, 11, 15));
  });

  it('should handle dates with leading zeros', () => {
    const date = pipe.transform('05/04/2021');
    expect(date).toEqual(new Date(2021, 3, 5));
  });

  it('should handle leap year dates', () => {
    const date = pipe.transform('29/02/2020');
    expect(date).toEqual(new Date(2020, 1, 29));
  });
});
