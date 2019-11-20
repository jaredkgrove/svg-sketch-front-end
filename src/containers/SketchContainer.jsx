import React from 'react';
import ElementsContainer from './ElementsContainer'

class SketchContainer extends React.Component {
    constructor(){
        super()
        this.state = {
            elements: [],
            tempElements: [],
            isDrawing: false
        }
        this.sketchClientRect = ''
        this.sketchArea = React.createRef();
        this.startPoint = []
    }

    componentDidMount(){
        this.setState({
            elements: this.props.currentSketch.elements
        })
    }

    componentDidUpdate(prevProps){
        if(this.props.currentSketch && (this.props.currentSketch !== prevProps.currentSketch)){
            this.setState({
                elements: this.props.currentSketch.elements
            })
        }
    }

    handleOnMouseDown = (e) => {
        this.sketchClientRect = this.sketchArea.current.getBoundingClientRect() 
        let x1 = e.clientX - this.sketchClientRect.left
        let y1 = e.clientY - this.sketchClientRect.top
        this.setState({
            isDrawing: true
        })
        this.startPoint.push(x1, y1)
    } 

    handleOnMouseMove = (e) => {
        if(this.state.isDrawing){
            let x2 = e.clientX - this.sketchClientRect.left
            let y2 = e.clientY - this.sketchClientRect.top
            let ratio = 1000 / this.sketchClientRect.width
            let ratioX = 1000 / this.sketchClientRect.width
            let ratioY = 500 / this.sketchClientRect.height

            switch(this.props.settings.lineType){
                case 'Circle':
                    this.drawCircle(x2, y2, ratioX, ratioY)
                    break
                case 'Line':
                    this.drawLine(x2, y2, ratio)
                    break
                case 'Rectangle':
                    this.drawRectangle(x2, y2, ratio)
                    break
                case 'Polyline':
                    this.drawPolyline(x2, y2, ratio)
                    break
            }
        }
    }

    handleOnMouseUp = (e) => {
        if(this.state.isDrawing){
            if(this.state.tempElements.length){
                this.setState({
                    isDrawing: false,
                    elements: [...this.state.elements, ...this.state.tempElements],
                    tempElements: []
                }) 
            }
            this.startPoint = []
        }
    } 

    drawCircle = (x2, y2, ratioX, ratioY) => {
        let R = Math.pow(Math.pow(x2 - this.startPoint[0], 2) + Math.pow((y2 - this.startPoint[1]), 2), 0.5)*ratioY
        this.setState({
            tempElements: [{type: 'Circle', properties: {cx:(this.startPoint[0]*ratioX), cy:this.startPoint[1]*ratioY, r:R, stroke:this.getHSL(this.props.settings.lineColor), fill:this.getHSL(this.props.settings.fillColor), stroke_width:`${this.props.settings.lineWidth}`}}]
        })
    }

    drawLine = (x2, y2, ratio) => {
        this.setState({
            tempElements: [{type: 'Line', properties: {x1:(this.startPoint[0]*ratio), y1:(this.startPoint[1]*ratio), x2:x2*ratio, y2:y2*ratio, stroke:this.getHSL(this.props.settings.lineColor), stroke_width:`${this.props.settings.lineWidth}`}}]
        })
    }

    drawRectangle = (x2, y2, ratio) => {
        this.setState({
            tempElements: [{type: 'Rectangle', properties: {x:(Math.min(this.startPoint[0],x2)*ratio), y:(Math.min(this.startPoint[1],y2)*ratio), width:Math.abs(x2-this.startPoint[0])*ratio, height:Math.abs(y2-this.startPoint[1])*ratio, stroke:this.getHSL(this.props.settings.lineColor), fill:this.getHSL(this.props.settings.fillColor), stroke_width:`${this.props.settings.lineWidth}`}}]
        })
    }

    drawPolyline = (x2, y2, ratio) => {
        if(this.state.tempElements.length){
            this.setState({
                tempElements: [{type: 'Polyline', properties: {...this.state.tempElements[0].properties, points: this.state.tempElements[0].properties.points + ` ${x2*ratio} ${y2*ratio}`}}] 
            })
        }else{
            this.setState({
                tempElements: [{type: 'Polyline', properties: {points:`${this.startPoint[0]*ratio} ${this.startPoint[1]*ratio} ${x2*ratio} ${y2*ratio}`, stroke:this.getHSL(this.props.settings.lineColor), stroke_width:`${this.props.settings.lineWidth}`}}]
            })
        }
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.handleSave(this.props.currentSketch.id, this.state)
    }

    getHSL = ({h, s, l}) => `hsl(${h},${s}%,${l}%)`

    render(){
        const elementsToRender = () => [...this.state.elements, ...this.state.tempElements]
        return(
            <>
                <div className='edit-sketch'>
                    <svg ref={this.sketchArea} viewBox = {`0 0 1000 500`} className={"sketch-board"} onMouseDown={this.handleOnMouseDown} onMouseUp={this.handleOnMouseUp} onMouseMove={this.handleOnMouseMove}>
                        <ElementsContainer elements={elementsToRender()} />
                    </svg>
                    <button onClick={this.handleSubmit}>SAVE</button>
                </div>
            </>
        )
    }
}

export default SketchContainer
