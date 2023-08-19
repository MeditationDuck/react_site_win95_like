const live_data = [
  {
    name: "Tokyo Dorm Live",
    description: "Tokyo Dorm Live is a live st  ",
    date: "2021-08-01",
    time_from: "20:00",
    time_to: "21:00",
    link: "https://www.youtube.com/watch?v=1Q8fG0TtVAY",
  },
  {
    name: "Fukuoka Night Club",
    description: "We do DJ at Fukuoka Night Club also",
    date: "2021-08-01",
    time_from: "20:00",
    time_to: "21:00",
    link: "https://www.youtube.com/watch?v=1Q8fG0TtVAY",
  },
  {
    name: "Fukuoka Night Club",
    description: "We do DJ at Fukuoka Night Club also",
    date: "2021-08-01",
    time_from: "20:00",
    time_to: "21:00",
    link: "https://www.youtube.com/watch?v=1Q8fG0TtVAY",
  },
  {
    name: "Fukuoka Night Club",
    description: "We do DJ at Fukuoka Night Club also",
    date: "2021-08-01",
    time_from: "20:00",
    time_to: "21:00",
    link: "https://www.youtube.com/watch?v=1Q8fG0TtVAY",
  }
]


const LiveSchedule = () => {
  return (
    <div className="w-screen min-h-screen p-8 flex flex-col items-center space-y-8">
      {live_data.map((event, index) => (
        <div key={index} className="w-full max-w-2xl bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">{event.name}</h2>
          <p className="text-gray-700 mb-4">{event.description}</p>
          <div className="flex justify-between">
            <div>
              <p className="font-semibold">{new Date(event.date).toLocaleDateString()}</p>
              <p className="text-gray-600">{event.time_from} - {event.time_to}</p>
            </div>
            <a href={event.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              Watch Live
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default LiveSchedule;

