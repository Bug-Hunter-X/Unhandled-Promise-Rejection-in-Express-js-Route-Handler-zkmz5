const express = require('express');
const app = express();
app.get('/', (req, res) => {
  setTimeout(async () => {
    try {
      const randomNumber = Math.random();
      if (randomNumber < 0.5) {
        res.send('Hello World!');
      } else {
        throw new Error('Something went wrong!');
      }
    } catch (error) {
      console.error('Error in route handler:', error);
      res.status(500).send('Internal Server Error');
    }
  }, 1000);
});

process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection at:', promise, 'reason:', reason);
  // Perform any necessary cleanup or logging here
});
app.listen(3000, () => console.log('Server listening on port 3000'));