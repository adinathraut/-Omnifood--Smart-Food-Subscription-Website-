import { useState } from 'react';
import Header from "./components/Header";  // Import Header
import MainComponent from "./components/MainComponent";  // Rename this import to avoid conflict
import "./styles/style.css";
import "./styles/omnifood_queries.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Header />
      <MainComponent />  {/* Use MainComponent here */}
    </div>
  );
}

export default App;
