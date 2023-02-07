import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import '../styles/statistics.scss';

function StatisticDetail( {stat} ) {
    return(
        <Col md="12" lg="4" className="stat">
            <div className="img-container d-flex">
                <img src={stat.img} alt={stat.name} />
            </div>
            <div className="desc-container">
                <h2 className="pt-3">{stat.name}</h2>
                <p>{stat.desc}</p>
            </div>
        </Col>
    )
}

export default StatisticDetail;