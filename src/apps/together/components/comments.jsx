MyComponents.Comment = React.createClass({
  render: function() {
    return (
      <div>
        <div className="chip">
          <img src={this.props.discuss.imageURL}/>
            <b>{this.props.discuss.userName}:</b> <i>{this.props.discuss.comment}</i>
        </div>
        <br/><br/>
      </div>
    );
  }
});

class Comments extends React.Component {
  render(){
    var u = this.props.user
  	var comments = this.props.Comments.map(function(c,i){
      return <MyComponents.Comment discuss={c} key={i} user={u}/>
    })

    if (this.props.user) {
      return (
        <div>
          <div className="card">
            <div className="card-content">
              <div className="row">
                <div className="col s1"><i className="small material-icons">chat</i></div>
                <div className="col s6"><h6>Chat Room</h6></div>
                <div className="progress blue-grey darken-4">
                  <div className="determinate"></div>
                </div>
              </div>
              <div id="scrollable">
                { comments }
              </div>
            </div>
            <div className="card-content">
              <ul>
                <div className="row">
                  <div className="input-field col m12 s12">
                    <textarea id="comment" className="materialize-textarea"></textarea>
                    <label for="comment">Comment</label>
                  </div>
                  <div className="card-action">
                    <a className="waves-effect waves-light btn blue-grey darken-4" onClick={this.props.actions.submitComment}>Submit</a>
                  </div>
                </div>
              </ul>
            </div>
          </div>      
        </div>
      )
    }
    else {
      return (
        <div>
          <div className="card">
            <div className="card-content">
              <div className="row">
                <div className="col s1"><i className="small material-icons">chat</i></div>
                <div className="col s6"><h6>Chat Room</h6></div>
                <div className="progress blue-grey darken-4">
                  <div className="determinate"></div>
                </div>
              </div>
              <div id="scrollable">
                { comments }
              </div>
            </div>
          </div>      
        </div>
      )
    }
  }
  componentDidMount(){
    $(document).ready(function(){
      $('.collapsible').collapsible({
        accordion : false
      });
    });
  }
}
MyComponents.Comments = Comments