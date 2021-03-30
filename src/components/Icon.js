import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Icon extends React.Component {
    render() {

        const props = this.props;

        return(
            <div>
                <FontAwesomeIcon icon={props.icon} size={props.size}></FontAwesomeIcon>
                    {props.children} 
                <FontAwesomeIcon/>      
            </div>

        )   
    }
}
export default Icon;