const React = require('react')
const { connect } = require('react-redux')

function Adventure(props) {
  return (
    <div>
      <p>You see a stick on the ground</p>
      <button>Take it</button>
      <button>Leave it</button>
    </div>
  )
}

module.exports = connect((state) => state)(Adventure)
