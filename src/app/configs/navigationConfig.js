// import authRoles from "../auth/authRoles";

const navigationConfig = [
  {
    id: "dashboards",
    title: "Dashboards",
    subtitle: "Unique dashboard designs",
    type: "group",
    icon: "heroicons-outline:home",
    translate: "DASHBOARDS",
    children: [
      {
        id: "dashboards.project",
        title: "Project",
        type: "item",
        icon: "heroicons-outline:clipboard-check",
        url: "/dashboards/project",
      },
      {
        id: "dashboards.analytics",
        title: "Analytics",
        type: "item",
        icon: "heroicons-outline:chart-pie",
        url: "/dashboards/analytics",
      },
      {
        id: "dashboards.finance",
        title: "Finance",
        type: "item",
        icon: "heroicons-outline:cash",
        url: "/dashboards/finance",
      },
      {
        id: "dashboards.crypto",
        title: "Crypto",
        type: "item",
        icon: "heroicons-outline:currency-dollar",
        url: "/dashboards/crypto",
      },
    ],
  },
];

export default navigationConfig;
