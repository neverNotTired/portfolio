import React, { useEffect, useState } from 'react';
import './Gitgraph.css';

const GitGraph = () => {
  const [weeks, setWeeks] = useState([]);
  const [monthLabels, setMonthLabels] = useState([]);

  useEffect(() => {
    const cachedData = sessionStorage.getItem('gitgraph');
    if (cachedData) {
      console.log('Using cached contribution data');
      const calendar = JSON.parse(cachedData);
      setWeeks(calendar.weeks);
      setMonthLabels(generateMonthLabels(calendar.weeks));
    } else {
      console.log('Fetching contribution data from API');
      fetch('/api/gitgraph')
        .then(res => res.json())
        .then(calendar => {
          sessionStorage.setItem('gitgraph', JSON.stringify(calendar));
          setWeeks(calendar.weeks);
          setMonthLabels(generateMonthLabels(calendar.weeks));
        })
        .catch(err => console.error('Error fetching contribution data:', err));
    }
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
    <div className="hidden md:block">
      <div className="title-wrapper flex flex-col justify-center items-center bg-[#111a22]">
        <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-8 pb-1 pt-2">
          GitHub
        </h2>
        <h3 className="text-white text-[16px] font-light leading-tight tracking-[-0.015em] px-8 pb-3 pt-0">
          <a href="https://github.com/neverNotTired" className="text-[#93adc8]">
            @neverNotTired
          </a>
        </h3>
      </div>
      <div className="gitgraph-container flex flex-1 justify-center py-5">
        <div className="gitgraph-wrapper">
          <div className="month-labels">
            {monthLabels.map(({ index, label }) => (
              <div
                key={index}
                className="month-label"
                style={{ gridColumnStart: index + 1 }}
              >
                {label}
              </div>
            ))}
          </div>
          <div className="gitgraph-grid">
            <div className="day-labels">
              {['Mon', 'Wed', 'Fri'].map((day, i) => (
                <div key={i} className="day-label">
                  {day}
                </div>
              ))}
            </div>
            <div className="weeks">
              {weeks.map((week, i) => (
                <div key={i} className="week-column">
                  {week.contributionDays.map((day, j) => {
                    const bgColor =
                      day.color === '#ebedf0' ? '#151b23' : day.color;
                    return (
                      <div
                        key={j}
                        className="square"
                        title={`${day.date}: ${day.contributionCount} contributions`}
                        style={{ backgroundColor: bgColor }}
                      />
                    );
                  })}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GitGraph;
