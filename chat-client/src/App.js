import './App.css';

import Header from "./components/Header";
import RoomList from "./components/RoomList";

function App() {
  return (
    <div className="App">
      <Header />
			<div>
				<RoomList />
			</div>
    </div>
  );
}

export default App;
