import logo from './logo.svg';
import './App.css';

import { GreetServiceClient } from './proto/chat_grpc_web_pb';
import { Greeting, GreetRequest } from './proto/chat_pb';

const client = new GreetServiceClient(process.env.REACT_APP_API_URL);

function App() {

	const grpcCall = () => {
		const greeting = new Greeting();
		greeting.setFirstName('John');
		greeting.setLastName('Doe');

		const request = new GreetRequest();
		request.setGreeting(greeting);

		client.greet(request, {}, function (err, response) {
			console.log(response.getResult());
		});
	}

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
					<button onClick={grpcCall}>Click</button>
				</div>
      </header>
    </div>
  );
}

export default App;
