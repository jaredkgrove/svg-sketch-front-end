import React from 'react';
import { connect } from 'react-redux';

 class HueSelector extends React.Component {
     constructor(){
        super()
        this.state = {
            sliderPosition: 0,
            hue: 0
        }
        this.hueBarClientRect = ''
        this.hueBar = React.createRef();
     }

     updateDimensions = () => {
        this.hueBarClientRect = this.hueBar.current.getBoundingClientRect() 
        this.setState({
            sliderPosition: this.getSliderPosition(this.state.hue)
        })
      }

      componentDidMount() {
        this.hueBarClientRect = this.hueBar.current.getBoundingClientRect() 
        window.addEventListener('resize', this.updateDimensions);
        this.setState({
            hue: this.props.initHue,
            sliderPosition: this.getSliderPosition(this.props.initHue)
        })
      }

      componentWillUnmount() {
        window.removeEventListener('resize', this.updateDimensions);
      }
    
     componentDidUpdate(prevProps, prevState){
         if(this.state.sliderPosition && this.state.sliderPosition !== prevState.sliderPosition ){
            this.props.handleChange({h: this.state.hue})
         }
     }
       
    handleOnMouseDown = (e) => {
        this.hueBarClientRect = this.hueBar.current.getBoundingClientRect() 
        let y = e.clientY - this.hueBarClientRect.top
        this.setState({
            sliderPosition: y,
            hue: this.getHue(y)
        })
    } 

    getHue = (pos) => (360 * (pos / this.hueBarClientRect.height))

    getSliderPosition = (hue) => ((this.hueBarClientRect.height * hue)/360)

    render(){
        return (
            <div ref={this.hueBar} onMouseDown={this.handleOnMouseDown} className='hue-bar' style={{background: 'linear-gradient(to bottom,hsl(0,100%,50%),hsl(60,100%,50%),hsl(120,100%,50%),hsl(180,100%,50%),hsl(240,100%,50%),hsl(300,100%,50%),hsl(360,100%,50%))'}}>
                <div style={{backgroundColor: `hsl(${this.state.hue},100%,50%)`, width: '140%', paddingTop:'70%', borderRadius:'35%', border:'1px solid white', position:'relative', top:`${this.state.sliderPosition-15}px`, display:'inline-block', right:'calc(20% + 1px)'}}></div>
            </div>
        )
    }

 }

 export default HueSelector