// import React from "react";
// import "./CarpoolList.css";

// const CarpoolList = () => {
//   const carpoolData = [
//     { name: "Driver 1", to: "Location", time: "08:00", from: "A" },
//     { name: "Driver 2", to: "Location B", time: "09:30", from: "C" },
//     { name: "Driver 3", to: "Location D", time: "11:00", from: "E" },
//   ];

//   return (
//     <div className="carpool-container">
//       <h2 className="title">Active Bookings</h2>
//       <table className="carpool-table">
//         <thead>
//           <tr>
//             <th>Driver's Name</th>
//             <th>Going To</th>
//             <th>At Time (Hr:Min)</th>
//             <th>From</th>
//           </tr>
//         </thead>
//         <tbody>
//           {carpoolData.map((ride, index) => (
//             <tr key={index}>
//               <td>{ride.name}</td>
//               <td>{ride.to}</td>
//               <td>{ride.time}</td>
//               <td>{ride.from}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default CarpoolList;

// import React from "react";
// import "./CarpoolList.css";

// const Carpool = () => {
//   return (
//     <div className="common-container">
//       <div className="carpool-container">
//         <h1 className="title">Carpool List</h1>
//         {/* CarpoolList component renders the table */}
//         <CarpoolList />
//       </div>
//     </div>
//   );
// };

// export default Carpool;

// CarpoolList.jsx
import React, { useState } from "react";
import "./CarpoolList.css";

const CarpoolList = () => {
  const [rides, setRides] = useState([
    {
      id: 1,
      driver: "John Doe",
      destination: "University",
      time: "8:00 AM",
      date: "2024-11-28",
      seatsAvailable: 3,
    },
    {
      id: 2,
      driver: "Jane Smith",
      destination: "Downtown",
      time: "9:30 AM",
      date: "2024-11-29",
      seatsAvailable: 2,
    },
  ]);

  const handleBookRide = (rideId) => {
    console.log(`Ride ${rideId} booked!`);
    // Placeholder for API integration
  };

  return (
    <div className="carpool-list-container">
      <h2>Available Rides</h2>
      <ul className="ride-list">
        {rides.map((ride) => (
          <li key={ride.id} className="ride-item">
            <div className="ride-info">
              <p><strong>Driver:</strong> {ride.driver}</p>
              <p><strong>Destination:</strong> {ride.destination}</p>
              <p><strong>Time:</strong> {ride.time}</p>
              <p><strong>Date:</strong> {ride.date}</p>
              <p><strong>Seats Available:</strong> {ride.seatsAvailable}</p>
            </div>
            <button
              className="book-button"
              onClick={() => handleBookRide(ride.id)}
            >
              Book Ride
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CarpoolList;



