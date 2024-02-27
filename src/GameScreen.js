import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { Button } from "@chakra-ui/react";
const GameScreen = () => {

    let [data, setData] = useState([])
    let [currentIdx, setCurrentIdx] = useState(0)
    const {day, month} = useParams()
    const toast = useToast()
    const naviagte = useNavigate()

    const shuffle = (array) => { 
      for (let i = array.length - 1; i > 0; i--) { 
        const j = Math.floor(Math.random() * (i + 1)); 
        [array[i], array[j]] = [array[j], array[i]]; 
      } 
      return array; 
    }; 

    const incrementIdx = () => {
      setCurrentIdx(currentIdx+1)
    }

    const tryBefore = () => {
      console.log(data[currentIdx].year)
      console.log(data[currentIdx+1].year)
      if (Number(data[currentIdx].year) <= Number(data[currentIdx+1].year)) {
        incrementIdx()
      } else {
        toast({
          title: 'You Lose!',
          status: 'error',
          duration: 5000,
          isClosable: true,
        })
        naviagte("/")
      }
    }
    
    const tryAfter = () => {
      if (Number(data[currentIdx].year) >= Number(data[currentIdx+1].year)) {
        incrementIdx()
      } else {
        toast({
          title: 'You Lose!',
          status: 'error',
          duration: 5000,
          isClosable: true,
        })
        naviagte("/")
      }
    }

    useEffect(() => {
      const getData = async () => {
        let res = await axios.get(`https://api.wikimedia.org/feed/v1/wikipedia/en/onthisday/all/${day}/${month}`)
        console.log(res.data.events)
        setData(shuffle([...res.data.events]))
      }
      getData()
    }, [day, month])

    return (
      <>
        {data.length > 0 ? 
         <> 
            <div>{data[currentIdx].text} (Year: {data[currentIdx].year})</div>
            <Button onClick={tryBefore}>Before</Button>
            <Button onClick={tryAfter}>After</Button>
            <div>{data[currentIdx+1].text}</div>
            <div>Score : {currentIdx}</div>
        </> : 
        <></>}
      </>
    );
  }
  
  export default GameScreen;