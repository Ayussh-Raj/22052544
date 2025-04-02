// // utils/auth.js

// const axios = require('axios');
// const dotenv = require('dotenv');
// dotenv.config();

// console.log('Environment Variables:', {
//   EMAIL: process.env.EMAIL,
//   NAME: process.env.NAME,
//   ROLL_NO: process.env.ROLL_NO,
//   ACCESS_CODE: process.env.ACCESS_CODE,
//   CLIENT_ID: process.env.CLIENT_ID,
//   CLIENT_SECRET: process.env.CLIENT_SECRET
// });

// async function getAuthToken() {
//   const url = 'http://20.244.56.144/evaluation-service/auth';
//   const data = {
//     email: process.env.EMAIL,
//     name: process.env.NAME,
//     rollNo: process.env.ROLL_NO,
//     accessCode: process.env.ACCESS_CODE,
//     clientID: process.env.CLIENT_ID,
//     clientSecret: process.env.CLIENT_SECRET
//   };

//   console.log('Auth Payload:', data);

//   try {
//     const response = await axios.post(url, data, {
//       headers: { 'Content-Type': 'application/json' }
//     });
//     console.log('Auth Response:', response.data);
//     return response.data.access_token;
//   } catch (error) {
//     console.error('Error fetching token:', error.response ? error.response.data : error.message);
//     throw error;
//   }
// }

// async function makeAuthenticatedRequest(url, method = 'GET', data = null) {
//   try {
//     const token = await getAuthToken();
//     const headers = {
//       Authorization: `Bearer ${token}`
//     };

//     if (method === 'GET') {
//       return await axios.get(url, { headers });
//     } else if (method === 'POST') {
//       return await axios.post(url, data, { headers });
//     }
//   } catch (error) {
//     console.error('API Request Error:', error.response ? error.response.data : error.message);
//     throw error;
//   }
// }

// module.exports = { getAuthToken, makeAuthenticatedRequest };
// utils/auth.js

// const axios = require('axios');
// const dotenv = require('dotenv');
// dotenv.config();

// // Log the environment variables for debugging
// console.log('Environment Variables:', {
//   EMAIL: process.env.EMAIL,
//   NAME: process.env.NAME,
//   ROLL_NO: process.env.ROLL_NO,
//   ACCESS_CODE: process.env.ACCESS_CODE,
//   CLIENT_ID: process.env.CLIENT_ID,
//   CLIENT_SECRET: process.env.CLIENT_SECRET
// });

// async function getAuthToken() {
//   const url = 'http://20.244.56.144/evaluation-service/auth';

//   // Construct the payload using environment variables
//   const data = {
//     email: process.env.EMAIL,
//     name: process.env.NAME,
//     rollNo: process.env.ROLL_NO,
//     accessCode: process.env.ACCESS_CODE,
//     clientID: process.env.CLIENT_ID,
//     clientSecret: process.env.CLIENT_SECRET
//   };

//   // Log the payload being sent
//   console.log('Auth Payload:', data);

//   // Validate the payload
//   if (!data.email || !data.name || !data.rollNo || !data.accessCode || !data.clientID || !data.clientSecret) {
//     console.error('Missing required fields in .env file');
//     throw new Error('Missing required fields in .env file');
//   }

//   try {
//     const response = await axios.post(url, data, {
//       headers: { 'Content-Type': 'application/json' }
//     });

//     // Log the response for debugging
//     console.log('Auth Response:', response.data);
//     return response.data.access_token;
//   } catch (error) {
//     console.error('Error fetching token:', error.response ? error.response.data : error.message);
//     throw error;
//   }
// }

// async function makeAuthenticatedRequest(url, method = 'GET', data = null) {
//   try {
//     const token = await getAuthToken();
//     const headers = {
//       Authorization: `Bearer ${token}`
//     };

//     if (method === 'GET') {
//       return await axios.get(url, { headers });
//     } else if (method === 'POST') {
//       return await axios.post(url, data, { headers });
//     }
//   } catch (error) {
//     console.error('API Request Error:', error.response ? error.response.data : error.message);
//     throw error;
//   }
// }

// module.exports = { getAuthToken, makeAuthenticatedRequest }; main
// utils/auth.js

const axios = require('axios');
const dotenv = require('dotenv');
dotenv.config();

// Log environment variables for debugging
console.log('Environment Variables:', {
  EMAIL: process.env.EMAIL,
  NAME: process.env.NAME,
  ROLL_NO: process.env.ROLL_NO,
  ACCESS_CODE: process.env.ACCESS_CODE,
  CLIENT_ID: process.env.CLIENT_ID,
  CLIENT_SECRET: process.env.CLIENT_SECRET
});

async function getAuthToken() {
  const url = 'http://20.244.56.144/evaluation-service/auth';

  // Construct the payload using environment variables
  const data = {
    email: process.env.EMAIL,
    name: process.env.NAME,
    rollNo: process.env.ROLL_NO,
    accessCode: process.env.ACCESS_CODE,
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET
  };

  console.log('Auth Payload:', data);

  // Validate the payload
  if (!data.email || !data.name || !data.rollNo || !data.accessCode || !data.clientID || !data.clientSecret) {
    console.error('Missing required fields in .env file');
    throw new Error('Missing required fields in .env file');
  }

  try {
    const response = await axios.post(url, data, {
      headers: { 'Content-Type': 'application/json' }
    });
    console.log('Auth Response:', response.data);
    return response.data.access_token;
  } catch (error) {
    console.error('Error fetching token:', error.response ? error.response.data : error.message);
    throw error;
  }
}

async function makeAuthenticatedRequest(url, method = 'GET', data = null) {
  try {
    const token = await getAuthToken();
    const headers = {
      Authorization: `Bearer ${token}`
    };

    if (method === 'GET') {
      return await axios.get(url, { headers });
    } else if (method === 'POST') {
      return await axios.post(url, data, { headers });
    }
  } catch (error) {
    console.error('API Request Error:', error.response ? error.response.data : error.message);
    throw error;
  }
}

module.exports = { getAuthToken, makeAuthenticatedRequest };