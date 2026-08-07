import AddTimer from "./component/AddTimer.tsx";
import Header from "./component/Header.tsx";
import Timers from "./component/Timers.tsx";

function App() {
  return (
    <>
      <Header />
      <main>
        <AddTimer />
        <Timers />
      </main>
    </>
  );
}

export default App;
