import React from 'react'
import Nav from './Nav'
import store from 'store'
import { connect } from 'react-router'
import { browserHistory } from 'react-router' 


class NewNote extends React.Component {
    // Button to work 
    constructor(props) {
        super(props)
        this.addNote = this.addNote.bind(this)

        this.state={
            // things, but not sure what things
        }
    }
    
    addNote() {
        let note = store.get('notes')
        if ( ! note ){
            note = []
        }
        note.push(this.state)
        browserHistory.push('/')
    
        this.onClick = this.onClick.bind(this)
        this.state = {
            description: '',
            category: '',
        }
    }
     onClick(newNote) { 
        newNote(this.state.description, this.state.category)
            this.setState({
            description: '',
            category: ''
            
    })
     }
    // Add a new note 

   render() {
       var store = require ('store')
          return <div className="container">
          <br />
        <div className="row">
            <div className="col-sm-6 col-sm-offset-3">
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h3 className="panel-title">New Music</h3>
                    </div>

                    <div className="panel-body">
                        <div className="form-group">
                            <select className="form-control" value={this.state.category} onChange={(e) => this.setState({category: e.target.value})}>
                                <option value="">Category...</option>
                                <option value="">To Purchase</option>
                                <option value="">Recomended</option>
                                <option value="">Favorites</option>
                            </select>
                    </div>
               
                        <form className="form-inline-group">
                        <div className="col-lg-6">
                        <div className="form-group">
                            <label className="sr-only" for="exampleInputEmail3">Artist</label>
                            <input type="email" className="form-control" placeholder="Artist" />
                        </div>
                        </div>
                        <div className="col-lg-6">
                        <div className="form-group">
                            <label className="sr-only" for="exampleInputPassword3">Album</label>
                            <input type="password" className="form-control" placeholder="Album" />
                        </div>
                        </div>
                       
                        </form>
                       
                 
                            <div className="input-group">
                                <input type="text" className="form-control" value={this.state.description} onChange={(e) => this.setState({description: e.target.value})} /> 
                                <span className="input-group-btn">
                                    <button className="btn btn-default" type="button" onClick={() => this.onClick(this.props.getNote)}>Notes</button>
                                </span>
                            </div>
                       
                        </div> 
                    </div>
                    </div>
                    
                    </div>
                </div>
                
     
    }
}

NewNote.propTypes = {
    newNote: React.PropTypes.func.isRequired
}

export default NewNote