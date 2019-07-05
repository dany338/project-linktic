import React from 'react'
import PropTypes from 'prop-types'
import { StyledTextP, StyleCard } from './styled'

const CardSuccess = ({text}) => {
  return (
    <div className="row">
      <div className="col-sm-12">
        <StyleCard className="card">
          <div className="card-body">
            <div className="d-flex align-items-center">
              <StyledTextP className="text-dark">
                <i className="fas fa-check-circle" style={{ 'color': '#08a531', fontSize: '4em'}}></i> {text}
              </StyledTextP>
            </div>
          </div>
        </StyleCard>
      </div>
    </div>
  )
}

CardSuccess.propTypes = {
  text: PropTypes.string.isRequired,
}

CardSuccess.defaultProps = {
  text: 'Successful Logged'
}

export default CardSuccess
