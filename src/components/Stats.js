import React from 'react';
import { Box, Typography } from '@mui/material';
import logger from '../utils/logger';

const dummyStats = [
  {
    shortUrl: 'http://localhost:3000/abc123',
    clicks: 4,
    createdAt: '2025-07-15T09:00:00Z',
    expiresAt: '2025-07-15T10:00:00Z',
    clickDetails: [
      { timestamp: '2025-07-15T09:10:00Z', source: 'Chrome', geo: 'IN' },
      { timestamp: '2025-07-15T09:20:00Z', source: 'Safari', geo: 'IN' },
    ],
  },
];

function Stats() {
  logger('StatsPageLoaded', dummyStats);

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h5">Shortened URL Stats</Typography>
      {dummyStats.map((s, i) => (
        <Box key={i} sx={{ mt: 2 }}>
          <Typography><strong>Short URL:</strong> {s.shortUrl}</Typography>
          <Typography><strong>Clicks:</strong> {s.clicks}</Typography>
          <Typography><strong>Created:</strong> {s.createdAt}</Typography>
          <Typography><strong>Expires:</strong> {s.expiresAt}</Typography>
          <Typography><strong>Click Details:</strong></Typography>
          {s.clickDetails.map((c, j) => (
            <Typography key={j}>
              - {c.timestamp} | {c.source} | {c.geo}
            </Typography>
          ))}
        </Box>
      ))}
    </Box>
  );
}

export default Stats;
