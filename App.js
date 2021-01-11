import React from "react";
import FormComponent from "./FormComponent";
import ShowForm from "./ShowForm";
const App = () => {
  return (
    <>
      <FormComponent />
      <Switch>
        <Route exact path="/FormComponent" render={() => <FormComponent />} />
        <Route exact path="/ShowForm" render={() => <ShowForm />} />
        <Redirect to="/" />
      </Switch>
    </>
  );
};

export default App;
