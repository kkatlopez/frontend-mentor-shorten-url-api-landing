import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import '../styles/statistics.scss';

function StatisticDetail( {stat} ) {
    console.log(stat.img);
    return(
        <Container>
            <img src={stat.img}/>
            <h2>{stat.name}</h2>
            <p>{stat.desc}</p>
        </Container>
    )
}

export default StatisticDetail;