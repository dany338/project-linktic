import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import Skeleton from 'react-loading-skeleton'
// Components
import Card from '../components/CardAuth'
// Apis, constants
import api from '../utils/api'
import { delay } from '../utils/constants'

class LoginAuthCode extends Component {
  state = {
    isLoading: false,
    code: '',
    error: false,
  }

  handleInputChange = newCode => {
    this.setState({ code: newCode })
  }

  handleOnSubmit = () => {
    this.fetchAuthCode()
  }

  async fetchAuthCode() {
    const { code, error } = this.state
    const { history } = this.props
    this.setState({ isLoading: true })
    const request = await api.authCode(code)
    this.setState({ isLoading: false, error: (request.AuthCode === 'No-Authorized') })
    if(request.AuthCode === 'Authorized' && !error) {
      history.push(`/home`)
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
      this.fetchAuthCode()
    }
  }

  render() {
    const { isLoading, code, error } = this.state
    return (
      <div style={{ marginTop: '10px' }}>
        <div className="d-flex justify-content-center">
          {isLoading ? (
            <Skeleton width={500} height={66} />
          ) : (
            <Card code={code} error={error} onInputChange={this.handleInputChange} onSubmit={this.handleOnSubmit} />
          )}
        </div>
      </div>
    )
  }
}

export default withRouter(LoginAuthCode)
