import React from 'react';
import './BoxContainer.css';

class BoxContainer extends React.Component {
    render() {
        const props = this.props;

        return(
            <div className="flex-container">
                {props.children}
            </div>
                
        )   
    }
}

export default BoxContainer;