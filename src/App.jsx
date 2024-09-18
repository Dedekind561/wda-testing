import "./App.css";
import Quiz from "./components/Quiz";

const words = [
  { word: "I", display: true },
  { word: "think", display: false },
  { word: "therefore", display: true },
  { word: "I", display: false },
  { word: "am", display: true },
];
const quizProps = {
  words,
  options: ["think", "therefore", "swim", "wonder", "I"],
  answer: "I think therefore I am",
};

function App() {
  return (
    <div className="App">
      <h3>Complete the phrase</h3>
      <Quiz {...quizProps} />
    </div>
  );
}

export default App;
