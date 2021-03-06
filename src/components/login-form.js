const React = require('react')
const request = require('superagent')

module.exports = class LoginForm extends React.Component {
  handleSubmit(e) {
    e.preventDefault()

    const email = this.refs.email.value
    const password = this.refs.password.value

    request.post('/api/v1/auth/login')
      .send({email, password})
      .end((err, res) => {
        if (err) {
          console.log(err);
        } else {
          if (!res.body.isUser) {
            alert('Please login')
            this.props.router.push('/login-register')
          } else {
              const user = res.body.userData
              const userID = res.body.userData.id
              const userName = res.body.userData.username
              this.props.dispatch({type:'UPDATE_USER', payload: user})
              this.props.router.push(`/users/${userID}/profile`)
            }
          }
      })
  }


  render() {
    return (
      <div>
        <div className='login-header'>Login</div>
          <div className='login-container'>
            <div className='row'>
              <div className='columns small-centered small-10 medium-6 large-4'>
                  <form method='post' action='/login'>
                    <input type='text' className='email' ref='email' placeholder='Email' />
                    <input type='password' className='password' ref='password' placeholder='Password' />
                    <button className='button expanded hollow' onClick={this.handleSubmit.bind(this)}>
                      Login
                    </button>
                  </form>
              </div>
            </div>
          </div>
      </div>
    )
  }
}
