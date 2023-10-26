const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        name: "home",
        component: () => import("pages/IndexPage.vue"),
      },
      {
        path: "/contact",
        name: "contact",
        component: () => import("pages/ContactPage.vue"),
      },
      {
        path: "/galerie",
        name: "galerie",
        component: () => import("pages/GaleriePage.vue"),
      },
      {
        path: "/activites",
        name: "activites",
        component: () => import("pages/ActivitesPage.vue"),
      },
      {
        path: "/apropos",
        name: "apropos",
        component: () => import("pages/AproposPage.vue"),
      },
      {
        path: "/blog",
        name: "blog",
        component: () => import("pages/BlogsPage.vue"),
      },
      {
        path: "/location1",
        name: "location1",
        component: () => import("pages/Location1Page.vue"),
      },
      {
        path: "/location2",
        name: "location2",
        component: () => import("pages/Location2Page.vue"),
      },

      {
        path: "/blogs/:slug",
        name:"blogs",
        component: () => import("pages/BlogdetailPage.vue"),
      },
      {
        path: "/reservation",
        name: "reservation",
        component: () => import("pages/ReservationPage.vue"),
      },
      {
        path: "/login",
        name:"login",
        component: () => import("pages/LoginPage.vue"),
      },
      {
        path: "/register/:reservationId",
        name: "register",
        component: () => import("pages/RegisterPage.vue"),
      },
      {
        path: "/confirmation/:reservationId",
        name: "confirmation",
        component: () => import("pages/ConfirmationPage.vue"),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
