import themesConfig from "app/configs/themesConfig";

const settingsConfig = {
  layout: {
    style: "layout1", // layout1 layout2 layout3
    config: {}, // checkout default layout configs at app/theme-layouts for example  app/theme-layouts/layout1/Layout1Config.js
  },
  customScrollbars: true,
  theme: {
    main: themesConfig.default,
    navbar: themesConfig.defaultDark,
    toolbar: themesConfig.default,
    footer: themesConfig.default,
  },
  defaultAuth: ["admin"],
  loginRedirectUrl: "/",
};

export default settingsConfig;
