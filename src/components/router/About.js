import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const About = () => {
  const today = new Date();
  const endDateLimit = new Date(2025, 1, 7);
  const [startDate, setStartDate] = useState(today);
  const [endDate, setEndDate] = useState(endDateLimit);

  const handleStartDateChange = (date) => {
    setStartDate(date);
  };
  const handleEndDateChange = (date) => {
    setEndDate(date);
  };

  return (
    <div>
      <div>
        <label>Start Date:</label>
        <Calendar
          onChange={handleStartDateChange}
          value={startDate}
          selectRange={true}
          minDate={today} 
          maxDate={endDate} 
        />
      </div>
      <div>
        <label>End Date:</label>
        <Calendar
          onChange={handleEndDateChange}
          value={endDate}
          selectRange={true}
          minDate={startDate} 
          maxDate={endDateLimit} 
        />
      </div>
    </div>
  );
};

export default About;
