import { useState } from "react";

import { RoomGatewayClient } from '../proto/chat_grpc_web_pb';
import { ListRoomRequest } from '../proto/chat_pb';

const client = new RoomGatewayClient(process.env.REACT_APP_API_URL, null, null);

function RoomEntry() {
	const [entries, setEntries] = useState([]);

	client.list(new ListRoomRequest(), {}, (err, response) => {
		const tempEntries = [];
		response.getRoomsList().map(room => tempEntries.push({id: room.getId(), userCount: room.getUsercount()}));
		setEntries(tempEntries);
	});

	return entries.map(({id, userCount}) => {
		return (
			<div key={id}>
				<span>Room: {id}, User count: {userCount}</span>
			</div>
		);
	});
}

const RoomList = () => {
	const userId = localStorage.getItem('userId');
	const isLoggedIn = userId !== null && userId !== '';

	return (
		<div>
			<div>Room List:</div>
			{isLoggedIn && <RoomEntry />}
		</div>
	);
}

export default RoomList;
