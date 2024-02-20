import { useNavigate } from "react-router-dom";
import { useState } from "react";

const HomeScreen = () => {
    const naviagte = useNavigate()
    const [month, setMonth] = useState(0)
    const [day, setDay] = useState(0)

    const startGame = () => {
      console.log(day)
      console.log(month)
        naviagte(`game/${day}/${month}`)
    }

  return (
    <>
        <div> Enter a date, and get events from that day. Try to successfully guess if the next event
          occured before or after the current one!
        </div>
        <input onChange={(e) => setMonth(e.target.value)}></input>
        <input onChange={(e) => setDay(e.target.value)}></input>
        <button onClick={startGame}>start!</button>
    </>
  );
}

export default HomeScreen;