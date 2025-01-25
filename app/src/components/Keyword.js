import { useEffect, useState } from 'react';

export default function Keyword(props) {
    const { keyword, inputValue } = props;
    const [status, setStatus] = useState(false);

    useEffect(() => {
        if (!status && keyword === inputValue) {
            setStatus(true);
        }
    }, [inputValue]);

    return (
        <div className="item-view">{status ? <span>{keyword}</span> : ''}</div>
    );
}
