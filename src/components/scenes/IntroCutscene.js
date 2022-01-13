import DialogueBox from "../DialogueBoxReducer";
import scriptdata from "./dialogue/dialogue.json";
import { Context } from "../../Store";
import { useContext } from "react";

export default function Intro(params) {
  const [state, dispatch] = useContext(Context);

  Object.keys(scriptdata.introDialogue).map((e) =>
    console.log("Data: " + scriptdata.introDialogue[e].text)
  );

  // const changeDialogueStatus = (dialogue) => {
  //   console.log("dialogue: " + parseInt(dialogue));
  //   dispatch({
  //     type: "CHANGE_DIALOGUE_LINE",
  //     action: parseInt(dialogue),
  //   });
  // };

  // This changes the dialogue index which sets which line of text.
  const handleKeyPress = (event) => {
    const code = event.keyCode || event.charCode;

    if (code === 32) {
      console.log("Space hit");
      dispatch({type:"CHANGE_DIALOGUE_INDEX", payload: 0});
      dispatch({type:"CHANGE_DIALOGUE", payload: ""});
      dispatch({type: "CHANGE_DIALOGUE_LINE", payload: state.currentdialogueindex + 1});
      // changeDialogueStatus(parseInt(state.currentdialogueindex + 1));
    }
  };

  return (
    <div className="diagBox">
      <DialogueBox
        text={scriptdata.introDialogue[parseInt(state.currentdialogueindex)].text} xLoc="center" yLoc="bottom"
      />
    </div>
  );
}
