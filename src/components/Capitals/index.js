import {Component} from 'react'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

class Capitals extends Component {
  state = {selectedOptionId: countryAndCapitalsList[0].id}

  getCountryName = event => {
    this.setState({selectedOptionId: event.target.value})
  }

  render() {
    const {selectedOptionId} = this.state
    const selectedOption = countryAndCapitalsList.filter(
      eachItem => eachItem.id === selectedOptionId,
    )
    console.log(selectedOption)
    console.log(selectedOptionId.country)
    const {country} = selectedOption

    return (
      <div className="bg-container">
        <div className="card">
          <select onChange={this.getCountryName} className="select-option">
            {countryAndCapitalsList.map(eachItem => (
              <option key={eachItem.id} value={eachItem.id}>
                {eachItem.capitalDisplayText}
              </option>
            ))}
          </select>
          <p>is capital of which country?</p>
          <h1>{country}</h1>
        </div>
      </div>
    )
  }
}

// Write your code here
export default Capitals
