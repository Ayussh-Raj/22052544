// // app.js
// const express = require('express');
// const app = express();
// const router = require('./routes/api');

// app.use('/api', router);

// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });
// app.js

// const express = require('express');
// const app = express();
// const router = require('./routes/api'); // Import the router

// // Use the router for API endpoints
// app.use('/api', router);

// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });
// app.js

const express = require('express');
const app = express();
const router = require('./routes/api'); // Import the router

// Use the router for API endpoints
app.use('/api', router);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});