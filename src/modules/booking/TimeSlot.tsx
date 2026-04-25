import { useEffect } from "react";
import { TIME_SLOTS } from "../../utils/TimeSlots";
import isTimeSlotPast from "../../utils/isTimeSlotPast";

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
  useEffect(() => {
    if (!selectedDate || !selectedHour) return;
    const [year, month, day] = selectedDate.split("-").map(Number);
    const date = new Date(year, month - 1, day);
    const isPast = isTimeSlotPast(date, selectedHour);

    if (isPast) {
      setSelectedHour(null);
    }
  }, [selectedDate, selectedHour, setSelectedHour]);

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
              {section.data.map((time) => {
                const isSelected = selectedHour === time;
                let isPast = false;
                if (selectedDate) {
                  const [year, month, day] = selectedDate
                    .split("-")
                    .map(Number);
                  const date = new Date(year, month - 1, day);

                  isPast = isTimeSlotPast(date, time);
                }
                return (
                  <button
                    disabled={isPast}
                    key={time}
                    onClick={() => setSelectedHour(time)}
                    type="button"
                    className={`
        py-2.5 rounded-lg text-sm font-medium transition-all cursor-pointer active:scale-95 border
        ${
          isSelected
            ? "bg-purple-600 border-purple-400 text-white"
            : "bg-zinc-800/50 border-zinc-700 text-zinc-300 hover:border-purple-500 hover:text-purple-400 hover:bg-zinc-800"
        }
        ${isPast ? "opacity-50 cursor-not-allowed" : ""}
      `}
                  >
                    {time}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TimeSlot;
