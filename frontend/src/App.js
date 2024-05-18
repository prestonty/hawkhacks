import * as React from 'react'

// 1. import `ChakraProvider` component
import { ChakraProvider } from '@chakra-ui/react'
import {
  ChakraBaseProvider,
  extendBaseTheme,
  theme as chakraTheme,
} from '@chakra-ui/react'
import { Heading, Box, Text, Button, ButtonGroup } from '@chakra-ui/react'
import {
  createBrowserRouter,
  RouterProvider,
  BrowserRouter as Router, Routes, Route
} from "react-router-dom";

// Import components
import Navbar from "./Components/Navbar";

// Import pages
import Home from "./Pages/Home";
import Lessons from "./Pages/Lessons";
import Collection from "./Pages/Collection";

export default function App() {
  // 2. Wrap ChakraProvider at the root of your app
  return (
    <Router>
    <ChakraProvider>
      {/* navbar IMPLEMENT ROUTING */}
      <Navbar/>
      <Routes>
        <Route path="/" exact element={<Home />}/>
        <Route path="/Lessons" exact element={<Lessons/>}/>
        <Route path="/Collection" exact element={<Collection/>}/>
      </Routes>
    </ChakraProvider>
    </Router>
  ) 
}