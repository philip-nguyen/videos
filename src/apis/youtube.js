import axios from 'axios';

const KEY = 'AIzaSyBla-QV1ftA0ZUyMzNlLIXv6NyVFkge9c8';

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY
  }
});