import React from "react";

const Rendering = (props) => {
    const Welcome= <h1>Welcome {props.username} </h1>

    const Logout= <h1>Can't Login</h1>   

return (props.islogged ? Welcome : Logout)

}

export default Rendering;