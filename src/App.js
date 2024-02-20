import HomeScreen from './HomeScreen';
import { Route, Routes } from 'react-router-dom';
import GameScreen from './GameScreen';
import { ChakraProvider } from '@chakra-ui/react';
const App = () => {
  return (
    <ChakraProvider>
      <Routes>
        <Route path="/" element={<HomeScreen/>}/>
        <Route path="/game/:day/:month" element={<GameScreen/>}></Route>
      </Routes>
    </ChakraProvider>
  );
}

export default App;
