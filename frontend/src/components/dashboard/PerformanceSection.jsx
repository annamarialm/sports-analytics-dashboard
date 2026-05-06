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

function PerformanceSection({ activity }) {
  const lastFourSessions =
    activity.slice(-4);

  const weekDays = [
    "Lun",
    "Mar",
    "Mer",
    "Jeu",
    "Ven",
    "Sam",
    "Dim",
  ];

  const getDayLabel = (
    dateString
  ) => {
    const date =
      new Date(dateString);

    const day =
      date.getDay();

    return weekDays[
      day === 0 ? 6 : day - 1
    ];
  };

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

  const startDate =
    activity.length > 0
      ? formatDate(
          activity[0].date
        )
      : "";

  const endDate =
    activity.length > 0
      ? formatDate(
          activity[
            activity.length - 1
          ].date
        )
      : "";

  const dateRange = `${startDate} - ${endDate}`;

  const kmData =
    lastFourSessions.map(
      (session) => ({
        label: getDayLabel(
          session.date
        ),
        distance:
          session.distance,
      })
    );

  const bpmData =
    lastFourSessions.map(
      (session) => ({
        label: getDayLabel(
          session.date
        ),
        min:
          session.heartRate.min,
        max:
          session.heartRate.max,
        avg:
          session.heartRate
            .average,
      })
    );

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

  const arrowStyle = {
    width: "24px",
    height: "24px",
    border:
      "1px solid #A9A9A9",
    borderRadius: "10px",
    background:
      "#FFFFFF",
    display: "flex",
    alignItems: "center",
    justifyContent:
      "center",
    fontSize: "12px",
    color: "#444",
    cursor: "pointer",
    padding: 0,
  };

  const cardStyle = {
    height: "484px",
    position:
      "relative",
    background:
      "#FFFFFF",
    borderRadius:
      "10px",
    padding:
      "16px 40px 24px 40px",
    boxSizing:
      "border-box",
    boxShadow:
      "0 4px 84px -40px rgba(157,167,251,0.40)",
  };

  return (
    <section
      style={{
        width: "1052px",
        display: "flex",
        flexDirection:
          "column",
        gap: "32px",
      }}
    >
      <h2
        style={{
          margin: 0,
          fontSize:
            "18px",
          fontWeight: 600,
          color:
            "#111111",
        }}
      >
        Vos dernières
        performances
      </h2>

      <div
        style={{
          display: "flex",
          gap: "24px",
        }}
      >
        {/* KM CARD */}
        <div
          style={{
            ...cardStyle,
            width: "445px",
          }}
        >
          {/* HEADER */}
          <div
            style={{
              marginBottom:
                "12px",
            }}
          >
            <div
              style={{
                display:
                  "flex",
                alignItems:
                  "flex-start",
                gap: "18px",
              }}
            >
              <div
                style={{
                  width:
                    "191px",
                  height:
                    "48px",
                  padding:
                    "16px 8px",
                  boxSizing:
                    "border-box",
                  display:
                    "flex",
                  alignItems:
                    "center",
                  flexShrink: 0,
                }}
              >
                <span
                  style={{
                    fontSize:
                      "22px",
                    fontWeight: 500,
                    color:
                      "#0B23F4",
                    lineHeight: 1,
                    whiteSpace:
                      "nowrap",
                  }}
                >
                  {averageKm}
                  km en
                  moyenne
                </span>
              </div>

              <div
                style={{
                  display:
                    "flex",
                  alignItems:
                    "center",
                  gap: "6px",
                  paddingTop:
                    "14px",
                }}
              >
                <button
                  style={
                    arrowStyle
                  }
                >
                  ‹
                </button>

                <span
                  style={{
                    fontSize:
                      "12px",
                    color:
                      "#444",
                    whiteSpace:
                      "nowrap",
                  }}
                >
                  {dateRange}
                </span>

                <button
                  style={
                    arrowStyle
                  }
                >
                  ›
                </button>
              </div>
            </div>

            <p
              style={{
                margin: 0,
                paddingLeft:
                  "8px",
                fontSize:
                  "12px",
                color:
                  "#777777",
              }}
            >
              Total des
              kilomètres 4
              dernières
              semaines
            </p>
          </div>

          {/* KM CHART */}
          <div
            style={{
              width:
                "330px",
              height:
                "307px",
              margin:
                "32px 0 0 0",
            }}
          >
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
                  tickLine={
                    false
                  }
                  axisLine={{
                    stroke:
                      "#8E8E8E",
                  }}
                  tickMargin={
                    24
                  }
                />

                <YAxis
                  domain={[
                    0,
                    (
                      dataMax
                    ) =>
                      Math.ceil(
                        dataMax /
                          10
                      ) * 10,
                  ]}
                  tickCount={
                    5
                  }
                  interval={
                    0
                  }
                  tick={{
                    fill:
                      "#777777",
                    fontSize: 10,
                  }}
                  tickLine={
                    false
                  }
                  axisLine={{
                    stroke:
                      "#8E8E8E",
                  }}
                  width={
                    34
                  }
                  tickMargin={
                    9
                  }
                />

                <Tooltip />

                <Bar
                  dataKey="distance"
                  barSize={
                    14
                  }
                  shape={({
                    x,
                    y,
                    width,
                    height,
                  }) => (
                    <rect
                      x={x}
                      y={y}
                      width={
                        width
                      }
                      height={
                        height -
                        3
                      }
                      rx="7"
                      ry="7"
                      fill="#B6BDFC"
                    />
                  )}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* LEGEND */}
          <div
            style={{
              position:
                "absolute",
              left: "52px",
              bottom:
                "40px",
              fontSize:
                "12px",
              color:
                "#777777",
              display:
                "flex",
              alignItems:
                "center",
              gap: "6px",
            }}
          >
            <span
              style={{
                color:
                  "#6F7BFF",
                fontSize:
                  "14px",
              }}
            >
              ●
            </span>

            <span>
              Km
            </span>
          </div>
        </div>

        {/* BPM CARD */}
        <div
          style={{
            ...cardStyle,
            width: "583px",
          }}
        >
          {/* HEADER */}
          <div
            style={{
              marginBottom:
                "12px",
            }}
          >
            <div
              style={{
                display:
                  "flex",
                alignItems:
                  "flex-start",
                gap: "18px",
              }}
            >
              <div
                style={{
                  width:
                    "191px",
                  height:
                    "48px",
                  padding:
                    "16px 8px",
                  boxSizing:
                    "border-box",
                  display:
                    "flex",
                  alignItems:
                    "center",
                  flexShrink: 0,
                }}
              >
                <span
                  style={{
                    fontSize:
                      "22px",
                    fontWeight: 500,
                    color:
                      "#FF4A0D",
                    lineHeight: 1,
                    whiteSpace:
                      "nowrap",
                  }}
                >
                  {averageBpm} BPM
                </span>
              </div>

              <div
                style={{
                  display:
                    "flex",
                  alignItems:
                    "center",
                  gap: "6px",
                  paddingTop:
                    "14px",
                }}
              >
                <button
                  style={
                    arrowStyle
                  }
                >
                  ‹
                </button>

                <span
                  style={{
                    fontSize:
                      "12px",
                    color:
                      "#444",
                    whiteSpace:
                      "nowrap",
                  }}
                >
                  {dateRange}
                </span>

                <button
                  style={
                    arrowStyle
                  }
                >
                  ›
                </button>
              </div>
            </div>

            <p
              style={{
                margin: 0,
                paddingLeft:
                  "8px",
                fontSize:
                  "12px",
                color:
                  "#777777",
              }}
            >
              Fréquence
              cardiaque
              moyenne
            </p>
          </div>

          {/* BPM CHART */}
          <div
            style={{
              width:
                "468px",
              height:
                "307px",
              margin:
                "32px 0 0 0",
            }}
          >
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
                  tickLine={
                    false
                  }
                  axisLine={{
                    stroke:
                      "#8E8E8E",
                  }}
                  tickMargin={
                    24
                  }
                />

                <YAxis
                  domain={[
                    130,
                    190,
                  ]}
                  ticks={[
                    130,
                    145,
                    160,
                    175,
                    190,
                  ]}
                  tick={{
                    fill:
                      "#777777",
                    fontSize: 10,
                  }}
                  tickLine={
                    false
                  }
                  axisLine={{
                    stroke:
                      "#8E8E8E",
                  }}
                  width={
                    34
                  }
                  tickMargin={
                    9
                  }
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
                        height - 3
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
                        height - 3
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

          {/* LEGEND */}
          <div
            style={{
              position:
                "absolute",
              left: "52px",
              bottom:
                "40px",
              fontSize:
                "12px",
              color:
                "#777777",
              display:
                "flex",
              alignItems:
                "center",
              gap: "14px",
            }}
          >
            <span>
              <span
                style={{
                  color:
                    "#F7C0B4",
                }}
              >
                ●
              </span>{" "}
              Min
            </span>

            <span>
              <span
                style={{
                  color:
                    "#FF4A0D",
                }}
              >
                ●
              </span>{" "}
              Max BPM
            </span>

            <span>
              <span
                style={{
                  color:
                    "#284BFF",
                }}
              >
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