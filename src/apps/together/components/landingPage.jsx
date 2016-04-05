class LandingPage extends React.Component {
  render(){
    if (!this.props.user) {
      return (
        <div className="slider fullscreen">
          <ul className="slides">
            <li>
              <img src="images/background.jpg"/>
              <div className="caption center-align">
                <h3 className="light white-text">Welcome to Jukebox!</h3>
                <h5 className="light white-text">The collaborative party playlist.</h5>
              </div>
            </li>
            <li>
              <img src="images/play.jpg"/>
              <div className="caption left-align">
                <h3>Your Music. Your Way.</h3>
                <h5 className="light grey-text text-lighten-3">Suggest, vote, and chat about your favorite tunes</h5>
              </div>
            </li>
            <li>
              <img src="images/amp.jpg"/>
              <div className="caption right-align">
                <h3>Get started today!</h3>
                <h5 className="light grey-text text-lighten-3">Login with Github and get jammin'</h5>
                <div className="row">
	            		<a className="waves-effect waves-light btn-large grey darken-3" onClick={this.props.actions.login}>LOGIN</a>
                </div>
              </div>
            </li>
          </ul>
        </div>
      );
    }
    else {
      return(<div></div>)
    } 
  }
  componentDidMount(){
    $(document).ready(function(){
      $('.slider').slider({full_width: true});
    });
  }
}
MyComponents.LandingPage = LandingPage