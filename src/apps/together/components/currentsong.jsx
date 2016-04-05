
class CurrentSong extends React.Component {
  render(){
  	if (this.props.user) {
  	var currentSong = this.props.currentSong.map(function(s,i){
      return (
		    <li key={i}>
          <h3><i>You are currently listening to <b>{s.songName}</b> by <b>{s.artist}</b></i></h3>
		    </li>		
      )
    })

    return (
      <div className="col s12 center">
        <ul>
          { currentSong }
        </ul>     
      </div>
    )
  }
  else {
      return(<div></div>)
    }
}

}
MyComponents.CurrentSong = CurrentSong