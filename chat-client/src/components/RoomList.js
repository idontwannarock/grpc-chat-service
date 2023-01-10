function RoomListEntry(props) {
	const { id, userCount } = props;
	return (
		<div>
			<span>Room: {id}, User count: {userCount}</span>
		</div>
	);
}

function RoomListEntries(props) {
	const { roomEntries } = props;
	return roomEntries.map(({id, userCount}) => {
		return (
			<RoomListEntry
				key={id}
				id={id}
				userCount={userCount}
			/>
		);
	});
}

const RoomList = (props) => {
	const { isLoggedIn, roomEntries } = props;
	return (
		<div>
			<div>Room List:</div>
			{isLoggedIn && <RoomListEntries roomEntries={roomEntries} />}
		</div>
	);
}

export default RoomList;
