import './App.css';
import { GET_API, getAPICall } from './config';

function App() {
  const payload = {
    // todo: 변경 예정
    page: 1,
    limit: 100,
  };

  return (
    <>
      <h1>REACT SHOPPING</h1>

      {console.log(getAPICall(GET_API, payload))}
    </>
  );
}

export default App;
