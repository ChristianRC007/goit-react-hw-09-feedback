import React, { useState } from 'react';
import Statistics from './components/Statistics';
import FeedbackOptions from './components/FeedbackOptions';
import Section from './components/Section';
import Notification from './components/Notification';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveFeedback = (
    evt: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    const { name } = evt.target as HTMLButtonElement;

    switch (name) {
      case 'good':
        setGood(prev => (prev += 1));
        break;
      case 'neutral':
        setNeutral(prev => (prev += 1));
        break;
      case 'bad':
        setBad(prev => (prev += 1));
        break;
      default:
        break;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    return Math.round((good * 100) / total);
  };

  const totalFeedbacks = countTotalFeedback();
  const positivePercentage = countPositiveFeedbackPercentage();

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={{ good, neutral, bad }}
          onLeaveFeedback={onLeaveFeedback}
        />
      </Section>
      <Section title="Statistics">
        {totalFeedbacks === 0 ? (
          <Notification message={'No feedback given :('} />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalFeedbacks}
            positivePercentage={positivePercentage}
          />
        )}
      </Section>
    </>
  );
}
