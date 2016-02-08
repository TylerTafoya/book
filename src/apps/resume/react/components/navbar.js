MyComponents.NavBar = React.createClass({
  render: function() {
    return (
      <nav className="green accent-1">
        <div className="nav-wrapper">
        <a href="#" className="brand-logo center black-text">Tyler Tafoya</a>
        <ul id="nav-mobile" className="black-text right hide-on-med-and-down">
          <li><a href="#skills-heading">Skills</a></li>
          <li><a href="#tasks-heading">Tasks</a></li>
          <li><a href="#cities-heading">Cities</a></li>          
        </ul>
        </div>
      </nav>
    );
  }
});
