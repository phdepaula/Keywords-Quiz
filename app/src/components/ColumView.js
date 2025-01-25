import '../styles/columnView.css';
import Keyword from './Keyword';

export default function ColumnView(props) {
    const { data, inputValue, setKeyStatus } = props;

    return (
        <div className="column-view">
            {data.map((item) => {
                return (
                    <Keyword
                        keyword={item}
                        inputValue={inputValue}
                        setKeyStatus={setKeyStatus}
                    />
                );
            })}
        </div>
    );
}
