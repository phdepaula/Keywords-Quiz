import { useEffect, useState } from 'react';

import '../styles/keyword.css';

export default function Keyword(props) {
    const { keyword, inputValue } = props;
    const [status, setStatus] = useState(false);

    useEffect(() => {
        if (!status && keyword === inputValue) {
            setStatus(true);
        }
    }, [inputValue]);

    return (
        <div className="keyword">{status ? <span>{keyword}</span> : ''}</div>
    );
}
