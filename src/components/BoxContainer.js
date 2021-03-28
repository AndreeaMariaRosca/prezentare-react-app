import React from 'react';
import './BoxContainer.css';



// const Box = (props) => {
//     return(
//         <div>Salut {props.name} </div>
//     )
// }

class BoxContainer extends React.Component {
    render() {
       // console.log(this.props);
       // console.log(this.props.children);

        const props = this.props; // { name: 'Andreea', children: 'Si mai smechera' }

        return(
            <div className="flex-container">
                {props.children}
            </div>
                
        )   
    }
}

export default BoxContainer;