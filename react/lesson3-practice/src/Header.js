import React from 'react';
import PropTypes from 'prop-types';

const Header = ({userData}) => (
    <header>{userData.map(el => <p>{el.title} and {el.text}</p>)}</header>
)

Header.propTypes = {
    userData: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired,
        })
    )
}

export default Header;