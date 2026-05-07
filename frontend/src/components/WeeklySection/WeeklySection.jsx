import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
} from "recharts";

import "./WeeklySection.css";

function WeeklySection({
  activity,
  weeklyGoal,
}) {
  const completed =
    activity.length;

  const goal =
    weeklyGoal ?? 6;

  const remaining =
    Math.max(
      goal - completed,
      0
    );

  const chartData = [
    {
      name: "done",
      value: completed,
    },
    {
      name: "left",
      value: remaining,
    },
  ];

  const totalDuration =
    activity.reduce(
      (sum, item) =>
        sum +
        item.duration,
      0
    );

  const totalDistance =
    activity.reduce(
      (sum, item) =>
        sum +
        item.distance,
      0
    );

  return (
    <section className="weekly-section">
      {/* TITLE */}
      <div className="weekly-section__header">
        <h2 className="weekly-section__title">
          Cette semaine
        </h2>

        <p className="weekly-section__subtitle">
          Du 23/06/2025 au
          30/06/2025
        </p>
      </div>

      {/* CONTENT */}
      <div className="weekly-section__content">
        {/* LEFT CARD */}
        <div className="weekly-section__main-card">
          {/* TOP TEXT */}
          <div className="weekly-section__summary">
            <div className="weekly-section__summary-top">
              <span className="weekly-section__completed">
                x{completed}
              </span>

              <span className="weekly-section__goal">
                sur objectif de {goal}
              </span>
            </div>

            <p className="weekly-section__description">
              Courses
              hebdomadaire
              réalisées
            </p>
          </div>

          {/* DONUT */}
          <div className="weekly-section__chart-wrapper">
            {/* LEFT LEGEND */}
            <div className="weekly-section__legend weekly-section__legend--left">
              <span className="weekly-section__legend-dot weekly-section__legend-dot--blue">
                ●
              </span>

              {completed} réalisées
            </div>

            {/* RIGHT LEGEND */}
            <div className="weekly-section__legend weekly-section__legend--right">
              <span className="weekly-section__legend-dot weekly-section__legend-dot--light">
                ●
              </span>

              {remaining} restants
            </div>

            <ResponsiveContainer>
              <PieChart>
                <Pie
                  data={chartData}
                  dataKey="value"
                  cx="50%"
                  cy="50%"
                  innerRadius={
                    42
                  }
                  outerRadius={
                    82
                  }
                  startAngle={
                    0
                  }
                  endAngle={
                    360
                  }
                  stroke="none"
                  paddingAngle={
                    0
                  }
                >
                  <Cell fill="#0B23F4" />
                  <Cell fill="#B6BDFC" />
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="weekly-section__stats">
          {/* CARD 1 */}
          <div className="weekly-section__stat-card">
            <p className="weekly-section__stat-label">
              Durée
              d'activité
            </p>

            <div className="weekly-section__stat-value">
              <span className="weekly-section__stat-number weekly-section__stat-number--blue">
                {
                  totalDuration
                }
              </span>

              <span className="weekly-section__stat-unit weekly-section__stat-unit--blue">
                minutes
              </span>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="weekly-section__stat-card">
            <p className="weekly-section__stat-label">
              Distance
            </p>

            <div className="weekly-section__stat-value">
              <span className="weekly-section__stat-number weekly-section__stat-number--red">
                {totalDistance.toFixed(
                  1
                )}
              </span>

              <span className="weekly-section__stat-unit weekly-section__stat-unit--red">
                kilomètres
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WeeklySection;