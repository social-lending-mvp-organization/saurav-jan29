const db = require('../src/db');

describe('db.getLastName', () => {
  describe('should return last name', () => {
    test('when first name is part of the group', (done) => {
      db.getLastName('Saurav').then((lastName) => {
        expect(lastName).toEqual('Sahu');
        done();
      });
    });
    test('when first name passed is in mixed case', (done) => {
      db.getLastName('ShUBham').then((lastName) => {
        expect(lastName).toEqual('Mathur');
        done();
      });
    });
  });
});
describe('should return an error', () => {
  test('when first name passed is not part of the group', (done) => {
    db.getLastName('Michael')
      .catch((reason) => {
        expect(reason).toBe('Invalid first name.');
        done();
      });
  });
});

