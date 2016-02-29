MyComponents.GarageTitle = React.createClass({
  render: function() {
    return (
      <div className="card grey darken-2">
        <div className="card-content text-center white-text">
          <h2>{this.props.title}</h2>          
        </div>
      </div>
    );
  }
});
