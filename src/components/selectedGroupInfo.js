const React = require('react')
const { connect } = require('react-redux')
const AddPlayer = require('./addplayer')
const PlayerRow = require('./playerRow')
const EditPLayerRow = require('./editPlayer')

class groupInfo extends React.Component {

  componentDidMount() {
    const { dispatch } = this.props
  }

  mapPlayers(players) {
    const { dispatch, editPlayer, id, users, groups} = this.props

    return players.map((player) => {
      return player.player_token === editPlayer
        ? <EditPLayerRow dispatch={dispatch} player={player} id={id}/>
        : <PlayerRow dispatch={dispatch} player={player} users={users} id={id} groups={groups}/>
    })
  }

  render() {
    const { dispatch, editPlayer, id, users } = this.props
      return (
        <div className='row'>
          <h2>{this.props.players.group_name} Information:</h2>
          <table className='hover'>
            <thead>
              <tr>
                <th>Student</th>
                <th>Token</th>
                <th>Group</th>
                <th>Letters Total Incorrect</th>
                <th>Words Total Incorrect</th>
                <th>Student progress</th>
                <th>Edit Student</th>
                <th>Delete Student</th>
              </tr>
            </thead>
              <tbody>
                {this.mapPlayers(this.props.players.players)}
                <AddPlayer id={id} />
              </tbody>
            </table>
        </div>
      )
    }
  }

module.exports = connect((state) => state)(groupInfo)
