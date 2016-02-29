MyComponents.GarageSpaces = React.createClass({
  render: function() {
    return (
      <div className="card grey darken-2">
        <div className="card-content text-center white-text">
          <h5><b>Open Spaces: </b>{this.props.open}/{this.props.total}</h5>
        </div>
      </div>
    );
  }
});
