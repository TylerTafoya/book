MyComponents.City = React.createClass({

  render: function() {

    this.props.city.currently.icon = "img/" + this.props.city.currently.icon + ".png"
    return (

      
      <div className="col s4">
        <div className="card">
          <div className="card-image waves-effect waves-block waves-light">
            <img className="activator" src={"images/"+this.props.city.name+".jpg"}/>
          </div>
          <div className="card-reveal green accent-1">
            <span className="card-title activator grey-text text-darken-4">{this.props.city.name.toUpperCase()}<i className="material-icons right">more_vert</i></span>
            <ul className="collection">
              <li className="collection-item"> {this.props.city.minutely.summary} </li>
              <li className="collection-item"><b>Current Temperature:</b> {this.props.city.minutely.summary} </li>
              <li className="collection-item"><b>Cloud Coverage:</b> {this.props.city.currently.cloudCover} </li>
              <li className="collection-item"><b>Chance of Precipitation:</b> {this.props.city.currently.precipProbability} </li>
              <li className="collection-item"><b>Humidity:</b> {this.props.city.currently.humidity} </li>
              <li className="collection-item"><b>Visability:</b> {this.props.city.currently.visibility} miles</li>
              <li className="collection-item"><b>Nearest Storm:</b> {this.props.city.currently.nearestStormDistance} miles away</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }

});

MyComponents.CityList = React.createClass({
  render: function() {

    var cityElements = this.props.cities.map(function(c,i){
      return <MyComponents.City city={c} key={i}/>
    })

    return (
      <ul className="collection">
        {cityElements}
      </ul>
    );
  }
});
