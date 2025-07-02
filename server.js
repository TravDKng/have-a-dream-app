// This is the server with the API endpoint added.

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// This line is new! It allows our server to understand JSON from the app.
app.use(express.json());

// This is our new API endpoint!
app.post('/api/generateVideo', (req, res) => {
  console.log('Received a request to generate a video!');
  console.log('Prompt data:', req.body); // Log the data from the app

  // Simulate a delay, like the AI is "thinking"
  setTimeout(() => {
    const responseData = {
      videoUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
    };
    res.json(responseData); // Send back the video URL
  }, 3000);
});


app.get('/', (req, res) => {
  res.send('Have a Dream server is running!');
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
