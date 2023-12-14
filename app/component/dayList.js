

export default function DayList({ onClick, data }) {

  return (
    <div className="flex space-x-10">
      {data.map(day => (
        <button key={day.id} onClick={() => onClick(day.day)} className="bg-blue-300">
          <h1 className="text-black">day {day.day}</h1>
        </button>
      ))}
    </div>
  )
}