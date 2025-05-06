import React, { useEffect, useState } from "react";

export default function Dashboard() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/data/mock_data.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div style={{ padding: "2rem", fontFamily: "Arial, sans-serif" }}>
      <h1>Car Telematics Dashboard</h1>
      <table style={{ width: "100%", borderCollapse: "collapse", marginTop: "1rem" }}>
        <thead>
          <tr>
            <th>Time</th>
            <th>Speed (kph)</th>
            <th>RPM</th>
            <th>Fuel Level (%)</th>

          </tr>
        </thead>
        <tbody>
          {data.map((entry, index) => (
            <tr key={index}>
              <td>{new Date(entry.timestamp).toLocaleTimeString()}</td>
              <td>{entry.speed_kph}</td>
              <td>{entry.rpm}</td>
              <td>{entry.fuel_level_percent}</td>
              <td>{entry.engine_temp_c}</td>
              <td>{entry.battery_voltage}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
