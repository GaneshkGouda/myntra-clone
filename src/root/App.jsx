import { Outlet } from "react-router-dom";
import Header from "../components/Header";

import Foooters from "../components/footer";
import Fetching from "../components/fetch";

function App() {
  return (
    <>
      <Header></Header>
      <Fetching></Fetching>
      <Outlet></Outlet>
      <Foooters></Foooters>
    </>
  );
}

export default App;
