import { useEffect, useState } from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import WeatherPanel from './WeatherPanel';

const View = ({ location }) => {
	const [forecast, setForecast] = useState();
	const [current, setCurrent] = useState();

	useEffect(() => {
		const getForecast = async () => {
			const apiKey = process.env.REACT_APP_API_KEY;
			const host = process.env.REACT_APP_API_HOST;
			const params = `key=${apiKey}&q=${location}&days=5&aqi=no&alerts=no`;
			const url = `${host}/forecast.json?${params}`;

			try {
				const res = await fetch(url, {
					methode: 'GET',
					mode: 'cors',
					headers: {
						'Content-Type': 'application/json',
					},
				});

				if (res.ok) {
					const data = await res.json();
					setCurrent(data.current);
					setForecast(data.forecast.forecastday.slice(1, 5));
				}
			} catch (err) {
				console.log(err);
			}
		};

		getForecast();
	}, [location]);

	return (
		<Container
			className='view'
			fluid
		>
			<Row>
				{current && (
					<WeatherPanel
						date='Today'
						temp={current.temp_c}
						condition={current.condition}
					/>
				)}
			</Row>
			<Row>
				{forecast &&
					forecast.map((day) => {
						let date = new Date(0);
						date.setUTCSeconds(day.date_epoch);
						const dayMap = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

						return (
							<WeatherPanel
								key={date.getMilliseconds()}
								date={dayMap[date.getDay()]}
								temp={day.day.maxtemp_c}
								condition={day.day.condition}
							/>
						);
					})}
			</Row>
		</Container>
	);
};

export default View;
