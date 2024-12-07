// import React, { useState } from "react";
// import api from "../api"; // Import the API helper
// import "./ActiveBooking.css";

// const ActiveBooking = ({ booking, onCancel, onViewProfile }) => {
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState(null);

//   const token = localStorage.getItem("token"); // Retrieve token from localStorage

//   // Handle cancel booking
//   const handleCancelBooking = async () => {
//     if (!booking) return;
//     setIsLoading(true);
//     try {
//       const response = await api.cancelBooking(booking.id, token); // Cancel booking API call
//       if (response.success) {
//         onCancel(booking.id); // Update parent state to reflect the canceled booking
//         setError(null); // Clear any previous errors
//       } else {
//         setError(response.message); // Display error message
//       }
//     } catch (err) {
//       setError("Error canceling booking. Please try again.");
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   // Handle view profile
//   const handleViewProfile = async () => {
//     if (!booking) return;
//     setIsLoading(true);
//     try {
//       const response = await api.getProfile(token); // Fetch user profile
//       if (response.success) {
//         onViewProfile(response.data); // Pass profile data to parent component
//       } else {
//         setError(response.message); // Display error message
//       }
//     } catch (err) {
//       setError("Error fetching profile. Please try again.");
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className="center-container">
//       {booking ? (
//         <div className="booking-info">
//           <h3>Active Booking</h3>
//           <p><strong>Driver:</strong> {booking.driver}</p>
//           <p><strong>From:</strong> {booking.from}</p>
//           <p><strong>Destination:</strong> {booking.destination}</p>
//           <p><strong>Time:</strong> {booking.time}</p>
//           <p><strong>Total Passengers:</strong> {booking.totalPassengers}</p>

//           {/* Loading indicator */}
//           {isLoading && <p>Loading...</p>}

//           {/* Error message */}
//           {error && <p className="error">{error}</p>}

//           <button
//             className="cancel-button"
//             onClick={handleCancelBooking}
//             disabled={isLoading}
//           >
//             Cancel Booking
//           </button>
//           {!booking.isCreatedByUser && (
//             <button
//               className="profile-button"
//               onClick={handleViewProfile}
//               disabled={isLoading}
//             >
//               View Profile
//             </button>
//           )}
//         </div>
//       ) : (
//         <p>No active booking.</p>
//       )}
//     </div>
//   );
// };

// export default ActiveBooking;
import React, { useState, useEffect } from "react";
import api from "./api"; // Import the API helper
import "./ActiveBooking.css";

const ActiveBooking = ({ booking, onCancel, onViewProfile }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // Handle cancel booking
  const handleCancelBooking = async () => {
    if (!booking) return;
    setIsLoading(true);
    try {
      const token = localStorage.getItem("token"); // Get token from localStorage (adjust if needed)
      const response = await api.cancelBooking(booking.id, token); // Cancel booking API call
      if (response.success) {
        onCancel(booking.id); // Call the onCancel function to update parent state
        setError(null); // Clear previous error if any
      } else {
        setError(response.message); // Set error message
      }
    } catch (error) {
      setError("Error canceling booking. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  // Handle view profile (assuming it shows the driver's profile)
  const handleViewProfile = async () => {
    if (!booking) return;
    setIsLoading(true);
    try {
      const token = localStorage.getItem("token"); // Get token from localStorage
      const response = await api.getProfile(token); // Fetch user profile API call
      if (response.success) {
        onViewProfile(response.data); // Pass profile data to parent
      } else {
        setError(response.message); // Show error if response unsuccessful
      }
    } catch (error) {
      setError("Error fetching profile. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="center-container">
      {booking ? (
        <div className="booking-info">
          <h3>Active Booking</h3>
          <p><strong>Driver:</strong> {booking.driver}</p>
          <p><strong>From:</strong> {booking.from}</p>
          <p><strong>Destination:</strong> {booking.destination}</p>
          <p><strong>Time:</strong> {booking.time}</p>
          <p><strong>Total Passengers:</strong> {booking.totalPassengers}</p>

          {/* Loading indicator */}
          {isLoading && <p>Loading...</p>}

          {/* Error message */}
          {error && <p className="error">{error}</p>}

          <button className="cancel-button" onClick={handleCancelBooking} disabled={isLoading}>
            Cancel Booking
          </button>
          {!booking.isCreatedByUser && (
            <button className="profile-button" onClick={handleViewProfile} disabled={isLoading}>
              View Profile
            </button>
          )}
        </div>
      ) : (
        <p>No active booking.</p>
      )}
    </div>
  );
};

export default ActiveBooking;