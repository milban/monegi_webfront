import React from "react"
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom"
import Header from "./Header"
import Home from "../Screens/Home"
import AddPlaylist from "../Screens/AddPlaylist"

export default () => {
  return (
    <Router>
      <Header></Header>
      <Route>
        <Route path="/" exact component={Home}></Route>
        <Route path="/addplaylist" exact component={AddPlaylist}></Route>
        <Redirect from="*" to="/"></Redirect>
      </Route>
    </Router>
  )
}
