import React from 'react'

import PropTypes from 'prop-types'

import './question-container.css'

const QuestionContainer = (props) => {
  return (
    <div className="question-container-container">
      <span className="question-container-text heading3">{props.question}</span>
      <span className="bodySmall">{props.answer}</span>
    </div>
  )
}

QuestionContainer.defaultProps = {
  question: 'What types of cars do you sell?',
  answer:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non volutpat turpis. Mauris luctus rutrum mi ut rhoncus.',
}

QuestionContainer.propTypes = {
  question: PropTypes.string,
  answer: PropTypes.string,
}

export default QuestionContainer
