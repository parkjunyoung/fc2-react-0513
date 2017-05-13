import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';

//추가함
import { connect, Provider   } from 'react-redux';


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
        this.props.updateMessage( message );
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

let mapDispatchToProps = (dispatch) => {
    return {
        updateMessage : (value) => dispatch( input(value) )
    }
};
Form = connect(undefined, mapDispatchToProps)(Form);


let Answer = (props) => {
    return (
        <h1>{ props.message}</h1>
    );
};

let mapStateToProps = (state) => {
    return {
        message: state.message
    };
}
 
Answer = connect(mapStateToProps)(Answer);



const App = () => {
    return (
        <div>
            <Form />
            <Answer />
        </div>
    );
};


const rootElement = document.getElementById('root');
ReactDOM.render(
    <Provider store = {store}>
        <App />
    </Provider>
, rootElement);