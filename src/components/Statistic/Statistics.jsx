import { Section } from './Section';

export const Statistics = ({ good, neutral, bad, total, interest }) =>
  total ? (
    <ul>
      <li>
        <span>Good: {good}</span>
      </li>
      <li>
        <span>Neutral: {neutral}</span>
      </li>
      <li>
        <span>Bad: {bad}</span>
      </li>
      <li>
        <span>Total: {total}</span>
      </li>
      <li>
        <span>Positive feedback: {interest}%</span>
      </li>
    </ul>
  ) : (
    <Section title="There is no feedback" />
  );
