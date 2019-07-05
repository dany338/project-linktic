import React, { Component } from 'react'
import Skeleton from 'react-loading-skeleton'
// Components
import Card from '../components/CardLogin'
// Apis, constants
import api from '../utils/api'
import { delay } from '../utils/constants'

class Login extends Component {
  state = {
    isLoading: false,
    login: {
      user: '',
      pass: '',
    },
    error: false,
    clicked: false,
  }

  handleInputChange = newLogin => {
    this.setState({ login: newLogin })
  }

  handleOnSubmit = () => {
    this.setState({ clicked: true })
    this.fetchLogin()
  }

  async fetchLogin() {
    const { login, error } = this.state
    const { user, pass } = login
    const { history } = this.props
    this.setState({ isLoading: true })
    const request = await api.login(user, pass)
    this.setState({ isLoading: false, error: (request.Auth === 'Denied') })

    if(request.Auth === 'Logged' && !error) {
      history.push(`/auth-code`)
    }
  }

  componentDidMount() {
    this.setState({ isLoading: true })
    delay(2000)
    .then(() => this.setState({ isLoading: false }))
    .catch(error => console.log(error))
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevState.error !== this.state.error) {
      this.fetchLogin()
    }
  }

  render() {
    const { isLoading, login, error } = this.state
    return (
      <div style={{ marginTop: '10px' }}>
        <div className="d-flex flex-sm-row justify-content-center">
          {isLoading ? (
            <Skeleton width={500} height={282} />
          ) : (
            <Card login={login} error={error} onInputChange={this.handleInputChange} onSubmit={this.handleOnSubmit} />
          )}
        </div>
      </div>
    )
  }
}

export default Login
