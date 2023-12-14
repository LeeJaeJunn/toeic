'use client'
import { useEffect, useState } from "react"
import Header from "./component/header"
import DayList from "./component/dayList"
import Day from "./component/day"
import CreateWord from "./component/createWord"
import CreateDay from "./component/createDay"

const useFetch = (url) => {
  const [data, setData] = useState([])

  const fetchData = () => {
    fetch(url)
    .then(res => {
      return res.json()
    })
    .then(data => {
      setData(data)
    })
  }

  useEffect(() => {
    fetchData();
  }, [url])
  return { data, fetchData }
}

export default function Home() {
  const [selected, setSelected] = useState(0);
  const {data: days, fetchData: fetchDays} = useFetch("http://localhost:3001/days")
  const {data: words, fetchData: fetchWords} = useFetch("http://localhost:3001/words")

  // const [days, setDays ] = useState([]);
  // const [words, setWords] = useState([]);

  // const fetchDays = () => {
  //   fetch("http://localhost:3001/days")
  //     .then(res => {
  //       return res.json()
  //     })
  //     .then(data => {
  //       setDays(data)
  //     })
  // }

  // const fetchWords = () => {
  //   fetch("http://localhost:3001/words")
  //     .then(res => {
  //       return res.json()
  //     })
  //     .then(data => {
  //       setWords(data)
  //     })
  // }

  // useEffect(() => {
  //   fetchDays();
  //   fetchWords();
  // }, []);

  const handleClickMenu = (index) => {
    // console.log("CLICK", index);
    setSelected(index);
  }

  const handleChanged = () => {
    fetchDays();
    fetchWords();
  }

  return (
    <div className="min-h-screen bg-white px-10 flex flex-col space-y-8">
      <Header onClick={handleClickMenu} />
      {selected === -2 ? 
      (<CreateDay days={days} />) :
      selected === -1 ?
      (<CreateWord days={days} />) :
      selected === 0 ? 
      (<DayList onClick={handleClickMenu} data={days} />)
      : (<Day selected={selected} data={words} onChanged={handleChanged}/>)
      }
    </div>
  )
}