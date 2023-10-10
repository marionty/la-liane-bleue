const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/IndexPage.vue") },
      { path: "/contact", component: () => import("pages/ContactPage.vue") },
      { path: "/galerie", component: () => import("pages/GaleriePage.vue") },
      {
        path: "/activites",
        component: () => import("pages/ActivitesPage.vue"),
      },
      { path: "/apropos", component: () => import("pages/AproposPage.vue") },
      { path: "/blog", component: () => import("pages/BlogsPage.vue") },
      {
        path: "/location1",
        component: () => import("pages/Location1Page.vue"),
      },
      {
        path: "/location2",
        component: () => import("pages/Location2Page.vue"),
      },
      {
        path: "/blogs/:slug",
        component: () => import("pages/BlogdetailPage.vue"),
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
