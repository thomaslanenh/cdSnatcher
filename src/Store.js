import { createContext, useReducer } from "react";

const initialState = {
  gamestatus: "testscene",
  cardsheld: ['gillian','metalgear', 'mika', 'benson', 'harry', 'napoleon'],
  playinghand: ['gillian','metalgear', 'mika', 'benson', 'harry', 'napoleon'],
  playerlife: 1000,
  showdialogue: false,
  currentdialogueindex: 0,
  dialogue: "",
  letterindex: 0,
  nukes: false,
  enemyhealth: 20,
  turn: 0,
  cardboard: {
      1: false,
      2: false,
      3: false,
      4: false,
      5: false,
      6: false,
      7: false,
      8: false,
      9: false
  },
  cardsactive: {
      "square1": '',
      "square2": '',
      "square3": '',
      "square4": '',
      "square5": '',
      "square6": '',
      "square7": '',
      "square8": '',
      "square9": '',
  }
};

const Reducer = (state, action) => {
    switch (action.type){
        case "ADD_CARD":
            console.log("Added card");
            return {...state, cardsheld: action.payload}
        case "REMOVE_CARD_IN_GAME":
            console.log("Removed Card in Playing Hand");
            return {...state, playinghand: action.payload}
        case "SET_CARD_BOARD_POSITION":
            console.log("Setting card position: " + action.payload);
            return {...state, cardboard: {
                ...state.cardboard,
                [action.payload.prop]: action.payload.value
            } }
        case "SET_CARD_ACTIVE":
            console.log("activating card");
            console.log('PAYLOAD: ' +action.payload.prop + ' ' +  action.payload.value)
            return {...state, cardsactive: {
                ...state.cardsactive,
                [action.payload.prop]: action.payload.value
            }}
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
        case "SET_ENEMY_HEALTH":
            console.log("Enemy health set");
            return {...state, enemyhealth: action.payload}
        case "CHANGE_TURN":
            console.log("Changed Turn");
            return {...state, turn: action.payload};
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