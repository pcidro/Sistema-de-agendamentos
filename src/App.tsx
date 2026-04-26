import Header from "./components/layout/Header";
import { AppointmentsProvider } from "./context/AppointmentsContext";
import { Toaster } from "react-hot-toast";
import SchedulingForm from "./modules/booking/SchedulingForm";
import SchedulePanel from "./modules/schedule/SchedulePanel";

const App = () => {
  return (
    <AppointmentsProvider>
      <Toaster
        position="top-center"
        reverseOrder={false}
        gutter={8}
        toasterId="default"
        toastOptions={{
          duration: 5000,
          removeDelay: 1000,
          style: {
            background: "#363636",
            color: "#fff",
          },

          success: {
            duration: 3000,
            iconTheme: {
              primary: "green",
              secondary: "black",
            },
          },
        }}
      />
      <div className="min-h-screen bg-[#0f0f17]">
        <Header />
        <main className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 p-6">
          <section className="flex-1">
            <SchedulingForm />
          </section>

          <section className="flex-1 bg-zinc-900/50 border border-zinc-800 p-8 rounded-3xl shadow-2xl">
            <SchedulePanel />
          </section>
        </main>
      </div>
    </AppointmentsProvider>
  );
};

export default App;
