import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import PropTypes from 'prop-types'

export class Navbar extends Component {
  render() {
    return (
       <nav className='navbar navbar-dark bg-info'>
          <div className="container">
            <a href="" className='navbar-brand'>
                 <i class={this.props.icon} ></i>  {this.props.title}
            </a>
          </div>
       </nav>
    )
  }
}

Navbar.defaultProps= {
  title:"Github Search",
  icon:"fab fa-github"
}
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired

}

export default Navbar