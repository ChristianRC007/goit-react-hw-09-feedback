import React from 'react';

import './FeedbackOptions.scss';

type Option = { good: number; neutral: number; bad: number };

interface Props {
  options: Option;
  onLeaveFeedback: (
    evt: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => void;
}

export default function FeedbackOptions({ options, onLeaveFeedback }: Props) {
  return (
    <ul className="list">
      {Object.keys(options).map(key => (
        <li className="list__item" key={key}>
          <button
            className="list__button"
            name={key}
            type="button"
            onClick={onLeaveFeedback}
          >
            {key}
          </button>
        </li>
      ))}
    </ul>
  );
}
