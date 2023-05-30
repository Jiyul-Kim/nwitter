import AppRouter from "./Router";
import { useState } from "react";
import fbase from "fbase";



function App() {
  // const auth = 
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return <AppRouter isLoggedIn={isLoggedIn}></AppRouter>
}

export default App;
