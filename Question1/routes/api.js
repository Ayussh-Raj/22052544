// // routes/api.js

// const express = require('express'); // Import Express
// const router = express.Router(); // Initialize the router
// const { makeAuthenticatedRequest } = require('../utils/auth');

// // Top Users API
// router.get('/users/top', async (req, res) => {
//   try {
//     // Fetch users from the test server
//     const usersResponse = await makeAuthenticatedRequest('http://20.244.56.144/users');
//     console.log('Users Response:', usersResponse); // Log the full response

//     // Validate usersResponse structure
//     if (!usersResponse || !Array.isArray(usersResponse.users)) {
//       console.error('Invalid usersResponse:', usersResponse);
//       return res.status(500).json({ error: 'Invalid users data' });
//     }
//     const users = usersResponse.users;

//     // Calculate post counts for each user
//     const postCounts = {};
//     for (const user of users) {
//       if (!user.id) {
//         console.warn('User missing ID:', user);
//         continue; // Skip invalid users
//       }
//       postCounts[user.id] = 0;
//     }

//     // Fetch posts from the test server
//     const postsResponse = await makeAuthenticatedRequest('http://20.244.56.144/posts');
//     console.log('Posts Response:', postsResponse); // Log the full response

//     // Validate postsResponse structure
//     if (!postsResponse || !Array.isArray(postsResponse.posts)) {
//       console.error('Invalid postsResponse:', postsResponse);
//       return res.status(500).json({ error: 'Invalid posts data' });
//     }
//     const posts = postsResponse.posts;

//     // Count posts for each user
//     for (const post of posts) {
//       if (post.userId in postCounts) {
//         postCounts[post.userId]++;
//       }
//     }

//     // Sort users by post count
//     const topUsers = Object.entries(postCounts)
//       .sort((a, b) => b[1] - a[1]) // Sort descending by post count
//       .slice(0, 5) // Take the top 5 users
//       .map(([userId, count]) => ({ id: userId, postCount: count }));

//     // Return the top users
//     res.json({ topUsers });
//   } catch (error) {
//     console.error('Error in /users/top:', error); // Log the full error
//     res.status(500).json({ error: 'Failed to fetch top users' });
//   }
// });

// // Top/Latest Posts API
// router.get('/posts', async (req, res) => {
//   try {
//     const type = req.query.type || 'popular'; // Default to 'popular'

//     // Fetch posts from the test server
//     const postsResponse = await makeAuthenticatedRequest(`http://20.244.56.144/posts?type=${type}`);
//     console.log('Posts Response:', postsResponse); // Log the full response

//     // Validate postsResponse structure
//     if (!postsResponse || !Array.isArray(postsResponse.posts)) {
//       console.error('Invalid postsResponse:', postsResponse);
//       return res.status(500).json({ error: 'Invalid posts data' });
//     }

//     // Return the posts
//     res.json(postsResponse);
//   } catch (error) {
//     console.error('Error in /posts:', error); // Log the full error
//     res.status(500).json({ error: 'Failed to fetch posts' });
//   }
// });

// module.exports = router; // Export the router

// routes/api.js

const express = require('express');
const router = express.Router();
const { makeAuthenticatedRequest } = require('../utils/auth');

// Top Users API
router.get('/users/top', async (req, res) => {
  try {
    // Fetch users from the test server
    const usersResponse = await makeAuthenticatedRequest('http://20.244.56.144/users');
    console.log('Users Response:', usersResponse); // Log the full response

    // Validate usersResponse structure
    if (!usersResponse || !Array.isArray(usersResponse.users)) {
      console.error('Invalid usersResponse:', usersResponse);
      return res.status(500).json({ error: 'Invalid users data' });
    }
    const users = usersResponse.users;

    // Calculate post counts for each user
    const postCounts = {};
    for (const user of users) {
      if (!user.id) {
        console.warn('User missing ID:', user);
        continue; // Skip invalid users
      }
      postCounts[user.id] = 0;
    }

    // Fetch posts from the test server
    const postsResponse = await makeAuthenticatedRequest('http://20.244.56.144/posts');
    console.log('Posts Response:', postsResponse); // Log the full response

    // Validate postsResponse structure
    if (!postsResponse || !Array.isArray(postsResponse.posts)) {
      console.error('Invalid postsResponse:', postsResponse);
      return res.status(500).json({ error: 'Invalid posts data' });
    }
    const posts = postsResponse.posts;

    // Count posts for each user
    for (const post of posts) {
      if (post.userId in postCounts) {
        postCounts[post.userId]++;
      }
    }

    // Sort users by post count
    const topUsers = Object.entries(postCounts)
      .sort((a, b) => b[1] - a[1]) // Sort descending by post count
      .slice(0, 5) // Take the top 5 users
      .map(([userId, count]) => ({ id: userId, postCount: count }));

    // Return the top users
    res.json({ topUsers });
  } catch (error) {
    console.error('Error in /users/top:', error); // Log the full error
    res.status(500).json({ error: 'Failed to fetch top users' });
  }
});

// Top/Latest Posts API
router.get('/posts', async (req, res) => {
  try {
    const type = req.query.type || 'popular'; // Default to 'popular'

    // Fetch posts from the test server
    const postsResponse = await makeAuthenticatedRequest(`http://20.244.56.144/posts?type=${type}`);
    console.log('Posts Response:', postsResponse); // Log the full response

    // Validate postsResponse structure
    if (!postsResponse || !Array.isArray(postsResponse.posts)) {
      console.error('Invalid postsResponse:', postsResponse);
      return res.status(500).json({ error: 'Invalid posts data' });
    }

    // Return the posts
    res.json(postsResponse);
  } catch (error) {
    console.error('Error in /posts:', error); // Log the full error
    res.status(500).json({ error: 'Failed to fetch posts' });
  }
});

module.exports = router;