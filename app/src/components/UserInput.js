import '../styles/userInput.css';

export default function UserInput(props) {
    const { description, value, action } = props;

    const onChange = (event) => {
        action(event.target.value.toUpperCase());
    };

    return (
        <div className="user-input">
            <span>{description}</span>
            <input type="text" value={value} onChange={onChange} />
        </div>
    );
}
