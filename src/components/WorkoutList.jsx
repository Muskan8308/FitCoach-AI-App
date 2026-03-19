export default function WorkoutList({ workouts }) {
  const grouped = {};

  workouts.forEach((w) => {
    const date = new Date(w.date).toLocaleDateString();

    if (!grouped[date]) {
      grouped[date] = [];
    }

    grouped[date].push(w);
  });

  return (
    <div className="w-full mt-4">
      <h2 className="text-lg mb-3 text-[#0ea5e9]">Workout History</h2>

      {Object.keys(grouped).map((date) => (
        <div key={date} className="mb-4">
          <h3 className="text-sm text-gray-400 mb-2">{date}</h3>

          {grouped[date].map((w) => (
            <div
              key={w.id}
              className="bg-[#1f2937] p-3 rounded mb-2 flex justify-between"
            >
              <span>{w.activity}</span>
              <span>{w.duration} min</span>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
