import Word from "./word"


export default function Day({ selected, data, onChanged }) {
  const wordList = data.filter(word => word.day === selected)

  if (selected === 0) {
    return null
  }

  const handleChanged = () => {
    onChanged();
  }

  return (
    <div className="flex flex-col space-y-5 text-black">
      {wordList.map(word => (
        <Word key={word.id} word={word} onChanged={handleChanged}/>
      ))}
    </div>
  )
}