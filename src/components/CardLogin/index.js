import React, { useState } from 'react'
import PropTypes from 'prop-types'
// Styled
import { StyleCard, StyledTextP, StyledInput, StyledButton } from './styled'

const CardLogin = ({login, error, onInputChange, onSubmit}) => {
  const { user, pass } = login
  const valid = error ? 'is-invalid' : ''
  const [userText, setUserText] = useState(user)
  const [passText, setPassText] = useState(pass)
  const [invalidInput, setInvalidInput] = useState(valid)

  const handleChange = event => {
    const { name, value } = event.target
    const newLogin = { ...login, [name]: value }
    if(name === 'user') setUserText(value)
    if(name === 'pass') setPassText(value)
    onInputChange(newLogin)
  }

  const handleSubmit = () => {
    if(userText !== '' && passText !== '') {
      onSubmit()
    } else if(userText === '') {
      setInvalidInput('is-invalid')
    }
  }

  return (
    <div className="row">
      <div className="col-sm-12">
        <StyleCard className="card">
          <div className="card-body">
            <h5 className="card-title"><img src="./logo.svg" className="figure-img img-fluid rounded" alt="..." /> Login</h5>
            <div className="form-group mx-sm-3 mb-2">
              <StyledInput
                value={user}
                onChange={handleChange}
                type="text"
                className={`form-control ${invalidInput}`}
                name="user"
                placeholder="Login"
              />
            </div>
            <div className="form-group mx-sm-3 mb-2">
              <StyledInput
                value={pass}
                onChange={handleChange}
                type="password"
                className="form-control"
                name="pass"
                placeholder="Password"
              />
            </div>
            <div className="d-flex justify-content-around">
              <StyledButton type="button" className="btn btn-primary pull-right" onClick={handleSubmit}>Login</StyledButton>
            </div>
            {error && (
              <>
                <hr />
                <StyledTextP className="text-dark">
                  is simply dummy text of the printing and typesetting industry. Lorem Ipsum has!
                </StyledTextP>
              </>
            )}
          </div>
        </StyleCard>
      </div>
    </div>
  )
}

CardLogin.propTypes = {
  login: PropTypes.shape({
    user: PropTypes.string.isRequired,
    pass: PropTypes.string.isRequired,
  }),
  error: PropTypes.oneOf([true, false]),
  onInputChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
}

export default CardLogin
