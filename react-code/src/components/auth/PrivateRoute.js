import React from "react";
import {Route, Redirect} from "react-router-dom";
import {useAuth} from "./auth"

function PrivateRoute({children, isPrivate, ...props}) {
  const isAuthenticated = useAuth();
  // either the route is marked as public or the user is authenticated
  if (!isAuthenticated || !isPrivate) {
  return (
    // hmmmmmmm
    <Route exact {...props}>
      {children}
    </Route> ) }
  else {
    return (
      <Redirect to="/login"/>
    )
  }
}

export default PrivateRoute;