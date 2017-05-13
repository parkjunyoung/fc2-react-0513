import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';


/*
 * Action
 */

function input(message) {
    return {
        type :"INPUT",
        message : message
    };
}

/*
 * Reducer
 */



 
function inputReducer(state , action){
    
    state = { message : "기본값 입니다." };

    if(action.message){
        return Object.assign( 
                    {}, 
                    state, 
                    { message: action.message }
                );
    }else{
        return state;
    }
}



/*
 * Store
 */
const store = createStore(inputReducer);



class Form extends React.Component {
    constructor(){
        super();
        this.state = { textInput : "" };
    }

    inputChange(event){
        this.setState({ 
            textInput : event.target.value
        });
    }

    submit(){
        let message = this.state.textInput;
        this.props.store.dispatch( input(message) );
    }

    render() {
        return (
            <div>
                <input type="text" onChange={ this.inputChange.bind(this) } />
                <button onClick={ this.submit.bind(this) }>입력전송</button>
            </div>
        );
    }
}


const Answer = (props) => {
    return (
        <h1>{ props.store.getState().message}</h1>
    );
};

 


const App = () => {
    return (
        <div>
            <Form store={store}/>
            <Answer store={store}/>
        </div>
    );
};


const render = () => {
    const rootElement = document.getElementById('root');
    ReactDOM.render(<App store={store}/>, rootElement); 
};



store.subscribe(render);
render();