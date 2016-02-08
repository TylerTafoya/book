MyComponents.About = React.createClass({

  render: function() {
    return (
      <div className="row">
        <div className="col s12">
          <div className="card">
            <div className="card-image">
              <img src="images/tyler.jpg"></img>
              <span className="card-title black-text"><h1>{this.props.about.name}</h1></span>
            </div>
            <div className="card-content">
              <p><b>Education:</b> {this.props.about.school}</p>
              <p><b>Major:</b> {this.props.about.major}</p>
              <p><b>Minor:</b> {this.props.about.minor}</p>
              <p><b>Year:</b> {this.props.about.grade}</p>
              <p>
                <div className="chip">
                <img src={"images/Bear.jpg"}/>
                <a href={this.props.about.github}>Check out my Github!</a>
                </div>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
});