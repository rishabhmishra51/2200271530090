import React, { useState } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';
import logger from '../utils/logger';

function Shortener() {
  const [urls, setUrls] = useState([{ longUrl: '', validity: 30, shortcode: '' }]);
  const [results, setResults] = useState([]);

  const handleChange = (index, field, value) => {
    const newUrls = [...urls];
    newUrls[index][field] = value;
    setUrls(newUrls);
  };

  const shortenUrls = () => {
    logger('shortenUrls', urls);
    const newResults = urls.map((url, i) => {
      const code = url.shortcode || Math.random().toString(36).substring(2, 8);
      return {
        ...url,
        shortUrl: `http://localhost:3000/${code}`,
        clicks: 0,
        createdAt: new Date().toISOString(),
        expiresAt: new Date(Date.now() + url.validity * 60000).toISOString(),
      };
    });
    setResults(newResults);
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h5">Shorten URLs</Typography>
      {urls.map((u, i) => (
        <Box key={i} sx={{ display: 'flex', gap: 2, my: 1 }}>
          <TextField
            label="Long URL"
            value={u.longUrl}
            fullWidth
            onChange={(e) => handleChange(i, 'longUrl', e.target.value)}
          />
          <TextField
            label="Validity (mins)"
            type="number"
            value={u.validity}
            onChange={(e) => handleChange(i, 'validity', e.target.value)}
          />
          <TextField
            label="Custom Shortcode"
            value={u.shortcode}
            onChange={(e) => handleChange(i, 'shortcode', e.target.value)}
          />
        </Box>
      ))}
      {urls.length < 5 && (
        <Button onClick={() => setUrls([...urls, { longUrl: '', validity: 30, shortcode: '' }])}>
          + Add Another
        </Button>
      )}
      <Button variant="contained" sx={{ mt: 2 }} onClick={shortenUrls}>
        Generate Short URLs
      </Button>

      {results.length > 0 && (
        <Box sx={{ mt: 3 }}>
          <Typography variant="h6">Results</Typography>
          {results.map((r, i) => (
            <Box key={i}>
              <Typography>{r.shortUrl} (Expires at: {r.expiresAt})</Typography>
            </Box>
          ))}
        </Box>
      )}
    </Box>
  );
}

export default Shortener;
