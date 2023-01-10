import './App.css';

import Header from "./components/Header";
import RoomList from "./components/RoomList";
import {useEffect, useState} from "react";

function App() {
	const [username, setUsername] = useState(() => localStorage.getItem('username'));
	useEffect(() => {
		if (username !== '') {
			localStorage.setItem('username', username);
		}
	}, [username]);

	const [userId, setUserId] = useState(() => localStorage.getItem('userId'));
	useEffect(() => {
		if (username !== '' && userId !== '') {
			localStorage.setItem('userId', userId);
		}
	}, [userId, username])

	const isLoggedIn = userId !== null && userId !== '';

  return (
    <div className="App">
      <Header
				isLoggedIn={isLoggedIn}
				username={username}
				setUsername={setUsername}
				setUserId={setUserId}
			/>
			<div>
				<RoomList />
			</div>
    </div>
  );
}

export default App;
