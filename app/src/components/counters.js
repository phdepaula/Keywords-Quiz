import { useEffect, useRef, useState } from 'react';

import arrow from '../assets/arrow.svg';
import HiddenSelection from './HiddeSelection';

import '../styles/counters.css';

export default function Counters(props) {
    const { name, indicator, options, action } = props;
    const [selectionActivated, setSelectionActivated] = useState(false);
    const dropdownRef = useRef(null);

    const handleClickOutside = (event) => {
        if (
            dropdownRef.current &&
            !dropdownRef.current.contains(event.target)
        ) {
            setSelectionActivated(false);
        }
    };

    useEffect(() => {
        if (selectionActivated) {
            document.addEventListener('mousedown', handleClickOutside);
        }
    }, [selectionActivated]);

    return (
        <div className="counters-container">
            <div className="counters-options-container" ref={dropdownRef}>
                <div
                    className="counters-container-options"
                    onClick={() => setSelectionActivated(true)}
                >
                    <span>{name}</span>
                    <img alt="arrow" src={arrow} />
                </div>
                {selectionActivated && (
                    <HiddenSelection options={options} action={action} />
                )}
            </div>
            <div className="counters-container-indicator">
                <span>{indicator}</span>
            </div>
        </div>
    );
}
