import React, { useRef, useEffect } from "react";
import Chart from "chart.js/auto";

interface BarChartProps {
  title: string;
  eventCountsByMonth: Record<
    string,
    { ongoing: number; upcoming: number; past: number }
  >;
}

const BarChart: React.FC<BarChartProps> = ({ title, eventCountsByMonth }) => {
  const chartRef = useRef<HTMLCanvasElement | null>(null);
  const chartInstanceRef = useRef<Chart | null>(null);

  useEffect(() => {
    if (chartRef.current) {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }

      const ctx = chartRef.current.getContext("2d");
      if (ctx) {
        const months = Object.keys(eventCountsByMonth);

        const ongoingData = months.map(
          (month) => eventCountsByMonth[month].ongoing
        );
        const upcomingData = months.map(
          (month) => eventCountsByMonth[month].upcoming
        );
        const pastData = months.map((month) => eventCountsByMonth[month].past);

        chartInstanceRef.current = new Chart(ctx, {
          type: "bar",
          data: {
            labels: months,
            datasets: [
              {
                label: "Sự kiện đang diễn ra",
                data: ongoingData,
                backgroundColor: "rgba(75, 192, 192, 0.6)",
                borderWidth: 1,
              },
              {
                label: "Sự kiện sắp diễn ra",
                data: upcomingData,
                backgroundColor: "rgba(255, 99, 132, 0.6)",
                borderWidth: 1,
              },
              {
                label: "Sự kiện đã kết thúc",
                data: pastData,
                backgroundColor: "rgba(54, 162, 235, 0.6)",
                borderWidth: 1,
              },
            ],
          },
          options: {
            plugins: {
              title: {
                display: true,
                text: title,
                font: {
                  size: 24,
                },
                color: "#000",
              },
              subtitle: {
                display: true,
                text: "Thống kê số lượng sự kiện theo tháng",
                font: {
                  size: 18,
                },
              },
            },
            scales: {
              y: {
                beginAtZero: true,
              },
            },
          },
        });
      }
    }
  }, [title, eventCountsByMonth]);

  return <canvas ref={chartRef} />;
};

export default BarChart;
