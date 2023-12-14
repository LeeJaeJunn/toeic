'use client'

export default function Header({ onClick }) {
  const addTodo =() => {
    console.log('추가하기')
  }

  return(
    <div className="h-20 px-4 flex items-center justify-between bg-green-300">
      <button onClick={() => onClick(0)}>
      <h1 className="text-black">토익 영단어</h1>
      </button>

      <div className="flex space-x-4">
        <button className="bg-green-500">
          <h1 onClick={() => onClick(-1)} className="text-black">단어 추가</h1>
        </button>
        <button onClick={() => onClick(-2)} className="bg-green-500">
          <h1 className="text-black">Day 추가</h1>
        </button>
      </div>
    </div>
  )

}