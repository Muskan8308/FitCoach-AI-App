import { useState } from "react";
import { supabase } from "../supabase";

export default function WorkoutForm({ fetchWorkouts }) {
  const [activity, setActivity] = useState("");
  const [duration, setDuration] = useState("");
const [date, setDate] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

   const { error } = await supabase.from("workouts").insert([
     {
       activity,
       duration: parseInt(duration),
       date: date || new Date(),
     },
   ]);

   if (error) {
     console.log("Insert error:", error);
   } else {
     console.log("Inserted successfully");
     fetchWorkouts && fetchWorkouts();
   }

   setActivity("");
   setDuration("");
  };

  return (
    <div className="bg-[#1f2937] text-white p-6 rounded-xl shadow-md w-full mx-auto mt-6">
      <h2 className="text-xl font-semibold mb-4 text-[#0ea5e9]">Add Workout</h2>

      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input
          type="text"
          placeholder="Activity (e.g. Running)"
          value={activity}
          onChange={(e) => setActivity(e.target.value)}
          className="p-2 rounded bg-gray-700 border border-gray-700 focus:outline-none focus:border-[#0ea5e9]"
        />

        <input
          type="number"
          placeholder="Duration (mins)"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
          className="p-2 rounded bg-gray-700 border border-gray-700 focus:outline-none focus:border-[#0ea5e9]"
        />

        <input
          type="date"
          autoContrast = {true}
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="p-2 rounded bg-gray-700 border border-gray-700"
        />

        <button
          type="submit"
          className="bg-[#0ea5e9] hover:bg-blue-600 text-white py-2 rounded font-medium"
        >
          Add Workout
        </button>
      </form>
    </div>
  );
}
