// YouTubeSearch.jsx
import React, { useState, useCallback } from 'react';
import axios from 'axios';
import debounce from 'lodash.debounce';

const YouTubeSearch = () => {
  const [query, setQuery] = useState('');      // Manages search input
  const [videos, setVideos] = useState([]);    // Stores video results
  const [loading, setLoading] = useState(false); // Loading state for UX
  const [error, setError] = useState(null);    // Handles error messages

  // Debounced API call for search
  const fetchVideos = async (searchQuery) => {
    if (!searchQuery) return;                // Only fetch if query exists
    setLoading(true);
    setError(null);
    setVideos([]);

    try {
      const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
        params: {
          part: 'snippet',
          q: searchQuery,
          type: 'video',
          maxResults: 5,
          key: 'YOUR_YOUTUBE_API_KEY'
        }
      });

      // Update videos with API response
      setVideos(response.data.items);
    } catch (error) {
      setError('Failed to fetch videos');
      console.error('Error fetching videos:', error);
    } finally {
      setLoading(false); // Stop loading after the API call finishes
    }
  };

  // Debounced search handler using lodash's debounce
  const debouncedFetchVideos = useCallback(debounce(fetchVideos, 500), []);

  // Handle input change and trigger debounced fetch
  const handleChange = (e) => {
    const searchQuery = e.target.value;
    setQuery(searchQuery);
    debouncedFetchVideos(searchQuery);
  };

  return (
    <div>
      <h1>YouTube Video Finder</h1>
      <input
        type="text"
        placeholder="Search for a video"
        value={query}
        onChange={handleChange}
      />
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      <div>
        {videos.map((video) => (
          <div key={video.id.videoId}>
            <h3>{video.snippet.title}</h3>
            <img src={video.snippet.thumbnails.default.url} alt={video.snippet.title} />
            <p>
              <a href={`https://www.youtube.com/watch?v=${video.id.videoId}`} target="_blank" rel="noopener noreferrer">
                Watch on YouTube
              </a>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default YouTubeSearch;
