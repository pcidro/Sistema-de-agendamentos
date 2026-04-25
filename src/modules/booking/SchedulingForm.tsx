import Appointments from "../../context/AppointmentsContext";
import useScheduling from "../../hooks/useScheduling";
import ClientInput from "./ClientInput";
import DatePicker from "./DatePicker";
import TimeSlot from "./TimeSlot";

const SchedulingForm = () => {
  const {
    dateSelected,
    hourSelected,
    clientName,
    setClientName,
    setDateSelected,
    setHourSelected,
    buildAppointment,
    reset,
    isValid,
  } = useScheduling();

  const { bookAppointment } = Appointments();

  function handleSubmit() {
    const newAppointment = buildAppointment();
    bookAppointment(newAppointment);
    reset();
  }

  return (
    <div className="mt-5 w-full max-w-xl mx-auto px-4 py-2">
      <h1 className="text-3xl font-bold mb-2 text-zinc-100">
        Agende um atendimento
      </h1>
      <p className="text-zinc-400 mb-8">
        Selecione data e a hora desejados e informe o nome do cliente
      </p>

      <DatePicker value={dateSelected} onChange={setDateSelected} />

      <TimeSlot
        selectedDate={dateSelected}
        selectedHour={hourSelected}
        setSelectedHour={setHourSelected}
      />

      <ClientInput value={clientName} onChange={setClientName} />

      <button
        onClick={handleSubmit}
        disabled={!isValid}
        className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold uppercase py-3 px-4 rounded-lg transition-all duration-200 cursor-pointer shadow-lg shadow-purple-500/20 active:scale-[0.98] disabled:bg-gray-400
disabled:cursor-not-allowed
disabled:opacity-70"
      >
        Agendar
      </button>
    </div>
  );
};

export default SchedulingForm;
