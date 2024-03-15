// index

import { createStore } from 'redux';
import { Provider,useSelector } from 'react-redux';

const EndPoint = "http://127.0.0.0:8080/";
const signalR = require("@microsoft/signalr");
let socket = new signalR.HubConnectionBuilder()
    .withUrl(EndPoint, {
        skipNegotiation: true,
        transport: signalR.HttpTransportType.WebSockets
    })
    .build();

function reducer(currentState, action) {

    if (currentState === undefined) {
        return {
            name: "john",
            hair: "short",
            height: 170,
            weight: 70,
        }
    }

    const newState = { ...currentState };

    if (action.type === 'setHair') {
        newState.hair = action.length;
    }
    return newState;
}

const store = createStore(reducer);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <App socket={socket} this={root._internalRoot.containerInfo.style} />
    </Provider>
);

//App button
function App() {

    const curHair = useSelector(state => state.hair);
    const dispatch = useDispatch();

    function LongHair() {
        dispatch({ type: 'setHair', length: 'long' });
    }


    return (<><h1>현재 머리길이: {curHair}</h1>
    <button onClick={LongHair}>긴머리변경</button></>);
}