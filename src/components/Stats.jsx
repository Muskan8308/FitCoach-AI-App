export default function Stats({ workouts }) {
  if (!workouts.length) return null;

  const totalWorkouts = workouts.length;

  const totalMinutes = workouts.reduce((sum, w) => sum + w.duration, 0);

  // Most frequent activity
  const freq = {};
  workouts.forEach((w) => {
    freq[w.activity] = (freq[w.activity] || 0) + 1;
  });

  let mostFrequent = "";
  let max = 0;

  for (let key in freq) {
    if (freq[key] > max) {
      max = freq[key];
      mostFrequent = key;
    }
  }

  // Streak
  const dates = workouts
    .map((w) => new Date(w.date).toDateString())
    .filter((v, i, a) => a.indexOf(v) === i)
    .sort((a, b) => new Date(b) - new Date(a));

  let streak = 1;

  for (let i = 1; i < dates.length; i++) {
    const diff =
      (new Date(dates[i - 1]) - new Date(dates[i])) / (1000 * 60 * 60 * 24);

    if (diff === 1) streak++;
    else break;
  }

  return (
    <div className="bg-[#1f2937] p-6 rounded-xl w-full max-w-md mt-6">
      <h2 className="text-[#0ea5e9] mb-3">Stats Dashboard</h2>

      <p>Total Workouts: {totalWorkouts}</p>
      <p>Total Minutes: {totalMinutes}</p>
      <p>Most Frequent: {mostFrequent}</p>
      <p>Current Streak: {streak} days</p>
    </div>
  );
}
