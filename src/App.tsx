import { useNumberStore } from "./stores/numberStore";

const App = () => {
  const number = useNumberStore((state) => state.num);
  const incNumber = useNumberStore((state) => state.increaseNumber);
  const resetNumber = useNumberStore((state) => state.defaultNumber);
  return (
    <div>
      <h1>Zustand Doc</h1>
      <p>number: {number}</p>
      <button onClick={incNumber}>increase</button>
      <button onClick={resetNumber}>reset</button>
    </div>
  );
};
export default App;
