import React from "react";
import { useSelector } from 'react-redux';

function LogCheck() {
    const isLogged = useSelector(state => state.isLogged)
    if (!isLogged) {
        document.location.href = "/"
    }
}

export default LogCheck;