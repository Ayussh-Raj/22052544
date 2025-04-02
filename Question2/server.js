import express from 'express';
import cors from 'cors';

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

// Mock data
const users = [
  { id: 1, name: "John Doe", postCount: 150, avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400" },
  { id: 2, name: "Jane Smith", postCount: 120, avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400" },
  { id: 3, name: "Mike Johnson", postCount: 98, avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400" },
  { id: 4, name: "Sarah Williams", postCount: 85, avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400" },
  { id: 5, name: "David Brown", postCount: 76, avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400" }
];

const posts = [
  {
    id: 1,
    userId: 1,
    userName: "John Doe",
    userAvatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400",
    content: "Just launched a new project! #coding #webdev",
    commentCount: 25,
    timestamp: new Date().toISOString(),
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800"
  },
  {
    id: 2,
    userId: 2,
    userName: "Jane Smith",
    userAvatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400",
    content: "Beautiful day for outdoor photography 📸",
    commentCount: 42,
    timestamp: new Date().toISOString(),
    image: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=800"
  },
  {
    id: 3,
    userId: 3,
    userName: "Mike Johnson",
    userAvatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400",
    content: "Working on some new designs",
    commentCount: 18,
    timestamp: new Date().toISOString(),
    image: "https://images.unsplash.com/photo-1561736778-92e52a7769ef?w=800"
  }
];

// Get top users
app.get('/top-users', (req, res) => {
  // Sort users by post count and return top 5
  const topUsers = [...users].sort((a, b) => b.postCount - a.postCount).slice(0, 5);
  res.json(topUsers);
});

// Get all posts
app.get('/posts', (req, res) => {
  res.json(posts);
});

// Get trending posts (posts with most comments)
app.get('/trending-posts', (req, res) => {
  const trendingPosts = [...posts].sort((a, b) => b.commentCount - a.commentCount);
  res.json(trendingPosts);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});