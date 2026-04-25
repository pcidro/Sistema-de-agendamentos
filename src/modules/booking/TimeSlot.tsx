import { TIME_SLOTS } from "../../utils/TimeSlots";
interface iPropsTimeSlot {
  selectedDate: string | null;
  selectedHour: string | null;
  setSelectedHour: React.Dispatch<React.SetStateAction<string | null>>;
}

const sections = [
  { title: "Manhã", data: TIME_SLOTS.morning },
  { title: "Tarde", data: TIME_SLOTS.afternoon },
  { title: "Noite", data: TIME_SLOTS.evening },
];

const TimeSlot = ({
  selectedDate,
  selectedHour,
  setSelectedHour,
}: iPropsTimeSlot) => {
  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold text-zinc-200 mb-4">
        Horários disponíveis
      </h2>
      <div className="space-y-6">
        {sections.map((section) => (
          <div key={section.title}>
            <h3 className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-3">
              {section.title}
            </h3>
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
              {section.data.map((time) => (
                <button
                  key={time}
                  type="button"
                  className="bg-zinc-800/50 border border-zinc-700 text-zinc-300 py-2.5 rounded-lg text-sm font-medium hover:border-purple-500 hover:text-purple-400 hover:bg-zinc-800 transition-all cursor-pointer active:scale-95"
                >
                  {time}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TimeSlot;
