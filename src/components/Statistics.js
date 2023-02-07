import { Container, Row } from 'react-bootstrap';
import StatisticDetail from './StatisticDetail';
import '../styles/statistics.scss';
import brandRecognitionIcon from '../images/icon-brand-recognition.svg';
import detailRecordsIcon from '../images/icon-detailed-records.svg';
import fullyCustomizable from '../images/icon-fully-customizable.svg';

function Statistics() {
    const stats = [
        {
            "id": 1,
            "name": "Brand Recognition",
            "desc": "Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content.",
            "img": brandRecognitionIcon
        },
        {
            "id": 2,
            "name": "Detailed Records",
            "desc": "Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.",
            "img": detailRecordsIcon
        },
        {
            "id": 3,
            "name": "Fully Customizable",
            "desc": "Improve brand awareness and content discoverability throught customizable links, supercharging audience engagement.",
            "img": fullyCustomizable
        }
    ];

    return(
        <Container fluid id="statistics-container">
            <h2>Advanced Statistics</h2>
            <p className="mb-0">Track how your links are performing across the web with our advanced statistics dashboard.</p>
            <Row id="statistics-row">
                {stats.map(s => <StatisticDetail stat={s} key={s.id}/>)}
            </Row>
        </Container>
    )
}

export default Statistics;