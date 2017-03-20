import React from 'react'
import { browserHistory } from 'react-router' 

class Note extends React.Component {
    constructor(props) {
    super(props)
    }

    render() {

        return <div>
         <div className="jumbotron">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <h1>Needed Vinyal</h1>
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
                            <button type="button" className="btn btn-default">All</button>
                        </div>
                        <div className="btn-group" role="group">
                            <button type="button" className="btn btn-warning">Needed Vinyal</button>
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

         <div className="container">
            <div className="row">
                <div className="col-sm-6 col-md-4">
                    <div className="thumbnail">
                        <img src="http://cdn.pitchfork.com/news/56526/f40a1fae.jpg" alt="Run The Jewls" />
                        <div className="caption">
                            <h3>Run The Jewls</h3>
                            <h5>Run The Jewls 3</h5>
                            <p>Self release with Killer Mike and El P</p>
                            
                           <br/><p><a href="#" className="btn btn-warning " role="button">Purchased</a></p>
                        </div>      
                    </div>
                 </div>    
                 <div className="col-sm-6 col-md-4">
                    <div className="thumbnail">
                        <img src="http://pitchfork-cdn.s3.amazonaws.com/content/BFDNL064_Thundercat_Drunk_Packshot.jpg" alt="Run The Jewls" />
                        <div className="caption">
                            <h3>Thundercat</h3>
                            <h5>Drunk</h5>                            
                            <p>Worked with Flying Lotus on thei recent album. Thundercat is whimsical and somber, funny and meaningful, sometimes all at once.</p>
                            
                           <br/><p><a href="#" className="btn btn-warning " role="button">Purchased</a></p>
                        </div>      
                    </div>
                    </div>
               
            </div>
            </div>
        </div>
        </div>
    }
}

// Note.propTypes = {
//     id: React.PropTypes.any.isRequired,
//     // completed: React.PropTypes.string.isRequired,
//     note: React.PropTypes.string.isRequired,
//     category: React.PropTypes.string.isRequired,
//     // toggleComplete: React.PropTypes.func.isRequired
// }

export default Note
