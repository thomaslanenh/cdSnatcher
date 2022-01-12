import { createContext, useReducer } from "react";

const initialState = {
  gamestatus: "mainmenu",
  cardsheld: ['gillian', 'metalgear'],
  showdialogue: false,
  currentdialogueindex: 0,
  dialogue: "",
  letterindex: 0,
};

const Reducer = (state, action) => {
    switch (action.type){
        case "ADD_CARD":
            console.log("Added card");
            return {...state, cardsheld: action.payload}
        case "START_GAME":
            console.log("Starting Game...");
            return {...state, gamestatus: "startgame"};
        case "MAIN_MENU":
            console.log("Hit main menu");
            return {...state, gamestatus: "mainmenu"};
        case "SCENE_1":
            console.log("Hit scene 1");
            return {...state, gamestatus: "scene1"}
        case "START_DIALOGUE":
            console.log("Dialogue starting");
            return {...state, showdialogue: true}
        case "STOP_DIALOGUE":
            console.log("Dialogue Disabled");
            return {...state, showdialogue: false}
        case "CHANGE_DIALOGUE_SCENE":
            console.log("Changed game scene");
            return {...state, currentdialogue: action.payload}
        case "CHANGE_DIALOGUE":
            console.log("Changed dialogue");
            return {...state, dialogue: action.payload}
        case "CHANGE_DIALOGUE_INDEX":
            console.log("Changed dialogue index: " + action.payload);
            return {...state, letterindex: action.payload}
        case "CHANGE_DIALOGUE_LINE":
            console.log("Changed dialogue line");
            return {...state, currentdialogueindex: action.payload};
        default:
            console.log("Game Over");
            throw new Error();
    }
}

export const Context = createContext(initialState);

export const StoreProvider = ({children}) => {
    const [state, dispatch] = useReducer(Reducer, initialState);

    return(
        <Context.Provider value={[state, dispatch]}>
            {children}
        </Context.Provider>
    )
}