import { useState } from 'react';
import NavigationBar from './components/NavigationBar';
import View from './components/View';
import { Container, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

function App() {
	const [location, setLocation] = useState('OTTAWA');

	return (
		<Container>
			<Row>
				<NavigationBar
					setLocation={setLocation}
					location={location}
				/>
			</Row>
			<Row id='panel'>
				<View location={location} />
			</Row>
		</Container>
	);
}

export default App;
