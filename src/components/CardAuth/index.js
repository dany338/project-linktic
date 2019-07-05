import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { StyledButton, StyledTextP, StyledInput } from './styled'

const CardAuth = ({code, error, onInputChange, onSubmit}) => {
  const [codeText, setCodeText] = useState(code)
  const valid = error ? 'is-invalid' : ''
  const [invalidInput, setInvalidInput] = useState(valid)

  const handleChange = event => {
    const { value } = event.target
    setCodeText(value)
    onInputChange(value)
  }

  const handleSubmit = () => {
    if(codeText !== '') {
      onSubmit()
    } else if(codeText === '') {
      setInvalidInput('is-invalid')
    }
  }

  return (
    <div className="row">
      <div className="col-sm-12">
        <div className="card text-center">
          <div className="card-body">
            <h5 className="card-title"><img src="./logo.svg" className="figure-img img-fluid rounded" alt="..." /> Login</h5>
            <StyledTextP className="card-text">
              Two seep authentication required for this login for this user login
            </StyledTextP>
            <div className="form-group mx-sm-3 mb-2">
              <StyledInput
                value={code}
                onChange={handleChange}
                type="password"
                className={`form-control ${invalidInput}`}
                name="code"
                placeholder="Enter two step auth code"
              />
            </div>
            <StyledButton type="button" className="btn btn-primary pull-right" onClick={handleSubmit}>Continue</StyledButton>
            {error && (
              <>
                <hr />
                <StyledTextP className="text-dark">
                  Auth Code is Invalid!
                </StyledTextP>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

CardAuth.propTypes = {
  code: PropTypes.string.isRequired,
  error: PropTypes.oneOf([true, false]),
  onInputChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
}

export default CardAuth
