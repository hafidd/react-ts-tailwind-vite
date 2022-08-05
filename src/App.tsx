import { useEffect } from "react";
import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = "Vite, React, TS, Tailwind";
  }, []);

  return (
    <div className="flex h-screen  w-full items-center justify-center">
      <div className="border rounded-lg h-fit p-20 bg-slate-50">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
    </div>
  );
}

export default App;
