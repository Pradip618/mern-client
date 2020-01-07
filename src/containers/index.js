import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { getAllNews } from './actions/Home'

class Home extends Component {
    componentDidMount() {
        this.props.getNews('Hello')
    }
    renderNavBar = () => {
        return (
            <div>
                <Link to="/login">
                    <button>Login</button>
                </Link>
                <Link to="/register">
                    <button>Sign Up</button>
                </Link>
            </div>
        )
    }

    render() {
        return (
            <div>
                {this.renderNavBar()}
                <h1 style={{ textAlign: 'center' }}>
                    Welcome To News Hunger!!!
                </h1>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    state,
})
const mapDispatchToProps = dispatch => ({
    getNews: data => dispatch(getAllNews(data)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
