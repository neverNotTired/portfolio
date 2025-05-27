import React, { useEffect, useState } from 'react';
import './Gitgraph.css';

const GitGraph = () => {
  const [weeks, setWeeks] = useState([]);
  const [monthLabels, setMonthLabels] = useState([]);

  useEffect(() => {
    fetch('/api/gitgraph')
      .then(res => res.json())
      .then(calendar => {
        setWeeks(calendar.weeks);
        setMonthLabels(generateMonthLabels(calendar.weeks));
      })
      .catch(err => console.error('Error fetching contribution data:', err));
  }, []);

const generateMonthLabels = (weeks) => {
  const labels = [];
  const seenMonths = new Set();

  weeks.forEach((week, weekIndex) => {
    const firstOfMonthDay = week.contributionDays.find(day => {
      const date = new Date(day.date);
      return date.getDate() === 1;
    });

    if (firstOfMonthDay) {
      const date = new Date(firstOfMonthDay.date);
      const month = date.getMonth();
      const label = date.toLocaleString('default', { month: 'short' });

      if (!seenMonths.has(month)) {
        seenMonths.add(month);
        labels.push({ index: weekIndex, label });
      }
    }
  });

  return labels;
};

  return (
    <div className="gitgraph-wrapper">
<div className="month-labels">
  {monthLabels.map(({ index, label }) => (
    <div
      key={index}
      className="month-label"
      style={{ gridColumnStart: index + 1 }} // Adjust if you have day labels or padding
    >
      {label}
    </div>
  ))}
</div>



      <div className="gitgraph-grid">
        <div className="day-labels">
          {['Mon', 'Wed', 'Fri'].map((day, i) => (
            <div key={i} className="day-label">{day}</div>
          ))}
        </div>
        <div className="weeks">
          {weeks.map((week, i) => (
            <div key={i} className="week-column">
              {week.contributionDays.map((day, j) => (
                <div
                  key={j}
                  className="square"
                  title={`${day.date}: ${day.contributionCount} contributions`}
                  style={{ backgroundColor: day.color }}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GitGraph;
