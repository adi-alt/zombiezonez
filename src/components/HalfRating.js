import React from 'react';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';

export default function HalfRating({valu}) {
  return (
    <Stack spacing={1}>
      {/* <Rating name="half-rating" defaultValue={valu} precision={0.5} /> */}
      <Rating name="half-rating-read" defaultValue={valu} precision={0.01} readOnly />
    </Stack>
  );
}