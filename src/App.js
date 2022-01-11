import Affichage from "./components/Affichage";
import "./App.css";
import Button from "./components/Button";
import ByAmount from "./components/ByAmount";
import React from "react";
import { useDispatch } from "react-redux";
import { getPosts } from "./actions/postsActions";
import Users from "./components/Users";

function App() {
    const dispatch = useDispatch();
    // React.useEffect(() => {
    //   dispatch(getPosts())
    // }, [])

    return (
        <div className="App">
            {/* <Button />
            <Affichage />
            <ByAmount /> */}
            <Users />
        </div>
    );
}

export default App;
