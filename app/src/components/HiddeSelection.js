import arrow from '../assets/arrow.svg';
import '../styles/hiddenSelection.css';

export default function HiddenSelection(props) {
    const { options, value } = props;

    return (
        <div className="hidden-selection">
            {options.map((item, index) => {
                return (
                    <div className="hidden-selection-option">
                        {value === item ? <img alt={index} src={arrow} /> : ''}
                        <span>{item}</span>
                    </div>
                );
            })}
        </div>
    );
}
