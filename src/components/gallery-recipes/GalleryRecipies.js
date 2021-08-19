import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
} from '@material-ui/core'
import Rating from '@material-ui/lab/Rating'
import ShareIcon from '@material-ui/icons/Share'
import { apiKey } from '../../APIKEYS'

import CircularStatic from '../commons/CircularProgressWithLabel'

function GalleryRecipies() {
  const [recipesData, setRecipesData] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const loadRecipes = async () => {
      try {
        setLoading(true)

        let cids = await fetch('https://api.nft.storage', {
          headers: {
            Authorization: `Bearer ${apiKey}`,
            'Content-Type': 'application/json',
          },
        })
        cids = await cids.json()
        console.log('🚀  cids', cids)

        const temp = []
        for (let cid of cids.value) {
          if (cid?.cid) {
            let data = await fetch(
              `https://ipfs.io/ipfs/${cid.cid}/metadata.json`,
            )

            data = await data.json()
            const dataArray = data.description.split(',')
            console.log(' dataArray', dataArray)
            data.creator = dataArray[0]
            data.type = dataArray[1]
            data.intro = dataArray[2]

            // formats the imageURL
            const getImage = (ipfsURL) => {
              if (!ipfsURL) return
              ipfsURL = ipfsURL.split('://')
              return 'https://ipfs.io/ipfs/' + ipfsURL[1]
            }

            data.image = await getImage(data.image)
            data.cid = cid.cid
            data.created = cid.created
            temp.push(data)
          }
        }
        setRecipesData(temp)
        setLoading(false)
      } catch (error) {
        console.log(error)
        setLoading(false)
      }
    }
    loadRecipes()
  }, [])

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

  console.log('recip', recipesData)

  return (
    <div style={{ minHeight: '70vh', paddingBottom: '3rem' }}>
      <Grid container spacing={1}>
        {recipesData.length ? (
          recipesData.map((recipe, index) => (
            <Grid
              item
              xs={6}
              sm={3}
              key={index}
              style={{ paddingBottom: '2rem' }}
            >
              <Link
                to={`recipe/${recipe.cid}`}
                style={{ textDecoration: 'none' }}
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
                      <Rating name="read-only" value={5} readOnly />
                      <span
                        style={{
                          verticalAlign: 'super',
                          fontSize: '0.75rem',
                          paddingLeft: '0.5rem',
                        }}
                      >
                        0
                      </span>
                    </Box>

                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      Type: {recipe.type}
                    </Typography>

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
                    </Typography>
                  </CardContent>
                </Card>
              </Link>
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
