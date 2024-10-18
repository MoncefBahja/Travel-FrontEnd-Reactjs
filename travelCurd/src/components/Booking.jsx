import { useState } from 'react';

const Booking = () => {
  const [destination, setDestination] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [travelers, setTravelers] = useState(1);
  const [specialRequest, setSpecialRequest] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle booking submission logic here (e.g., send data to the backend)
    console.log({
      destination,
      startDate,
      endDate,
      travelers,
      specialRequest,
    });
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Book Your Trip</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="destination">Destination</label>
          <input
            type="text"
            className="form-control"
            id="destination"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            placeholder="Enter destination"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="startDate">Start Date</label>
          <input
            type="date"
            className="form-control"
            id="startDate"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="endDate">End Date</label>
          <input
            type="date"
            className="form-control"
            id="endDate"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="travelers">Number of Travelers</label>
          <input
            type="number"
            className="form-control"
            id="travelers"
            value={travelers}
            onChange={(e) => setTravelers(e.target.value)}
            min="1"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="specialRequest">Special Requests</label>
          <textarea
            className="form-control"
            id="specialRequest"
            value={specialRequest}
            onChange={(e) => setSpecialRequest(e.target.value)}
            placeholder="Any special requests?"
            rows="3"
          ></textarea>
        </div>

        <button type="submit" className="btn btn-primary btn-block">
          Book Now
        </button>
      </form>
    </div>
  );
};

export default Booking;
