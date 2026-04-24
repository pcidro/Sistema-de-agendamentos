import AgendaDateSelector from "./AgendaDateSelector";
import AgendaPeriodSelection from "./AgendaPeriodSelection";

const SchedulePanel = () => {
  return (
    <div className="py-2">
      <div className="relative flex flex-col md:flex-row md:items-start justify-between mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold mb-2 text-purple-500">Agenda</h1>
          <p className="text-zinc-400">
            Consulte os seus cortes de cabelo agendados
          </p>
        </div>
        <AgendaDateSelector />
      </div>

      <AgendaPeriodSelection />
    </div>
  );
};

export default SchedulePanel;
