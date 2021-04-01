import React from 'react';
import { AutoRotatingCarousel } from 'material-auto-rotating-carousel';
import { Slide } from 'material-auto-rotating-carousel';

class Carousel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        const { red, blue, green, yellow, purple} = require('@material-ui/core/colors');
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
                media={<img src='static/images/SiSC1.jpeg'/>}
                mediaBackgroundStyle={{ backgroundColor: blue[400] }}
                style={{ backgroundColor: blue[500] }}
                title='Training Adobe Illustrator'
                subtitle='Departamentul de Imagine&Promovare'
              />
              <Slide
                media={<img src='static/images/SiSC2.jpeg' />}
                mediaBackgroundStyle={{ backgroundColor: purple[400] }}
                style={{ backgroundColor: purple[500] }}
                title='Training triere CV-uri'
                subtitle='Tap That Job'
              />
              <Slide
                media={<img src='static/images/SiSC3.jpeg' />}
                mediaBackgroundStyle={{ backgroundColor: red[400] }}
                style={{ backgroundColor: red[500] }}
                title='Sedinta Serile Teatrului Studentesc'
                subtitle='Departamentul de Imagine&Promovare'
              />
              <Slide
                media={<img src='static/images/SiSC4.jpeg' />}
                mediaBackgroundStyle={{ backgroundColor: green[400] }}
                style={{ backgroundColor: green[500] }}
                title='Iesiri informale'
                subtitle='Marea familie I&P'
              />
            </AutoRotatingCarousel>
          </div>
             )
           
    }
}

export default Carousel;
