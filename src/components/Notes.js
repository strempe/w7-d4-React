import React from 'react'
// import { connect } from 'react-redux'
// import { browserHistory } from 'react-router' 
import store from 'store'
import Nav from './Nav'
import Note from './Note'
import NewNote from './NewNote'
import Layout from './Layout'

class Notes extends React.Component {
    constructor(props) {
        super(props)
    //     this.getNotes = this.getNotes.bind(this)
    }

    // get notes
    render() {
        var store = require('store')
        console.log('notes' + store.get('notes'))
         if (store.get('notes') === undefined) {


        return <div className="wrap">
         <div className="jumbotron">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <h1>ListIn</h1>
                        <h3>Welcome the a new way to store new music</h3>
                        <p>keep track of new artist and albums you would like to explore</p>
                        {/*<p><a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a></p>*/}
                    </div>
                </div>
            </div>   
         </div>
         
         <div className="container">
            <div className="row">
                <div className="col-sm-10 col-sm-offset-1">
                    <div className="btn-group btn-group-justified" role="group" aria-label="...">
                        <div className="btn-group" role="group">
                            <button type="button" className="btn btn-warning">All</button>
                        </div>
                        <div className="btn-group" role="group">
                            <button type="button" className="btn btn-default">Needed Vinyal</button>
                        </div>
                        <div className="btn-group" role="group">
                            <button type="button" className="btn btn-default">Listen</button>
                        </div>
                        <div className="btn-group" role="group">
                            <button type="button" className="btn btn-default">Dropping Soon</button>
                        </div>
                    </div>
                </div>
            </div>
           <br/> 

            <div className="row">
                <div className="col-sm-6 col-md-4">
                    <div className="thumbnail">
                        {/*<img src="..." alt="..." />*/}
                        <h2 className="text-center">Start</h2>
                        <hr/>
                        <div className="caption">
                            <h3>Add a title</h3>
                            <p>Add note about this artist or album. Choose a category below.</p>
                                
                           <select className="form-control">
                                <option>Needed Vinyal</option>
                                <option>Listen</option>
                                <option>Dropping Soon</option>
                                <option>Events</option>
                            </select>
                            
                           <br/><p><a href="#" className="btn btn-danger " role="button">Add</a></p>
                        </div>      
                    </div>
                </div>
            </div>
        </div>  
 </div>
             // <div className="alert alert-success text-center">Please start by adding a note above.</div>
        } 
        else {
        let notes = store.get('notes').map((note, key) => <Note key={key} {...note} />)
        console.log(notes + 'notes')
       

        return <Layout>
            <h5 className="text-center">New Note</h5>
            <div className="well">
                <NewNote addNote={this.addNote} />
            </div>
            <h5 className="text-center">All Notes</h5>
            <ul className="list-group">
                {notes}
            </ul>
        </Layout>
        }
    }
}


export default Notes

