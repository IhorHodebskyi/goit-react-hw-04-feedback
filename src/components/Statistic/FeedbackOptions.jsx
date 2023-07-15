export const FeedbackOptions = ({ onLeaveFeedback, options }) => {
  return options.map(option => (
    <button type="button" key={option} onClick={() => onLeaveFeedback(option)}>
      {option}
    </button>
  ));
};
