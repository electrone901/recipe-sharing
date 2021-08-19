import React from 'react'
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Navbar } from './components/layout/navbar/Navbar'
import Footer from './components/layout/footer/Footer'
import Home from './components/home/Home'
import DetailsRecipie from './components/details-recipe/DetailsRecipe'
import CreateRecipe from './components/create-recipe/CreateRecipe'
import Web3 from 'web3'

function App() {
  const [account, setAccount] = React.useState('')
  const [contractData, setContractData] = React.useState('')

  const loadWeb3 = async () => {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum)

      await window.ethereum.enable()
    } else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider)
    } else {
      window.alert(
        'Non-Ethereum browser detected. You should consider trying MetaMask!',
      )
    }

    const web3 = window.web3
    const accounts = await web3.eth.getAccounts()
    setAccount(accounts[0])
    // const networkId = await web3.eth.net.getId()
    // const networkData = MyPet.networks[networkId]

    // if (networkData) {
    //   const abi = MyPet.abi
    //   const address = MyPet.networks[networkId].address
    //   const myContract = new web3.eth.Contract(abi, address)
    //   setContractData(myContract)
    // } else {
    //   window.alert('Contract is not deployed to detectednetwork')
    // }
  }
  return (
    <Router className="App">
      <div className="App">
        <Navbar />
        <Route exact path="/" component={Home} />

        <Switch>
          <Route exact path="/create-recipe" component={CreateRecipe} />
          <Route path="/recipe/:recipeId" component={DetailsRecipie} />
        </Switch>
        <Footer />
      </div>
    </Router>
  )
}

export default App
