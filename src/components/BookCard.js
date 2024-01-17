import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function BookCard( {book} ) {
  return (
    <Card sx={{ minWidth: 275 }}>
        <CardContent>
        <Typography variant="h5" component="div">
            {book.title}
        </Typography>
        <Typography variant="body2">
            {book.author}
        </Typography>
        </CardContent>
    </Card>
  );
}