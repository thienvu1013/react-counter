import React from 'react';
import "semantic-ui-css/semantic.min.css";

class Count extends React.Component{
    state = {count:0};

    increment = () =>{
        this.setState({count:this.getNumber(this.state.count+1)})
    };

    decrement = () =>{
        this.setState({count:this.getNumber(this.state.count-1)})

    };

    setCounter = (num) =>{
        const theNum = parseInt(num);
        this.setState({count:this.getNumber(theNum)}); 
    }

    getNumber = (num) =>{
        if(num>150){
            return 150;
        }
        else if(num < 0){
            return 0;
        }
        else return num;
    }


    render(){

        return (
            <h1>
                {this.state.count}
            </h1>
        );
    }
}

export default Count;