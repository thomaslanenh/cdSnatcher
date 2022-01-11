import { createContext, useReducer } from "react";

const initialState = {
  gamestatus: "mainmenu",
  cardsheld: ['gillian', 'metalgear'],
  showdialogue: false,
  currentdialogue: 0,
};

const Reducer = (state, action) => {
    switch (action.type){
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
        case "CHANGE_SCENE":
            console.log("Changed game scene");
            return {...state, currentdialogue: action.payload}
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