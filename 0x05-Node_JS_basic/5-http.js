const http = require('http');
const fs = require('fs');

const countStudents = (path) => new Promise((res, rej) => {
  fs.readFile(path, 'utf-8', (err, data) => {
    if (err) {
      rej(new Error('Cannot load the database'));
    } else {
      const lines = data.split('\n').filter((line) => line.trim() !== '');
      const header = lines.shift().split(',');
      const students = {};

      lines.forEach((line) => {
        const fields = line.split(',');
        const field = fields[header.indexOf('field')];
        students[field] = (students[field] || []);
        students[field].push(fields[header.indexOf('firstname')]);
      });
      res(students);
    }
  });
});

const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    const path = process.argv[2];
    countStudents(path)
      .then((students) => {
        let response = '';
        let totalStudents = 0;
        for (const field in students) {
          if (Object.prototype.hasOwnProperty.call(students, field)) {
            const numStudents = students[field].length;
            totalStudents += numStudents;
            response += `Number of students in ${field}: ${numStudents}. List: ${students[field].join(', ')}\n`;
          }
        }
        response = `This is the list of our students\nNumber of students: ${totalStudents}\n${response}`;
        res.end(response);
      })
      .catch(() => {
        res.statusCode = 404;
        res.end('Cannot load the database');
      });
  }
});
const port = 1245;
app.listen(port, () => {
});
