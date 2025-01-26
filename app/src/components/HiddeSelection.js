import '../styles/hiddenSelection.css';

export default function HiddenSelection(props) {
    const { options, value, action } = props;

    return (
        <div className="hidden-selection">
            {options.map((item) => {
                return (
                    <div
                        className="hidden-selection-option"
                        onClick={() => action(item)}
                    >
                        <span>{item}</span>
                    </div>
                );
            })}
        </div>
    );
}
