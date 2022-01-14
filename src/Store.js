import { createContext, useReducer } from "react";

const initialState = {
  gamestatus: "startup",
  cardsheld: ['gillian', 'metalgear'],
  playerlife: 1000,
  showdialogue: false,
  currentdialogueindex: 0,
  dialogue: "",
  letterindex: 0,
  nukes: false
};

const Reducer = (state, action) => {
    switch (action.type){
        case "ADD_CARD":
            console.log("Added card");
            return {...state, cardsheld: action.payload}
        case "CHANGE_SCENE":
            console.log("Requested scene: " + action.payload);
            return {...state, gamestatus: action.payload}
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
        case "UPDATE_LIFE":
            console.log("Updateed life ");
            return {...state, playerlife: action.payload};
        case "METAL_GEAR_HAD_NUKES":
            console.log("Oh dear...");
            return {...state, nukes: true}
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