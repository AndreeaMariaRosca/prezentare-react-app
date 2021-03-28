import { Button, Input } from '@material-ui/core';
import React from 'react';
import './BoxWrapper.css'

class BoxWrapper extends React.Component {
    render() {
       // console.log(this.props);
       // console.log(this.props.children);

        const props = this.props; // { name: 'Andreea', children: 'Si mai smechera' }

        return(
            <div className="flex-child">
                {props.children}
                         
            </div>

        )   
    }
}
export default BoxWrapper;