import arrow from '../assets/arrow.svg';
import '../styles/counters.css';

export default function Counters(props) {
    const { name, indicator, action } = props;

    return (
        <div className="counters-container">
            <div className="counters-container-options" onClick={action}>
                <span>{name}</span>
                <img alt="arrow" src={arrow} />
            </div>
            <div className="counters-container-indicator">
                <span>{indicator}</span>
            </div>
        </div>
    );
}
