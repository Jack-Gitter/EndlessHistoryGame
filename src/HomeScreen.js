import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Input } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";

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
        <Input onChange={(e) => setMonth(e.target.value)}></Input>
        <Input onChange={(e) => setDay(e.target.value)}></Input>
        <Button onClick={startGame}>start!</Button>
    </>
  );
}

export default HomeScreen;