import { useEffect, useState } from 'react';

import '../styles/keyword.css';

export default function Keyword(props) {
    const { keyword, inputValue, setKeyStatus, activate } = props;
    const [status, setStatus] = useState(false);

    useEffect(() => {
        if (!status && keyword === inputValue) {
            setStatus(true);
            setKeyStatus((prevState) => !prevState);
        } else if (!activate) {
            setStatus(false);
        }
    }, [inputValue, activate]);

    return (
        <div className="keyword">{status ? <span>{keyword}</span> : ''}</div>
    );
}
