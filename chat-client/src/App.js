import './App.css';

import Header from "./components/Header";
import RoomList from "./components/RoomList";
import {useEffect, useState} from "react";

import { RoomGatewayClient } from './proto/chat_grpc_web_pb';
import { ListRoomRequest } from "./proto/chat_pb";

const client = new RoomGatewayClient(process.env.REACT_APP_API_URL, null, null);

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

	const [roomEntries, setRoomEntries] = useState([]);
	fetchRoomList(setRoomEntries);

  return (
    <div className="App">
      <Header
				isLoggedIn={isLoggedIn}
				username={username}
				setUsername={setUsername}
				setUserId={setUserId}
			/>
			<div>
				<RoomList
					isLoggedIn={isLoggedIn}
					roomEntries={roomEntries}
				/>
			</div>
    </div>
  );
}

function fetchRoomList(setRoomEntries) {
	client.list(new ListRoomRequest(), {}, (err, response) => {
		const tempRoomEntries = [];
		response.getRoomsList().map(room => tempRoomEntries.push({id: room.getId(), userCount: room.getUsercount()}));
		setRoomEntries(tempRoomEntries);
	});
}

export default App;
