import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ComposedChart,
  Line,
} from "recharts";

import "./PerformanceSection.css";

function PerformanceSection({ activity }) {
  const sortedActivity =
    [...activity].sort(
      (a, b) =>
        new Date(a.date) -
        new Date(b.date)
    );

  const lastFourSessions =
    sortedActivity.slice(-4);

const weekStart =
  new Date("2025-06-09");

const weekEnd =
  new Date("2025-06-15");

const lastWeekSessions =
  sortedActivity.filter(
    (session) => {
      const sessionDate =
        new Date(session.date);

      return (
        sessionDate >= weekStart &&
        sessionDate <= weekEnd
      );
    }
  );
  const weekDays = [
    "Lun",
    "Mar",
    "Mer",
    "Jeu",
    "Ven",
    "Sam",
    "Dim",
  ];

  const formatDate = (
    dateString
  ) => {
    return new Date(
      dateString
    ).toLocaleDateString(
      "fr-FR",
      {
        day: "2-digit",
        month: "long",
      }
    );
  };

  /* KM RANGE */
  const kmStartDate =
    sortedActivity.length > 0
      ? formatDate(
          sortedActivity[0].date
        )
      : "";

  const kmEndDate =
    sortedActivity.length > 0
      ? formatDate(
          sortedActivity[
            sortedActivity.length -
              1
          ].date
        )
      : "";

  const kmDateRange =
    `${kmStartDate} - ${kmEndDate}`;

  /* BPM RANGE */
  const bpmStartDate =
    lastWeekSessions.length > 0
      ? formatDate(
          lastWeekSessions[0]
            .date
        )
      : "";

  const bpmEndDate =
    lastWeekSessions.length > 0
      ? formatDate(
          lastWeekSessions[
            lastWeekSessions.length -
              1
          ].date
        )
      : "";

  const bpmDateRange =
    `${bpmStartDate} - ${bpmEndDate}`;

  const kmData =
    lastFourSessions.map(
      (session, index) => ({
        label: `S${
          index + 1
        }`,
        distance:
          session.distance,
      })
    );

  /* BPM DATA */
  const emptyWeek =
    weekDays.map((day) => ({
      label: day,
      min: 0,
      max: 0,
      avg: 0,
    }));

  lastWeekSessions.forEach(
    (session) => {
      const date =
        new Date(session.date);

      let dayIndex =
        date.getDay();

      // Convert Sunday
      if (dayIndex === 0) {
        dayIndex = 6;
      } else {
        dayIndex -= 1;
      }

      emptyWeek[dayIndex] = {
        label:
          weekDays[dayIndex],
        min:
          session.heartRate.min,
        max:
          session.heartRate.max,
        avg:
          session.heartRate
            .average,
      };
    }
  );

  const bpmData = emptyWeek;

  const averageKm =
    Math.round(
      activity.reduce(
        (sum, item) =>
          sum +
          item.distance,
        0
      ) / activity.length
    );

  const averageBpm =
    Math.round(
      activity.reduce(
        (sum, item) =>
          sum +
          item.heartRate
            .average,
        0
      ) / activity.length
    );

  return (
    <section className="performance-section">
      <h2 className="performance-section__title">
        Vos dernières
        performances
      </h2>

      <div className="performance-section__cards">

        {/* KM CARD */}
        <div className="performance-card performance-card--km">

          <div className="performance-card__header">

            <div className="performance-card__top-row">

              <div className="performance-card__value-wrapper">

                <span className="performance-card__value performance-card__value--km">
                  {averageKm} km en moyenne
                </span>

              </div>

              <div className="performance-card__date-controls">

                <button className="performance-section__arrow">
                  ‹
                </button>

                <span className="performance-card__date-range">
                  {kmDateRange}
                </span>

                <button className="performance-section__arrow">
                  ›
                </button>

              </div>

            </div>

            <p className="performance-card__subtitle">
              Total des kilomètres 4 dernières semaines
            </p>

          </div>

          <div className="performance-card__chart performance-card__chart--km">

            <ResponsiveContainer>
              <BarChart
                data={kmData}
                margin={{
                  top: 10,
                  right: 0,
                  left: 0,
                  bottom: 28,
                }}
              >
                <XAxis
                  dataKey="label"
                  tick={{
                    fill:
                      "#777777",
                    fontSize: 10,
                  }}
                  tickLine={false}
                  axisLine={{
                    stroke:
                      "#8E8E8E",
                  }}
                  tickMargin={24}
                />

                <YAxis
                  domain={[
                    0,
                    (
                      dataMax
                    ) =>
                      Math.ceil(
                        dataMax / 10
                      ) * 10,
                  ]}
                  tickCount={5}
                  interval={0}
                  tick={{
                    fill:
                      "#777777",
                    fontSize: 10,
                  }}
                  tickLine={false}
                  axisLine={{
                    stroke:
                      "#8E8E8E",
                  }}
                  width={34}
                  tickMargin={9}
                />

                <Tooltip />

                <Bar
                  dataKey="distance"
                  barSize={14}
                  shape={({
                    x,
                    y,
                    width,
                    height,
                  }) => (
                    <rect
                      x={x}
                      y={y}
                      width={width}
                      height={height - 3}
                      rx="7"
                      ry="7"
                      fill="#B6BDFC"
                    />
                  )}
                />
              </BarChart>
            </ResponsiveContainer>

          </div>

          <div className="performance-card__legend performance-card__legend--km">

            <span className="performance-card__dot performance-card__dot--km">
              ●
            </span>

            <span>
              Km
            </span>

          </div>

        </div>

        {/* BPM CARD */}
        <div className="performance-card performance-card--bpm">

          <div className="performance-card__header">

            <div className="performance-card__top-row">

              <div className="performance-card__value-wrapper">

                <span className="performance-card__value performance-card__value--bpm">
                  {averageBpm} BPM
                </span>

              </div>

              <div className="performance-card__date-controls">

                <button className="performance-section__arrow">
                  ‹
                </button>

                <span className="performance-card__date-range">
                  {bpmDateRange}
                </span>

                <button className="performance-section__arrow">
                  ›
                </button>

              </div>

            </div>

            <p className="performance-card__subtitle">
              Fréquence cardiaque moyenne
            </p>

          </div>

          <div className="performance-card__chart performance-card__chart--bpm">

            <ResponsiveContainer>
              <ComposedChart
                data={bpmData}
                margin={{
                  top: 10,
                  right: 0,
                  left: 0,
                  bottom: 28,
                }}
              >
                <XAxis
                  dataKey="label"
                  tick={{
                    fill:
                      "#777777",
                    fontSize: 10,
                  }}
                  tickLine={false}
                  axisLine={{
                    stroke:
                      "#8E8E8E",
                  }}
                  tickMargin={24}
                />

                <YAxis
                  domain={[
                    0,
                    190,
                  ]}
                  ticks={[
                    0,
                    50,
                    100,
                    150,
                    190,
                  ]}
                  tick={{
                    fill:
                      "#777777",
                    fontSize: 10,
                  }}
                  tickLine={false}
                  axisLine={{
                    stroke:
                      "#8E8E8E",
                  }}
                  width={34}
                  tickMargin={9}
                />

                <Tooltip />

                <Bar
                  dataKey="min"
                  barSize={12}
                  shape={({
                    x,
                    y,
                    width,
                    height,
                  }) => (
                    <rect
                      x={x}
                      y={y}
                      width={width}
                      height={
                        height > 3
                          ? height - 3
                          : 0
                      }
                      rx="7"
                      ry="7"
                      fill="#F7C0B4"
                    />
                  )}
                />

                <Bar
                  dataKey="max"
                  barSize={12}
                  shape={({
                    x,
                    y,
                    width,
                    height,
                  }) => (
                    <rect
                      x={x}
                      y={y}
                      width={width}
                      height={
                        height > 3
                          ? height - 3
                          : 0
                      }
                      rx="7"
                      ry="7"
                      fill="#FF4A0D"
                    />
                  )}
                />

                <Line
                  type="monotone"
                  dataKey="avg"
                  stroke="#F2F3FF"
                  strokeWidth={3}
                  dot={{
                    r: 4,
                    fill: "#0B23F4",
                    stroke:
                      "#FFFFFF",
                    strokeWidth: 1,
                  }}
                  activeDot={{
                    r: 4,
                    fill: "#0B23F4",
                    stroke:
                      "#FFFFFF",
                    strokeWidth: 1,
                  }}
                />

              </ComposedChart>
            </ResponsiveContainer>

          </div>

          <div className="performance-card__legend performance-card__legend--bpm">

            <span>
              <span className="performance-card__dot performance-card__dot--min">
                ●
              </span>{" "}
              Min
            </span>

            <span>
              <span className="performance-card__dot performance-card__dot--max">
                ●
              </span>{" "}
              Max BPM
            </span>

            <span>
              <span className="performance-card__dot performance-card__dot--avg">
                ●
              </span>{" "}
              BPM
            </span>

          </div>

        </div>

      </div>
    </section>
  );
}

export default PerformanceSection;