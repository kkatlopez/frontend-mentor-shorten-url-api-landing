import { Container } from 'react-bootstrap';
import StatisticDetail from './StatisticDetail';
import '../styles/statistics.scss';

function Statistics() {
    const stats = [
        {
            "id": 1,
            "name": "Brand Recognition",
            "desc": "Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content.",
            "img": "../images/icon-brand-recognition.svg"
        },
        {
            "id": 2,
            "name": "Detailed Records",
            "desc": "Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.",
            "img": "../images/icon-detailed-records.svg"
        },
        {
            "id": 3,
            "name": "Fully Customizable",
            "desc": "Improve brand awareness and content discoverability throught customizable links, supercharging audience engagement.",
            "img": "../images/icon-fully-recognizable.svg"
        }
    ];

    return(
        <Container fluid id="statistics-container">
            <h2>Advanced Statistics</h2>
            <p>Track how your links are performing across the web with our advanced statistics dashboard.</p>
            {stats.map(s => <StatisticDetail stat={s}/>)}
        </Container>
    )
}

export default Statistics;