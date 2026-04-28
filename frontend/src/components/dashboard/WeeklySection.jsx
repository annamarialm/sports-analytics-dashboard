import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
} from "recharts";

function WeeklySection({
  activity,
}) {
  const completed =
    activity.length;

  const goal = 6;

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
    <section
      style={{
        width: "1052px",
        minheight: "429px",
        display: "flex",
        flexDirection:
          "column",
        gap: "32px",
      }}
    >
      {/* TITLE */}
      <div
        style={{
          width: "1052px",
          height: "55px",
          display: "flex",
          flexDirection:
            "column",
          gap: "9px",
        }}
      >
        <h2
          style={{
            margin: 0,
            fontSize:
              "22px",
            fontWeight: 500,
            color:
              "#111111",
            lineHeight: 1,
          }}
        >
          Cette semaine
        </h2>

        <p
          style={{
            margin: 0,
            fontSize:
              "16px",
            fontWeight: 500,
            color:
              "#707070",
            lineHeight: 1,
          }}
        >
          Du 23/06/2025 au
          30/06/2025
        </p>
      </div>

      {/* CONTENT */}
      <div
        style={{
          display: "flex",
          gap: "32px",
        }}
      >
        {/* LEFT CARD */}
        <div
          style={{
            width: "450px",
            height: "342px",
            padding:
              "16px 38px 32px 38px",
            borderRadius:
              "10px",
            background:
              "#FFFFFF",
            boxShadow:
              "0 4px 84px -40px rgba(157,167,251,0.40)",
            boxSizing:
              "border-box",
            display: "flex",
            flexDirection:
              "column",
            gap: "16px",
          }}
        >
          {/* TOP TEXT */}
          <div
            style={{
              width: "374px",
              height: "97px",
            }}
          >
            <div
              style={{
                display:
                  "flex",
                alignItems:
                  "flex-end",
                gap: "5px",
                marginBottom:
                  "14px",
              }}
            >
              <span
                style={{
                  fontSize:
                    "28px",
                  fontWeight: 600,
                  color:
                    "#0B23F4",
                  lineHeight: 1,
                }}
              >
                x{
                  completed
                }
              </span>

              <span
                style={{
                  fontSize:
                    "16px",
                  fontWeight: 500,
                  color:
                    "#B6BDFC",
                  lineHeight: 1,
                  transform:
                    "translateY(-4px)",
                }}
              >
                sur objectif
                de {goal}
              </span>
            </div>

            <p
              style={{
                margin: 0,
                fontSize:
                  "14px",
                fontWeight: 400,
                color:
                  "#707070",
                lineHeight: 1,
              }}
            >
              Courses
              hebdomadaire
              réalisées
            </p>
          </div>

          {/* DONUT */}
          <div
            style={{
              position:
                "relative",
              width: "306px",
              height: "190px",
              alignSelf:
                "center",
              marginTop: "8px",
            }}
          >
            {/* LEFT LEGEND */}
            <div
              style={{
                position:
                  "absolute",
                left: "12px",
                top: "126px",
                display:
                  "flex",
                alignItems:
                  "center",
                gap: "6px",
                fontSize:
                  "10px",
                fontWeight: 400,
                color:
                  "#707070",
                lineHeight: 1,
                zIndex: 2,
              }}
            >
              <span
                style={{
                  color:
                    "#0B23F4",
                  fontSize:
                    "12px",
                  lineHeight: 1,
                }}
              >
                ●
              </span>

              {completed} réalisées
            </div>

            {/* RIGHT LEGEND */}
            <div
              style={{
                position:
                  "absolute",
                right: "8px",
                top: "26px",
                display:
                  "flex",
                alignItems:
                  "center",
                gap: "6px",
                fontSize:
                  "10px",
                fontWeight: 400,
                color:
                  "#707070",
                lineHeight: 1,
                zIndex: 2,
              }}
            >
              <span
                style={{
                  color:
                    "#B6BDFC",
                  fontSize:
                    "12px",
                  lineHeight: 1,
                }}
              >
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
        <div
          style={{
            width: "572px",
            display: "flex",
            flexDirection:
              "column",
            gap: "32px",
          }}
        >
          {/* CARD 1 */}
          <div
            style={{
              width: "572px",
              height: "103px",
              padding:
                "20px 30px",
              borderRadius:
                "10px",
              background:
                "#FFFFFF",
              boxShadow:
                "0 4px 84px -40px rgba(157,167,251,0.40)",
              boxSizing:
                "border-box",
              display: "flex",
              flexDirection:
                "column",
              justifyContent:
                "center",
              gap: "19px",
            }}
          >
            <p
              style={{
                margin: 0,
                fontSize:
                  "14px",
                fontWeight: 400,
                color:
                  "#707070",
                lineHeight: 1,
              }}
            >
              Durée
              d'activité
            </p>

            <div
              style={{
                display:
                  "flex",
                alignItems:
                  "flex-end",
                gap: "6px",
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
                }}
              >
                {
                  totalDuration
                }
              </span>

              <span
                style={{
                  fontSize:
                    "16px",
                  fontWeight: 500,
                  color:
                    "#B6BDFC",
                  lineHeight: 1,
                  transform:
                    "translateY(-2px)",
                }}
              >
                minutes
              </span>
            </div>
          </div>

          {/* CARD 2 */}
          <div
            style={{
              width: "572px",
              height: "103px",
              padding:
                "20px 30px",
              borderRadius:
                "10px",
              background:
                "#FFFFFF",
              boxShadow:
                "0 4px 84px -40px rgba(157,167,251,0.40)",
              boxSizing:
                "border-box",
              display: "flex",
              flexDirection:
                "column",
              justifyContent:
                "center",
              gap: "19px",
            }}
          >
            <p
              style={{
                margin: 0,
                fontSize:
                  "14px",
                fontWeight: 400,
                color:
                  "#707070",
                lineHeight: 1,
              }}
            >
              Distance
            </p>

            <div
              style={{
                display:
                  "flex",
                alignItems:
                  "flex-end",
                gap: "6px",
              }}
            >
              <span
                style={{
                  fontSize:
                    "22px",
                  fontWeight: 500,
                  color:
                    "#F4320B",
                  lineHeight: 1,
                }}
              >
                {totalDistance.toFixed(
                  1
                )}
              </span>

              <span
                style={{
                  fontSize:
                    "16px",
                  fontWeight: 500,
                  color:
                    "#FCC1B6",
                  lineHeight: 1,
                  transform:
                    "translateY(-2px)",
                }}
              >
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