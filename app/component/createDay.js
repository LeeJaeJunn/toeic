export default function CreateDay({ days }) {

  const addDay = () => {
    fetch(`http://localhost:3001/days`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        day: Number(days.length + 1)
      })
    }).then(res => {
      if (res.ok) {
        alert("생성이 완료 되었습니다")
      }
    })
  }

  return(
    <form className="text-black">
      <h1>현재 일수: {days.length}일</h1>
      <button onClick={addDay} className="bg-blue-500">
        <h1>Day 추가</h1>
      </button>
    </form>
  )
}