/* eslint-disable react/jsx-no-constructed-context-values */
import routes from "app/configs/routesConfig";
import Provider from "react-redux/es/components/Provider";
import AppContext from "./AppContext";
import store from "./store";

const withAppProviders = (Component) => (props) => {
  function WrapperComponent() {
    return (
      <AppContext.Provider
        value={{
          routes,
        }}
      >
        <Provider store={store}>
          <Component {...props} />
        </Provider>
      </AppContext.Provider>
    );
  }

  return WrapperComponent;
};

export default withAppProviders;
