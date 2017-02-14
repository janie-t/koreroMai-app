const React = require('react')
const { connect } = require('react-redux')
const { Link } = require('react-router')

function Home(props) {
  return (
    <div className='homepage-div'>

      <div className='main-heading'>
        <h1 className="h1-home">Kōrero Mai</h1><br />
      </div>
      <div className='row sub-heading'>
        <h3 className="h3-home">Learn Te Reo!</h3>
      </div>
      <div className='row main-button'>
        <Link to="activity"><button className="play-button">PLAY!</button></Link>
      </div>

    </div>

  )
}

module.exports = connect((state) => state)(Home)
      // <div className='spider'>
      //   <img src='../images/decoration-images/home/pungawerewere.png'/>
      // </div>
      // <div className='kiwi'>
      //   <img src='../images/decoration-images/home/kiwi.png'/>
      // </div>
      // <div className='grass'>
      //   <img src='../images/decoration-images/home/grass.png'/>
      // </div>
      // <div className='butterfly'>
      //   <img src='../images/decoration-images/home/butterfly.png'/>
      // </div>
      // <div className='bee'>
      //   <img src='../images/decoration-images/home/bee.png'/>
      // </div>
