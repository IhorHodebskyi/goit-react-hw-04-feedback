export const FeedbackOptions = ({ onLeaveFeedback, options }) =>
  options.map(option => (
    <button type="button" key={option} onClick={() => onLeaveFeedback(option)}>
      {option}
    </button>
  ));
