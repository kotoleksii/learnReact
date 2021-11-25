import React from "react";
import {GlobalStyle, Wrapper} from "./styles";
import {Link} from "react-router-dom";

import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import About from "../About";
import Statistics from "../Statistics";
import Home from "../Home";

const App = () => {
    return (
        <BrowserRouter>
            <Wrapper>
                <GlobalStyle/>

                <nav>
                    <Link to="/">Home</Link> |{" "}
                    <Link to="about">About</Link> |{" "}
                    <Link to="statistics">Statistics</Link>
                </nav>


                <Routes>
                    <Route path="/" element={<Home/>}> </Route>
                    <Route path="about" element={<About/>}> </Route>
                    <Route path="statistics" element={<Statistics/>}> </Route>
                </Routes>
            </Wrapper>
        </BrowserRouter>
    )
}

export default App;
