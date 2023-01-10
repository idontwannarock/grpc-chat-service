import { AuthGatewayClient } from '../proto/chat_grpc_web_pb';
import { LoginRequest } from '../proto/chat_pb';

const client = new AuthGatewayClient(process.env.REACT_APP_API_URL, null, null);

function NameHeader(props) {
	const { name } = props;
	return (
		<span>Hello {name}!</span>
	);
}

function login(event, setId) {
	event.preventDefault();
	const request = new LoginRequest();
	request.setUsername(event.target[0].value);
	client.login(request, {}, (err, response) => {
		setId(response.getUserid());
	});
}

function LoginForm(props) {
	const { name, setName, setId } = props;
	return (
		<form onSubmit={event => login(event, setId)}>
			<input
				type={"text"}
				value={name}
				onChange={event => setName(event.target.value)}
				required={true}
			/>
			<button type={"submit"}>Login</button>
		</form>
	);
}

const Header = (props) => {
	const { isLoggedIn, username, setUsername, setUserId } = props;
	return (
		<div>
			{isLoggedIn
				? <NameHeader name={username}/>
				: <LoginForm name={username} setName={setUsername} setId={setUserId}/>}
		</div>
	);
}

export default Header;
