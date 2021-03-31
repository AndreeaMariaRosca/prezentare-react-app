import React from 'react';
import { AutoRotatingCarousel } from 'material-auto-rotating-carousel';
import { Slide } from 'material-auto-rotating-carousel';

class Carousel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        const { red, blue, green } = require('@material-ui/core/colors');
        const Button = require('@material-ui/core/Button').default;
        const color = "primary";
        return(
            <div style={{ position: 'relative', width: '100%', height: 500 }}>
            <Button onClick={() => this.setState({ open: true }) } variant="contained" color={color} disableRipple ={true} size="large">Galerie foto</Button>
            <AutoRotatingCarousel
              open={this.state.open}
              onClose={() => this.setState({ open: false })}
              onStart={() => this.setState({ open: false })}
              style={{ position: 'absolute' }}
            >
              <Slide
                media={<img src='https://bit.ly/2PHNsAU'/>}
                mediaBackgroundStyle={{ backgroundColor: red[400] }}
                style={{ backgroundColor: red[600] }}
                title='This is a very cool feature'
                subtitle='Just using this will blow your mind.'
              />
              <Slide
                media={<img src='static/images/portret.jpg' />}
                mediaBackgroundStyle={{ backgroundColor: blue[400] }}
                style={{ backgroundColor: blue[600] }}
                title='Ever wanted to be popular?'
                subtitle='Well just mix two colors and your are good to go!'
              />
              <Slide
                media={<img src='http://www.icons101.com/icon_png/size_256/id_76704/Google_Settings.png' />}
                mediaBackgroundStyle={{ backgroundColor: green[400] }}
                style={{ backgroundColor: green[600] }}
                title='May the force be with you'
                subtitle='The Force is a metaphysical and ubiquitous power in the Star Wars fictional universe.'
              />
            </AutoRotatingCarousel>
          </div>
             )
           
    }
}

export default Carousel;
