import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { getAllNews } from './actions/Home'
import BackgroundImage from '../assets/Images/bgImage.jpeg'

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
            <div
                style={{
                    // backgroundColor: 'blue',
                    height: '1000px',
                    width: '100%',
                    backgroundPosition: 'center',
                    backgroundImage: `url(${BackgroundImage})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                }}
            >
                {this.renderNavBar()}
                <h1
                    style={{
                        textAlign: 'center',
                        color: 'red',
                    }}
                >
                    Welcome To News Hunger!!!
                </h1>
                {/* <img
                    src={BackgroundImage}
                    style={{ width: 500, height: 300 }}
                /> */}
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
