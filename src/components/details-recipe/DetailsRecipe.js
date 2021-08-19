import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import FavoriteIcon from '@material-ui/icons/Favorite'
import ShareIcon from '@material-ui/icons/Share'
import Card from '@material-ui/core/Card'
import Checkbox from '@material-ui/core/Checkbox'

import { StylesProvider } from '@material-ui/core/styles'
import {
  TextField,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  IconButton,
} from '@material-ui/core'

import DirectionImg from '../../../src/components/images/directions.png'
// import { apiKey } from '../../../APIKEYS'
import './DetailsRecipe.css'
import { CircularStatic } from '../../components/commons/CircularProgressWithLabel'
import SeeMoreWork from '../unlock-work/UnlockWork'

function DetailsRecipe({ account, contractData }) {
  const { petId } = useParams()
  console.log(
    '🚀 ~ file: DetailsRecipe.js ~ line 29 ~ DetailsRecipe ~ petId',
    petId,
  )
  const [recipe, setRecipe] = useState('')
  const [image, setImage] = useState([])
  const [petName, setPetName] = useState([])
  const [petOwner, setOwnerName] = useState([])
  const [petCategory, setPetCategory] = useState([])
  const [petTransactions, setpetTransactions] = useState([])
  const [comment, setComment] = useState('')
  const [codeHash, setCodeHash] = useState('')

  const [loading, setLoading] = useState(false)
  const [unlock, setUnlock] = useState(false)

  useEffect(() => {
    const getImage = (ipfsURL) => {
      if (!ipfsURL) return
      ipfsURL = ipfsURL.split('://')
      return 'https://ipfs.io/ipfs/' + ipfsURL[1]
    }

    const getMetadata = async () => {
      // let data = await fetch(`https://ipfs.io/ipfs/${petId}/metadata.json`)
      let data = {
        image:
          'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F8132935.jpg',
        name: 'Classic Shrimp Scampi',
        creator: 'Angela Smith',
        intro: 'A wonderfully easy and quick scampi recipe!',
        ingredients: [
          '10 large shrimp, heads off and unpeeled',
          '1 tablespoon olive oil',
          '3 cloves garlic, minced',
          '4 tablespoons butter',
          '½ teaspoon dried oregano',
          'Add salt to taste',
        ],
        Prep: '15 mins',
        Cook: '10 mins',
        Total: '25 mins',
        Servings: '4 servings',
        Directions: [
          'With a sharp knife, cut shrimp in half so that the meat is exposed in the shell.',
          ' In a small saucepan, heat olive oil and lightly fry the garlic until just softened. Add butter and Oregano. Heat until butter has melted.',
          'Preheat an outdoor grill for medium heat and lightly oil grate.',
          'Lay shrimp out on a tray and brush generously with the butter mixture. Grill shrimp until lightly golden.',
        ],
      }
      setRecipe(data)
      // data = await data.json()
      // const [petOwner, petCategory] = data.description.split(',')
      // const imageFormated = getImage(data.image)
      // setImage(data.img)
      // setPetName(data.name)
      // setOwnerName(petOwner)
      // setPetCategory(petCategory)
    }
    getMetadata()
    // if (petId) {
    //   getMetadata()
    //   getImage()
    // }
  }, [petId, contractData])

  const handleChange = (event) => {
    setComment(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const newObj = { author: 'Guest', content: comment }
    const commentArr = [...pet.comments, newObj]
    pet.comments = [...pet.comments, newObj]
    setComment('')
  }

  let pet = {}
  if (!petId) {
    pet = {
      name: 'Oliver',
      img: 'https://siasky.net/OADaRfw_nMqqXCz5NXXLq5xN6R3nScEKbzsRdqdEQrLL5A',
      type: 'Cat',
      Owner: 'Luis C',
      likes: 20,
      comments: [
        { author: 'Albert', content: 'This is awesome' },
        { author: 'Angie', content: 'So Cute~' },
      ],
    }
  }

  const mintNFT = async (petId) => {
    try {
      const data = await contractData.methods
        .mintPetNFT(`https://${petId}`)
        .send({ from: account })

      console.log('data', data)
      setCodeHash(data)
    } catch (err) {
      console.error(err)
    }
  }

  const checkout = () => {
    window.unlockProtocol && window.unlockProtocol.loadCheckoutModal()
    window.addEventListener('unlockProtocol.status', function (event) {
      if (event.detail.state === 'unlocked') {
        alert('Worked!')
        setUnlock(true)
      }
    })
  }

  const [checked, setChecked] = React.useState(true)

  const handleCheckBox = (event) => {
    setChecked(event.target.checked)
  }

  return (
    <StylesProvider injectFirst>
      <Container className="root-pet-details">
        <div className="">
          <Grid container spacing={6}>
            <Grid item xs={12} sm={6} className="grid-container">
              <div className="flex-container">
                <h2>{recipe.name}</h2>
                <Button
                  variant="contained"
                  className="wallet-btn"
                  color="primary"
                  onClick={mintNFT}
                >
                  Mint NFT
                </Button>
              </div>
              <img className="img" src={recipe.image} alt="pet" />
              <div className="flex-container">
                <div>
                  <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                  </IconButton>

                  <IconButton aria-label="share">
                    <ShareIcon />
                  </IconButton>
                </div>

                <Typography variant="body1" color="primary">
                  {pet?.likes ? pet.likes : 0} Likes
                </Typography>
              </div>

              <div className="specifications">
                <Typography
                  gutterBottom
                  variant="subtitle1"
                  color="textPrimary"
                >
                  Recipe Specifications <span className="clock">⏱</span>
                </Typography>
                <Typography
                  variant="body1"
                  color="textPrimary"
                  component="p"
                  className="details-text"
                >
                  <span style={{ fontWeight: 'bold' }}>Cook: </span>
                  <span>{recipe.Cook} </span>
                </Typography>
                <Typography
                  variant="body1"
                  color="textPrimary"
                  component="p"
                  className="details-text"
                >
                  <span style={{ fontWeight: 'bold' }}>Total: </span>
                  <span>{recipe.Total} </span>
                </Typography>
                <Typography
                  variant="body1"
                  color="textPrimary"
                  component="p"
                  className="details-text"
                >
                  <span style={{ fontWeight: 'bold' }}>Servings: </span>
                  <span>{recipe.Servings} </span>
                </Typography>

                <Typography
                  variant="body1"
                  color="textPrimary"
                  component="p"
                  className="details-text"
                >
                  <span style={{ fontWeight: 'bold' }}>Intro: </span>
                  <span>
                    {recipe.intro} Full rights and credits to the creator @
                    {recipe.creator}.{' '}
                  </span>
                </Typography>
              </div>
            </Grid>

            <Grid item xs={12} sm={6}>
              <Card className="code-hash">
                <Typography
                  gutterBottom
                  variant="h5"
                  className="ingredients-title"
                >
                  Ingredients
                </Typography>

                {recipe?.ingredients
                  ? recipe.ingredients.map((ingredient, index) => {
                      return (
                        <div key={index}>
                          <Checkbox
                            checked={checked}
                            onChange={handleCheckBox}
                            inputProps={{ 'aria-label': 'primary checkbox' }}
                          />
                          <span>{ingredient}</span>
                        </div>
                      )
                    })
                  : 'There are no ingredients for this recipe'}
              </Card>

              <div className="code-hash">
                <Typography
                  gutterBottom
                  variant="h5"
                  className="ingredients-title"
                >
                  <img src={DirectionImg} alt="" className="direction-img" />
                  Directions
                </Typography>

                {recipe?.Directions
                  ? recipe.Directions.map((direction, index) => (
                      <li
                        key={index}
                        style={{ listStyle: 'none', paddingBottom: '1rem' }}
                      >
                        {index + 1}. {direction}
                      </li>
                    ))
                  : 'There are no ingredients for this recipe'}
              </div>
            </Grid>
          </Grid>

          <SeeMoreWork
            petName={petName}
            unlock={unlock}
            setUnlock={setUnlock}
            checkout={checkout}
          />
        </div>
      </Container>
    </StylesProvider>
  )
}

export default DetailsRecipe
