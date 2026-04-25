import Appointments from "../../context/AppointmentsContext";
import Delete from "../../assets/svgs/delete.svg";

interface iScheduleCard {
  clientName: string;
  appointmentTime: string;
  appointmentId: string;
}

const ScheduleCard = ({
  clientName,
  appointmentTime,
  appointmentId,
}: iScheduleCard) => {
  const { removeAppointment } = Appointments();
  return (
    <div className="flex items-center justify-between bg-zinc-800 border border-zinc-700 p-4 rounded-lg shadow-sm mb-4">
      <span className="font-semibold text-lg text-purple-400">
        {appointmentTime}
      </span>
      <p className="text-xl text-zinc-100">{clientName}</p>
      <button
        className="cursor-pointer"
        onClick={() => removeAppointment(appointmentId)}
      >
        <img src={Delete} />
      </button>
    </div>
  );
};

export default ScheduleCard;
