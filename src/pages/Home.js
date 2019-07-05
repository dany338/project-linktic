import React, { Component } from 'react'
import Skeleton from 'react-loading-skeleton'
// Components
import Card from '../components/CardSuccess'
// Constants
import { delay } from '../utils/constants'

class Home extends Component {
  state = {
    isLoading: false,
    text: 'Successful Logged',
  }

  componentDidMount() {
    this.setState({ isLoading: true })
    delay(2000)
    .then(() => this.setState({ isLoading: false }))
    .catch(error => console.log(error))
  }

  render() {
    const { isLoading, text } = this.state
    return (
      <div style={{ marginTop: '10px' }}>
        <div className="d-flex justify-content-center">
          {isLoading ? (
            <Skeleton width={500} height={66} />
          ) : (
            <Card text={text} />
          )}
        </div>
      </div>
    )
  }
}

export default Home
