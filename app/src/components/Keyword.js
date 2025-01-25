export default function Keyword(props) {
    const { keyword, inputValue } = props;

    return (
        <div className="item-view">
            <span>{keyword}</span>
        </div>
    );
}
