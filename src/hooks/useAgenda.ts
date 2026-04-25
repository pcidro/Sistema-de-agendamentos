import { useState } from "react";
import Appointments from "../context/AppointmentsContext";

const useAgenda = () => {
  const [agendaDate, setAgendaDate] = useState<string | null>(null);
  const { appointments } = Appointments();

  const morningAppointments = appointments.filter(
    (appointment) =>
      appointment.period === "morning" && appointment.date === agendaDate,
  );

  const afternoonAppointments = appointments.filter(
    (appointment) =>
      appointment.period === "afternoon" && appointment.date === agendaDate,
  );

  const eveningAppointments = appointments.filter(
    (appointment) =>
      appointment.period === "evening" && appointment.date === agendaDate,
  );

  return {
    eveningAppointments,
    afternoonAppointments,
    morningAppointments,
    agendaDate,
    setAgendaDate,
  };
};

export default useAgenda;
