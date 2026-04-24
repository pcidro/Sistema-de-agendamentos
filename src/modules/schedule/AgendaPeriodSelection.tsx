import moon from "../../assets/moon.svg";
import sun from "../../assets/sun.svg";
import coffe from "../../assets/coffe.svg";

const PERIODS = [
  { label: "Manhã", range: "9h-12h", icon: sun },
  { label: "Tarde", range: "13h-18h", icon: coffe },
  { label: "Noite", range: "19h-21h", icon: moon },
];

const AgendaPeriodSection = () => {
  return (
    <ul className="flex flex-col gap-6">
      {PERIODS.map(({ label, range, icon }) => (
        <li
          key={label}
          className="rounded-xl border border-zinc-800 overflow-hidden shadow-sm"
        >
          {/* Header do Período */}
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

          {/* Lista de Agendamentos */}
          <div className="px-4 py-6 bg-[#12121a]">
            <p className="text-sm text-zinc-600 italic text-center">
              Nenhum agendamento para este período
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default AgendaPeriodSection;
