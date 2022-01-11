import './styles/MessageBox.scss';

export default function MessageBox(props){
    let message = props.message;
    return(
        <div className="messageBox">
            <h1>{message}</h1>
        </div>
    )
}