import { FeedbackOptions } from './FeedbackOptions';
import { Statistics } from './Statistics';
import { useState } from 'react';
import { Section } from './Section';

export const Statistic = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handelIncrement = option => {
    switch (option) {
      case 'good':
        setGood(prevGood => prevGood + 1);
        break;

      case 'neutral':
        setNeutral(prevNeutral => prevNeutral + 1);
        break;

      case 'bad':
        setBad(prevBad => prevBad + 1);
        break;

      default:
        return;
    }
  };

  const countTotalFeedback = () => bad + neutral + good;

  const countPositiveFeedbackPercentage = good =>
    Math.round((good * 100) / countTotalFeedback());

  return (
    <div
      style={{
        height: '100vh',
        display: 'block',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={handelIncrement}
        />
      </Section>
      <Section title="Statistic">
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback()}
          interest={countPositiveFeedbackPercentage(good)}
        />
      </Section>
    </div>
  );
};
//==========================================================================
// export class oldStatistic extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   handelIncrement = type =>
//     this.setState(prevState => ({ [type]: prevState[type] + 1 }));

//   countTotalFeedback = () =>
//     Object.values(this.state).reduce((acc, type) => acc + type, 0);

//   countPositiveFeedbackPercentage = ({ good }) =>
//     Math.round((good * 100) / this.countTotalFeedback());

//   render() {
//     const { good, neutral, bad } = this.state;
//     return (
//       <div
//         style={{
//           height: '100vh',
//           display: 'block',
//           justifyContent: 'center',
//           alignItems: 'center',
//           fontSize: 40,
//           color: '#010101',
//         }}
//       >
//         <Section title="Please leave feedback">
//           <FeedbackOptions
//             options={Object.keys(this.state)}
//             onLeaveFeedback={this.handelIncrement}
//           />
//         </Section>
//         <Section title="Statistic">
//           <Statistics
//             good={good}
//             neutral={neutral}
//             bad={bad}
//             total={this.countTotalFeedback()}
//             interest={this.countPositiveFeedbackPercentage({ good })}
//           />
//         </Section>
//       </div>
//     );
//   }
// }
