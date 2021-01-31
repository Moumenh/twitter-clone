import React from 'react';
import { Link } from "react-router-dom";
import { Avatar, Button } from '@material-ui/core';
import { connect } from 'react-redux'

import './Header.css'

const Header = ({ user, image }) => {

    const logOut = () => {
        localStorage.removeItem('access')
        window.location.reload()
    }
    return (
        <div className='header'>
            <div style={{ width: '33%', display: 'flex', justifyContent: 'flex-start' }}>
                <img src='https://cdn.dribbble.com/users/3749472/screenshots/6893259/birdicon_1x.png?compress=1&resize=400x300' className='header__icon' alt='icon' />
            </div>
            <div className='header__taps'>
                <Link to='/home' style={{ textDecoration: 'none' }}><p>Home</p></Link>
                <Link to='/explore' style={{ textDecoration: 'none' }}><p>Explore</p></Link>
                <Link to='/Bookmarks' style={{ textDecoration: 'none' }}><p>Bookmarks</p></Link>
            </div>
            <div className='header__profile'>
                <Link to='/profile'><Avatar alt="Remy Sharp" src={image} /></Link>
                <p>{user.name}</p>
                <Button onClick={logOut} variant="contained" size='small' color='primary' style={{ marginLeft: '20px' }}>Log Out</Button>
            </div>
        </div>
    )

}

const mapStateToProps = ({ user: { user, image } }) => {
    return {
        user,
        image
    }
}


export default connect(mapStateToProps)(Header)