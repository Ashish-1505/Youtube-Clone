import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';
import SideBar from './components/CustomSideBar';
import MainContent from './components/MainContent';


function App() {
  return (
    <div>
     <SideBar/>
     <MainContent/>
    </div>
  );
}

export default App;
