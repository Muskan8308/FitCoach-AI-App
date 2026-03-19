import { useEffect, useState } from "react";
import { supabase } from "./supabase";
import WorkoutForm from "./components/WorkoutForm";
import WorkoutList from "./components/WorkoutList";
import FloatingAI from './components/FloatingAI'
import AIBox from "./components/AIBox";
import Stats from './components/Stats';

function App() {
  const [workouts, setWorkouts] = useState([]);

  const fetchWorkouts = async () => {
    const { data, error } = await supabase
      .from("workouts")
      .select("*")
      .order("date", { ascending: false });

    if (!error) setWorkouts(data);
  };

  useEffect(() => {
    fetchWorkouts();
  }, []);

    return (
      <div className="min-h-screen bg-[#111827] text-white p-6">
        <h1 className="text-3xl text-center text-[#0ea5e9] mb-2">
          FitCoach AI
        </h1>

        {/* FLEX CONTAINER */}
        <div className="flex flex-col md:flex-row gap-6">
          {/* LEFT SIDE - 70% */}
          <div className="w-full md:w-[70%] flex flex-col gap-6">
            <WorkoutForm fetchWorkouts={fetchWorkouts} />
            <WorkoutList workouts={workouts} />
          </div>

          {/* RIGHT SIDE - 30% */}
          <div className="w-full md:w-[30%] flex flex-col gap-6">
            <Stats workouts={workouts} />
            <AIBox workouts={workouts} />
          </div>

          <FloatingAI/>
        </div>
      </div>
    );
  };

export default App;
