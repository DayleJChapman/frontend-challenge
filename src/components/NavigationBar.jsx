import { Nav, Navbar } from 'react-bootstrap';

const NavigationBar = ({ location, setLocation }) => {
	const locations = ['OTTAWA', 'MILAN', 'CARACAS'];

	const handleOnClick = (city) => {
		setLocation(city);
	};

	// map defined locations to nav links
	const links = locations.map((city) => {
		return (
			<Nav.Link
				href='#'
				onClick={() => handleOnClick(city)}
				key={city}
				className={city === location ? 'selected' : ''}
			>
				{city}
			</Nav.Link>
		);
	});

	return (
		<Navbar>
			<Nav>{links}</Nav>
		</Navbar>
	);
};

export default NavigationBar;
