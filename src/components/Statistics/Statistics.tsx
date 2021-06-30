import './Statistics.scss';

interface Props {
  good: number;
  neutral: number;
  bad: number;
  total: number;
  positivePercentage: number;
}

export default function Statistics({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}: Props) {
  return (
    <ul className="stats-list">
      <li className="stats-list__item">
        Good: <span>{good}</span>
      </li>
      <li className="stats-list__item">
        Neutral: <span>{neutral}</span>
      </li>
      <li className="stats-list__item">
        Bad: <span>{bad}</span>
      </li>
      <li className="stats-list__item">
        Total: <span>{total}</span>
      </li>
      <li className="stats-list__item">
        Positive feedback:{' '}
        <span>{isNaN(positivePercentage) ? '0' : positivePercentage}%</span>
      </li>
    </ul>
  );
}
