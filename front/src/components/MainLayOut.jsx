import PropTypes from 'prop-types';

import NavBar from "./NavBar";

export default function MainLayOut ({children}) {
    return (
        <>
        <NavBar />
        {children}
        </>
    );
}

MainLayOut.propTypes = {
  children: PropTypes.node,
};