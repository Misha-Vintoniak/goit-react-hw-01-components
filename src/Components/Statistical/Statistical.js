import PropTypes from 'prop-types';
import s from './Statistical.module.css';

function Statistical({ title, stats }) {
  return (
    <section className={s.statistics}>
      {title && <h2 className="title">Upload stats</h2>}

      <ul className={s.statList}>
        {stats.map(stat => (
          <li
            className={s.item}
            key={stat.id}
            style={{
              backgroundColor: `rgb(${randomColor()},${randomColor()}, ${randomColor()})`,
            }}
          >
            <span className={s.label}>{stat.label}</span>
            <span className={s.percentage}>{stat.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

function randomColor() {
  return Math.random() * 255;
}

Statistical.prototype = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ).isRequired,
};
export default Statistical;
