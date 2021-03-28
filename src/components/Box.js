import { Button, Input } from '@material-ui/core';
import React from 'react';
import './Box.css'

// const Box = (props) => {
//     return(
//         <div>Salut {props.name} </div>
//     )
// }

class Box extends React.Component {
    render() {
       // console.log(this.props);
       // console.log(this.props.children);

        const props = this.props; // { name: 'Andreea', children: 'Si mai smechera' }

        return(
            <div className="mylittlebox"> 
                {/* <div> Salut {props.name} </div> 
                <div>
                    {props.children}
                </div>
                <Form /> */}
                <div className="flex-container">
                    <div className="flex-child">1</div>
                    <div className="flex-child">2</div>
                    <div className="big-flex-child">3</div>
                </div>
                <div className="flex-child">
                    {props.children}
                </div>
            </div>
        )   
    }
}

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            disableTheButton: true
        }
    }

    onChange = (event) => {
        const value = event.target.value;
        console.log(value);

        if (value.length == 10) { // disableTheButton: false
            // this.state.disableTheButton = false;
            this.setState({ disableTheButton: false });
        }
        else{
            this.setState({ disableTheButton: true });

        }

    }

    render() {
        console.log('render');

        return (<div> 
            <Input onChange={this.onChange} />
            <Button disabled={this.state.disableTheButton}> Submit </Button>
        </div>);
    }
}

export default Box;