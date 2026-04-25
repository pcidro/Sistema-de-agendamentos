import React, { useState, type PropsWithChildren } from "react";
import type { Appointment } from "../types";

interface iAppointmentContext {
  bookAppointment: (appointment: Appointment) => void;
  appointments: Appointment[];
}

const AppointmentsContext = React.createContext<iAppointmentContext | null>(
  null,
);

export const Appointments = () => {
  const context = React.useContext(AppointmentsContext);
  if (!context) throw new Error("useAuth deve estar dentro do AuthProvider");
  return context;
};

export const AppointmentsProvider = ({ children }: PropsWithChildren) => {
  const [appointments, setAppointment] = useState<Appointment[]>(() => {
    const savedAppointment = localStorage.getItem("@appointment");
    return savedAppointment ? JSON.parse(savedAppointment) : [];
  });

  React.useEffect(() => {
    localStorage.setItem("@appointment", JSON.stringify(appointments));
  }, [appointments]);

  function bookAppointment(newAppointment: Appointment) {
    setAppointment((prev) => [...prev, newAppointment]);
  }

  return (
    <AppointmentsContext.Provider
      value={{
        appointments,
        bookAppointment,
      }}
    >
      {children}
    </AppointmentsContext.Provider>
  );
};

export default Appointments;
