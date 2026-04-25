import moon from "../../assets/svgs/moon.svg";
import sun from "../../assets/svgs/moon.svg";
import coffe from "../../assets/svgs/moon.svg";
import type { Appointment } from "../../types";
import ScheduleCard from "./ScheduleCard";

interface IPeriodSection {
  morningAppointments: Appointment[];
  afternoonAppointments: Appointment[];
  eveningAppointments: Appointment[];
}

const SchedulePeriodSection = ({
  morningAppointments,
  afternoonAppointments,
  eveningAppointments,
}: IPeriodSection) => {
  const PERIODS = [
    {
      label: "Manhã",
      range: "9h-12h",
      icon: sun,
      appointments: morningAppointments,
    },
    {
      label: "Tarde",
      range: "13h-18h",
      icon: coffe,
      appointments: afternoonAppointments,
    },
    {
      label: "Noite",
      range: "19h-21h",
      icon: moon,
      appointments: eveningAppointments,
    },
  ];
  return (
    <ul className="flex flex-col gap-6">
      {PERIODS.map(({ label, range, icon, appointments }) => (
        <li
          key={label}
          className="rounded-xl border border-zinc-800 overflow-hidden shadow-sm"
        >
          <div className="flex items-center justify-between px-4 py-3 bg-zinc-800/50 border-b border-zinc-800">
            <div className="flex items-center gap-3">
              <img src={icon} alt={label} className="w-5 h-5 opacity-80" />
              <span className="text-sm font-bold uppercase tracking-wider text-zinc-200">
                {label}
              </span>
            </div>
            <span className="text-xs font-medium text-zinc-500 bg-zinc-900 px-2 py-1 rounded">
              {range}
            </span>
          </div>

          <div className="px-4 py-6 bg-[#12121a]">
            {appointments.length === 0 && (
              <p className="text-sm text-zinc-600 italic text-center">
                Nenhum agendamento para este período
              </p>
            )}
            {appointments.map((appointment) => (
              <ScheduleCard
                clientName={appointment.clientName}
                appointmentTime={appointment.time}
                appointmentId={appointment.id}
              />
            ))}
          </div>
        </li>
      ))}
    </ul>
  );
};

export default SchedulePeriodSection;
