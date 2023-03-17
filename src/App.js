import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./App.css";

function App() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedService, setSelectedService] = useState("");

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleServiceChange = (event) => {
    setSelectedService(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(`Date: ${selectedDate}, Service: ${selectedService}`);
  };

  return (
    <div className="App">
      <h1>Villcan Barbería</h1>

      <div className="calendar-container">
        <Calendar onChange={handleDateChange} value={selectedDate} />
      </div>

      {selectedDate && (
        <div className="service-list-container">
          <h2>Servicios disponibles para {selectedDate.toLocaleDateString()}</h2>

          <form onSubmit={handleFormSubmit}>
            <div className="form-group">
              <label htmlFor="services">Selecciona un servicio:</label>
              <select
                id="services"
                value={selectedService}
                onChange={handleServiceChange}
              >
                <option value="">Selecciona un servicio</option>
                <option value="Corte de pelo">Corte de pelo</option>
                <option value="Afeitado de barba">Afeitado de barba</option>
                <option value="Corte y afeitado">Corte y afeitado</option>
              </select>
            </div>

            <button type="submit">Reservar cita</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default App;
