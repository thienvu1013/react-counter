import React from 'react';
import "semantic-ui-css/semantic.min.css";
import Count from './Count';
//import './InputField.css';

class InputField extends React.Component{
    constructor(props){
        super(props);
        this.countElement = React.createRef();
        this.state = {inputNum:""};
    }

    increase = () =>{
        this.countElement.current.increment();
    }

    decrease = () =>{
        this.countElement.current.decrement();
    }

    setInputValue = (num) =>{
        this.setState({inputNum:num});
    }

    handleKeyDown = (e) =>{
        if (e.key === "Enter"){
            this.countElement.current.setCounter(this.state.inputNum);
        }
    }

    submit = ()=>{

        this.countElement.current.setCounter(this.state.inputNum);
    }


    render(){
        return (
                <div className = "ui grid">
                    <div className = "two column row">
                        <div className = "column">
                            <div className="ui action input">
                                <input
                                    type="text"
                                    placeholder="Enter a number..."
                                    value ={this.state.inputNum}
                                    onChange={(e)=> {this.setInputValue(e.target.value)}}
                                    onKeyDown={(e)=>{this.handleKeyDown(e)}}
                                    />
                                <button onClick ={this.submit} className ="ui teal button">Submit</button>
                            </div>
                            <br/>
                            <div className="ui buttons">
                                <button onClick ={this.increase} className="ui yellow button up">Up</button>
                                <button onClick ={this.decrease} className="ui purple button down">Down</button>
                            </div>

                        </div> 
                        <div className = "column">
                            <Count ref ={this.countElement}/>
                        </div>
                    </div>
                </div>
        );
    }
}

export default InputField;