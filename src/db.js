const db = {
  getLastName: firstName => new Promise((resolve, reject) => {
    const users = [
      {
        firstName: 'Saurav',
        lastName: 'Sahu',
      },
      {
        firstName: 'Souradeep',
        lastName: 'Nanda',
      },
      {
        firstName: 'Nidhi',
        lastName: 'Jagadeesha',
      },
      {
        firstName: 'Shubham',
        lastName: 'Mathur',
      },
      {
        firstName: 'Kshipra',
        lastName: 'Shetty',
      },
      {
        firstName: 'Sagar',
        lastName: 'Gugwad',
      },
    ];

    const invalidError = 'Invalid first name.';

    if (typeof firstName !== 'string') reject(invalidError);

    const firstNameLower = firstName.toLowerCase();
    const userIndex = users.findIndex(user =>
      user.firstName.toLowerCase() === firstNameLower);

    if (userIndex === -1) {
      reject(invalidError);
      return;
    }

    resolve(users[userIndex].lastName);
  }),
};

module.exports = db;
