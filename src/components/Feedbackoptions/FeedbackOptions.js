import React from 'react';
// import { useState } from 'react';
import PropTypes from 'prop-types';
import css from '../Feedbackoptions/FeedbackOptions.module.css';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ul className={css.list}>
      {Object.keys(options).map(option => {
        return (
          <li key={option}>
            <button
              type="button"
              name={option}
              onClick={onLeaveFeedback}
              className={css.option}
            >
              {option}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.object,
  onLeaveFeedback: PropTypes.func,
};
// export const FeedbackOptions = ({ options, onLeaveFeedback }) => (
//   <ul>
//     <li>
//       <button type="button" onClick={handleGood}>
//         Good
//       </button>
//     </li>
//     <li>
//       <button type="button" onClick={handleNeutral}>
//         Neutral
//       </button>
//     </li>
//     <li>
//       <button type="button" onClick={handleBad}>
//         Bad
//       </button>
//     </li>
//   </ul>
// );
