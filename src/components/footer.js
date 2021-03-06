const React = require('react')
const { connect } = require('react-redux')
const { Link } = require('react-router')

function Footer(props) {
  return (
    <div className='footer'>
      <p>
        &copy; 2017 | <a href='mailto:koreromaiapp@gmail.com' target='_blank' className='white'>Contact us</a> | <Link to='help' className='white'>Help</Link> | <Link to='/privacy-policy' className='white'>Privacy policy</Link>
      </p>
    </div>
  )
}

module.exports = connect((state) => state)(Footer)
