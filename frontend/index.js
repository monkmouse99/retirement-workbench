const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files (keep commented for now if no public folder)
// app.use(express.static(path.join(__dirname, 'public')));

// ✅ Single catch-all handler
app.use((req, res) => {
  res.send('Hello from frontend!');
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});