import { Col, Row } from 'react-bootstrap';

const WeatherPanel = ({ date, temp, condition, ...props }) => {
	const today = date === 'Today';

	return (
		<Col
			md={today ? { span: 4, offset: 4 } : 3}
			className={`weather-panel${today ? ' panel-today' : ' panel-forecast'}`}
			{...props}
		>
			<Row className='date-row'>
				<h3 className='date'>{date}</h3>
			</Row>

			<Row>
				<Col
					md={today ? 6 : { span: 6, offset: 3 }}
					className={today ? 'col-lg' : 'col-sm'}
				>
					<img
						src={condition.icon}
						className={today ? 'icon-lg' : 'icon-sm'}
						alt={`Icon ${condition.text}`}
					/>
				</Col>
				<Col
					md={today ? 6 : { span: 6, offset: 3 }}
					className={today ? 'col-lg' : 'col-sm'}
				>
					<p className='temp'>{temp}°C</p>
					<h4 className='condition'>{today && condition.text}</h4>
				</Col>
			</Row>
		</Col>
	);
};

export default WeatherPanel;
