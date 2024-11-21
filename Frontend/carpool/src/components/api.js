const API_BASE_URL = 'http://localhost:5000'; 


export const fetchRides = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/rides`);
    if (!response.ok) throw new Error('Failed to fetch rides');
    return await response.json();
  } catch (error) {
    console.error('Error fetching rides:', error);
    return [];
  }
};

export const createRide = async (ride) => {
  try {
    const response = await fetch(`${API_BASE_URL}/rides`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(ride),
    });
    if (!response.ok) throw new Error('Failed to create ride');
    return await response.json();
  } catch (error) {
    console.error('Error creating ride:', error);
    return null;
  }
};
