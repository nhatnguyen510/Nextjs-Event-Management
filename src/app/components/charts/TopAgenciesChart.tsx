import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import { Event } from "../../../../lib/types/types";

interface TopAgenciesChartProps {
  events: Event[];
  agencies: any[];
}

const TopAgenciesChart: React.FC<TopAgenciesChartProps> = ({
  events,
  agencies,
}) => {
  const barChartRef = useRef<HTMLCanvasElement | null>(null);
  const barChartInstanceRef = useRef<Chart | null>(null);

  useEffect(() => {
    if (barChartRef.current) {
      if (barChartInstanceRef.current) {
        barChartInstanceRef.current.destroy();
      }
      const ctx = barChartRef.current.getContext("2d");

      // Process the data to aggregate agencies and their attendees
      const agencyData: Record<string, { events: number; attendees: number }> =
        {};
      events.forEach((event) => {
        // get agency name from agency id
        const agencyName = agencies.find(
          (agency) => agency.id === event.agency
        )?.name;

        if (!agencyData[agencyName]) {
          agencyData[agencyName] = {
            events: 1,
            attendees: event.attendees.length,
          };
        } else {
          agencyData[agencyName].events++;
          agencyData[agencyName].attendees += event.attendees.length;
        }
      });

      // Sort agencies by the number of attendees
      const sortedAgencies = Object.keys(agencyData).sort(
        (a, b) => agencyData[b].attendees - agencyData[a].attendees
      );

      const labels = sortedAgencies;
      const eventCounts = sortedAgencies.map(
        (agency) => agencyData[agency].events
      );
      const attendeeCounts = sortedAgencies.map(
        (agency) => agencyData[agency].attendees
      );

      const chartData = {
        labels,
        datasets: [
          {
            label: "Tổng số sự kiện",
            data: eventCounts,
            backgroundColor: "rgba(75, 192, 192, 0.5)",
          },
          {
            label: "Tổng số người tham gia",
            data: attendeeCounts,
            backgroundColor: "rgba(255, 99, 132, 0.5)",
          },
        ],
      };

      if (ctx) {
        barChartInstanceRef.current = new Chart(ctx, {
          type: "bar",
          data: chartData,
          options: {
            indexAxis: "y", // Set the index axis to y for horizontal-like effect
            scales: {
              x: {
                beginAtZero: true,
              },
              y: {
                stacked: true,
              },
            },
            plugins: {
              legend: {
                position: "right",
                labels: {
                  font: {
                    size: 16,
                  },
                },
              },
              title: {
                display: true,
                text: "Top đơn vị tổ chức sự kiện nhiều nhất",
                font: {
                  size: 20,
                },
              },
            },
            responsive: true,
          },
        });
      }
    }
  }, [events]);

  return <canvas ref={barChartRef} />;
};

export default TopAgenciesChart;
