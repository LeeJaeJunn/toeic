import { useState } from "react"

export default function Word({ word: w, onChanged }) {
  const [word, setWord] = useState(w)
  const [isShow, setIsShow] = useState(false)
  const [isDone, setIsDone] = useState(word.isDone)

  const handleOnClickShow = () => {
    setIsShow(!isShow)
  }
  const handleOnClickIsDone = () => {
    //setIsDone(!isDone)
    fetch(`http://localhost:3001/words/${word.id}`,{
      method : "put",
      headers : {
        "Content-Type" : "application/json",
      },
      body: JSON.stringify({
        ...word,
        isDone: !isDone,
      }),
    }).then(res => {
      if (res.ok) {
        setIsDone(!isDone)
      } 
    })
    onChanged();
  }

  const handleOnClickDelete = () => {
    if (window.confirm("삭제 하시겠습니까?")) {
      fetch(`http://localhost:3001/words/${word.id}`, {
        method : "DELETE"
      }).then(res => {
        if(res.ok){
          // setWord( {id:0} )
        }
      })
    }
    onChanged();
  }

  // if (word.id === 0) {
  //   return null
  // }

  return(
    <div
      className={isDone ? "h-10 flex items-center justify-around outline outline-black bg-black" : "h-10 flex items-center justify-around outline outline-black"}>
      <input type="checkbox" checked={isDone} onChange={handleOnClickIsDone} />

      <h1>{word.eng}</h1>
      <h1>{isShow && word.kor}</h1>
          
      <div className="space-x-3 flex items-center">
        <button onClick={handleOnClickShow} className="bg-green-500">
          <h1>뜻 {isShow ? '숨기기' : '보기'}</h1>
        </button>
        <button onClick={handleOnClickDelete} className="bg-red-500">
          <h1>삭제</h1>
        </button>
      </div>
    </div>
  )
}