import * as React from 'react';
import { useState } from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import clsx from 'clsx';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';


function RecipeReviewCard({ item }) {

  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      <div>
        <Box sx={{ width: '100%' }}>
          <Card sx={{ Width: 300 }} style={{ display: 'inline-block', borderRadius: 10 }} className="card">
            <b><CardHeader
              avatar={
                <Avatar aria-label="recipe" style={{ backgroundColor: '#c154c1', color: 'white' }}>
                  {item.first_name[0]}
                </Avatar>
              }
              action={
                <IconButton aria-label="settings" style={{ backgroundColor: '#c154c1', color: "white" }}>
                  <MoreVertIcon />
                </IconButton>
              }

              title={item.first_name}
              subheader={item.last_name}
              style={{ backgroundColor: '#dda0dd', color: 'black', fontSize: 20 }}
            />
            </b>
            <CardMedia
              className="photo"
              component="img"
              height="200"
              image={item.avatar}
              alt="Paella dish"
              style={{ height: 300, width: 550 }}
            />

            <CardContent style={{ backgroundColor: '#dda0dd', color: 'white' }}>
              <Typography variant="body2" color="text.primary" style={{ fontSize: 20, color: '#4b0082', fontFamily: 'rial narrow' }}>
                <b>Contact :</b> {item.email}
              </Typography>
            </CardContent>

            <CardActions disableSpacing className="buttons" style={{ backgroundColor: 'black', color: 'white', alignItems: 'center' }}>

              <IconButton aria-label="add to favorites" style={{ color: 'white', backgroundColor: '#c154c1' }}>
                <FavoriteIcon className={clsx({ isLiOpen: isFavorite })} onClick={() => setIsFavorite(!isFavorite)} />
              </IconButton>

              <IconButton aria-label="share" style={{ color: 'white', backgroundColor: '#c154c1' }}>
                <ShareIcon className="share" />
              </IconButton>

            </CardActions>
          </Card>
          <br />
          <br />
        </Box>
      </div>
    </Grid>
  );
}
export default RecipeReviewCard;