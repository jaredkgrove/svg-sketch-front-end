import React from 'react';
import {fetchSketch} from '../actions/fetchSketch'
import {deleteSketch} from '../actions/deleteSketch'
import {clearCurrentSketch} from '../actions/clearCurrentSketch'

import {fetchSketches} from '../actions/fetchSketches'

import { connect } from 'react-redux';
import SketchPreviewContainer from '../containers/SketchPreviewContainer';
import SketchesList from '../components/SketchesList'
import NewSketchInput from '../components/NewSketchInput'
import '../styles/sketchView.css'
import { Link } from 'react-router-dom';

class SketchView extends React.Component {

    componentDidMount(){
        if (this.props.match.params.sketchID !== this.props.currentSketch.id){
            this.props.fetchSketch(this.props.match.params.sketchID)
        }
        if(!this.props.sketches.length){
            this.props.fetchSketches()
        }
    }

    componentDidUpdate(prevProps){
        if (this.props.match.params.sketchID !== prevProps.match.params.sketchID){
            this.props.fetchSketch(this.props.match.params.sketchID)
        }
    }

    handleClick = () => {
        this.props.clearCurrentSketch()
        this.props.deleteSketch(this.props.currentSketch.id)
    }

    render(){
        return(
            <div className='sketch-view'>
                <NewSketchInput />
                <div className='sketch-list'>
                    <h1>Sketches</h1>
                    <SketchesList sketches={[...this.props.sketches].sort((a, b) => b.lastUpdated.localeCompare(a.lastUpdated))}/>
                </div>
                <div className='sketch-data'>
                    <h1>{this.props.currentSketch.name}</h1>
                    <h6>Created: {this.props.currentSketch.created}</h6>
                    <h6>Updated: {this.props.currentSketch.lastUpdated}</h6>
                    <Link to={`/sketches/${this.props.currentSketch.id}/edit`}>EDIT</Link>
                    <button onClick={this.handleClick}>DELETE</button>
                </div>
                <div className='sketch-show'>
                    <SketchPreviewContainer elements={this.props.currentSketch.elements} handleSave={this.handleUpdateSketch}/>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        sketches: state.sketches,
        currentSketch: state.currentSketch
    }
  }

export default connect(mapStateToProps, {fetchSketch, fetchSketches, deleteSketch, clearCurrentSketch})(SketchView)


