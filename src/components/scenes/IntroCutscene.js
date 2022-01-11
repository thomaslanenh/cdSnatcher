import DialogueBox from "../DialogueBoxReducer";
import scriptdata from "./dialogue/dialogue.json";
import { Context } from "../../Store";
import { useState, useContext } from "react";

export default function Intro(params) {
  const [state, dispatch] = useContext(Context);
  const [index, setIndex] = useState(0);

  Object.keys(scriptdata.introDialogue).map((e) =>
    console.log("Data: " + scriptdata.introDialogue[e].text)
  );

  const changeDialogueStatus = (dialogue) => {
    console.log("dialogue: " + parseInt(dialogue));
    dispatch({
      type: "CHANGE_DIALOGUE",
      action: parseInt(dialogue),
    });
  };

  const handleKeyPress = (event) => {
    const code = event.keyCode || event.charCode;

    if (code === 32) {
      console.log("Space hit");
      console.log("Current state: " + state.currentdialogueindex);
      let currentState = parseInt(state.currentdialogueindex + 1);
      console.log("new state: " + currentState);
      changeDialogueStatus(currentState);
    }
  };

  return (
    <div className="diagBox" tabIndex={-1} onKeyUp={(e) => handleKeyPress(e)}>
      {console.log("current set state: " + state.currentdialogueindex)}
      <DialogueBox
        text={scriptdata.introDialogue[state.currentdialogueindex].text}
      />
    </div>
  );
}
