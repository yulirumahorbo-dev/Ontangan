import AddTimer from "./component/AddTimer.tsx";
import Header from "./component/Header.tsx";
import Timers from "./component/Timers.tsx";
import TimersContextProvider from "./store/timers-context.tsx";

function App() {
  return (
    <TimersContextProvider>
      <Header />
      <main>
        <AddTimer />
        <Timers />
      </main>
    </TimersContextProvider>
  );
}

export default App;
