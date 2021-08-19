import React from 'react'
import { StylesProvider, Container, Chip } from '@material-ui/core'
import './Home.css'
import GalleryRecipies from '../gallery-recipes/GalleryRecipies'

function home() {
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(' e', e.target.value)
  }
  return (
    <StylesProvider injectFirst>
      <Container>
        <div className="label-btns">
          <Chip
            size="medium"
            label="Today"
            color="primary"
            clickable
            onClick={handleSubmit}
          />

          <Chip
            size="medium"
            label="Last Week"
            clickable
            onClick={handleSubmit}
          />

          <Chip
            size="medium"
            label="Last Month"
            clickable
            onClick={handleSubmit}
          />

          <Chip
            size="medium"
            label="All Time"
            clickable
            onClick={handleSubmit}
          />
        </div>
        <GalleryRecipies />
      </Container>
    </StylesProvider>
  )
}

export default home
