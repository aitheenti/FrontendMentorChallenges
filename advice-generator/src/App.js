import { lazy, Suspense, useState } from "react";
import "./App.css";
import Spinner from "./Spinner";

const Advice = lazy(() => import("./Advice"));
function App() {
  const [advice, setAdvice] = useState("");
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const generateNewAdvice = async () => {
    setIsLoading(true);
    try {
      const resp = await fetch("https://api.adviceslip.com/advice");
      const data = await resp.json();
      setAdvice(data.slip);
    } catch (error) {
      setError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="App">
      <div className="advice-card">
        <Suspense fallback={<Spinner />}>
          <Advice
            advice={advice}
            error={error}
            isLoading={isLoading}
            generateNewAdvice={generateNewAdvice}
          />
        </Suspense>
      </div>
    </div>
  );
}

export default App;
