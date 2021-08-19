import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ImageListItem,
  IconButton,
  Button,
  ImageListItemBar,
  Grid,
  Card,
  CardHeader,
  Avatar,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Box,
} from '@material-ui/core'
import Rating from '@material-ui/lab/Rating'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import FavoriteIcon from '@material-ui/icons/Favorite'
import ShareIcon from '@material-ui/icons/Share'

import CircularStatic from '../commons/CircularProgressWithLabel'

function GalleryRecipies() {
  const [recipesData, setRecipesData] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const loadRecipes = async () => {
      try {
        setLoading(true)
        // get the recipes from nftStorage
      } catch (error) {
        console.log(error)
      }
    }
  })

  const data = [
    {
      image:
        'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F8132935.jpg',
      name: 'Classic Shrimp Scampi',
      creator: 'Angela Smith',
      intro: 'A wonderfully easy and quick scampi recipe!',
      rating: 4,
      image2: '',
      image3: '',
    },
    {
      image:
        'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F8132935.jpg',
      name: 'Classic Shrimp Scampi',
      creator: 'Angela Smith',
      intro: 'A wonderfully easy and quick scampi recipe!',
      rating: 4,
      image2: '',
      image3: '',
    },
    {
      image:
        'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F8132935.jpg',
      name: 'Classic Shrimp Scampi',
      creator: 'Angela Smith',
      intro: 'A wonderfully easy and quick scampi recipe!',
      rating: 4,
      image2: '',
      image3: '',
    },
    {
      image:
        'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F8132935.jpg',
      name: 'Classic Shrimp Scampi',
      creator: 'Angela Smith',
      intro: 'A wonderfully easy and quick scampi recipe!',
      rating: 4,
      image2: '',
      image3: '',
    },
    {
      image:
        'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F8132935.jpg',
      name: 'Classic Shrimp Scampi',
      creator: 'Angela Smith',
      intro: 'A wonderfully easy and quick scampi recipe!',
      rating: 4,
      image2: '',
      image3: '',
    },
    {
      image:
        'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F8132935.jpg',
      name: 'Classic Shrimp Scampi',
      creator: 'Angela Smith',
      intro: 'A wonderfully easy and quick scampi recipe!',
      rating: 4,
      image2: '',
      image3: '',
    },
    {
      image:
        'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F8132935.jpg',
      name: 'Classic Shrimp Scampi',
      creator: 'Angela Smith',
      intro: 'A wonderfully easy and quick scampi recipe!',
      rating: 4,
      image2: '',
      image3: '',
    },
    {
      image:
        'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F8132935.jpg',
      name: 'Classic Shrimp Scampi',
      creator: 'Angela Smith',
      intro: 'A wonderfully easy and quick scampi recipe!',
      rating: 4,
      image2: '',
      image3: '',
    },
  ]

  return (
    <div style={{ minHeight: '70vh', paddingBottom: '3rem' }}>
      <Grid container spacing={1}>
        {data.length ? (
          data.map((recipe, index) => (
            <Grid
              item
              xs={6}
              sm={3}
              key={index}
              style={{ paddingBottom: '2rem' }}
            >
              <Card>
                <CardMedia
                  style={{ height: '8rem', paddingTop: '56.25%' }}
                  image={recipe.image}
                  title={recipe.name}
                />

                <CardContent style={{ textAlign: 'initial' }}>
                  <Typography variant="subtitle1" color="textPrimary">
                    {recipe.name}
                  </Typography>

                  <Box
                    component="fieldset"
                    borderColor="transparent"
                    style={{ height: '20px', paddingLeft: '0px' }}
                  >
                    <Rating name="read-only" value={recipe.rating} readOnly />
                    <span
                      style={{
                        verticalAlign: 'super',
                        fontSize: '0.75rem',
                        paddingLeft: '0.5rem',
                      }}
                    >
                      122
                    </span>
                  </Box>

                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {recipe.intro}
                  </Typography>

                  <Typography
                    variant="body1"
                    color="textSecondary"
                    component="p"
                  >
                    <span style={{ fontSize: '0.87rem' }}>By </span>
                    <span style={{ fontWeight: 'bold', fontSize: '0.87rem' }}>
                      {recipe.creator}
                    </span>
                    {/* ["h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","caption","button","overline","srOnly","inherit"]. */}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))
        ) : (
          <h2>No Recipes Yet...</h2>
        )}
      </Grid>
    </div>
  )
}

export default GalleryRecipies
