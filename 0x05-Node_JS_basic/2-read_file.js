const fs = require('fs');

const countStudents = (path) => {
  try {
    const data = fs.readFileSync(path, 'utf8');
    const lines = data.split('\n').filter((line) => line.trim() !== '');
    const header = lines.shift().split(',');
    const students = {};

    lines.forEach((line) => {
      const fields = line.split(',');
      const field = fields[header.indexOf('field')];
      students[field] = (students[field] || []);
      students[field].push(fields[header.indexOf('firstname')]);
    });

    console.log(`Number of students: ${lines.length}`);

    for (const field in students) {
      if (Object.prototype.hasOwnProperty.call(students, field)) {
        console.log(`Number of students in ${field}: ${students[field].length}. List: ${students[field].join(', ')}`);
      }
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
};

module.exports = countStudents;
