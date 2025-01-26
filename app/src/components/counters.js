import { useState } from 'react';

import arrow from '../assets/arrow.svg';
import HiddenSelection from './HiddeSelection';

import '../styles/counters.css';

export default function Counters(props) {
    const { name, indicator } = props;
    const [selectionActivated, setSelectionActivated] = useState(false);

    return (
        <div className="counters-container">
            <div className="counters-options-container">
                <div
                    className="counters-container-options"
                    onClick={() => setSelectionActivated(true)}
                >
                    <span>{name}</span>
                    <img alt="arrow" src={arrow} />
                </div>
                {selectionActivated ? (
                    <HiddenSelection
                        options={['Numerical', 'Percentage']}
                        value=""
                    />
                ) : (
                    ''
                )}
            </div>
            <div className="counters-container-indicator">
                <span>{indicator}</span>
            </div>
        </div>
    );
}
