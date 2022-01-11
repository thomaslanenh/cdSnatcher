import './styles/DialogueBox.scss';

export default function DialogueBox(params){

    let letterArray = params.text.split(/\b/);
    return (
        <div className="dialogueBox">
            {letterArray.forEach(element => {
                <p>{element}</p>
            })}
            <p>{params.text}</p>
        </div>
    )
}