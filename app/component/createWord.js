import { useRef } from "react"

export default function CreateWord({ days, onClick }) {
  
  const onSubmit = (e) => {
    // e.preventDefault()
    // console.log(engRef.current.value)
    // console.log(korRef.current.value)
    // console.log(dayRef.current.value)

    fetch(`http://localhost:3001/words/`, {
      method: "POST",
      headers: {
        "Content-Type" : "application/json"
      },
      body: JSON.stringify({
        day : Number(dayRef.current.value),
        eng : engRef.current.value,
        kor : korRef.current.value,
        isDone : false
      })
    }).then(res => {
      if(res.ok) {
        alert("생성이 완료 되었습니다")
      }
    })
  }

  const engRef = useRef(null)
  const korRef = useRef(null)
  const dayRef = useRef(null)

  return(
    <form onSubmit={onSubmit} className="text-black flex flex-col space-y-3 items-start">
      <div>
        <h1>Eng</h1>
        <input type="text" placeholder="computer" ref={engRef} />
      </div>
      <div>
        <h1>Kor</h1>
        <input type="text" placeholder="컴퓨터" ref={korRef} />
      </div>
      <div>
        <h1>Day</h1>
        <select ref={dayRef}>
          {days.map(data => (
            <option key={data.id}>{data.day}</option>
          ))}
        </select>
      </div>
      <button className="bg-green-500">
        <h1>저장</h1>
      </button>
    </form>
  )
}