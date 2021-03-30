import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/wizard",
    name: "Wizard",
    component: () => import("../views/Wizard.vue")
  },
  {
    path: "/my-data",
    name: "MyData",
    component: () => import("../views/MyData.vue")
  },
  {
    path: "/my-data/:id",
    name: "MyDataDetails",
    component: () => import("../views/MyDataDetails.vue")
  },
  {
    path: "/sign-up",
    name: "SignUp",
    component: () => import("../views/SignUp.vue")
  },
  {
    path: "/sign-up/confirmation",
    name: "SignUpConfirmation",
    component: () => import("../views/SignUpConfirmation.vue")
  },
  {
    path: "/log-in",
    name: "LogIn",
    component: () => import("../views/LogIn.vue")
  },
  {
    path: "/forgot-your-password",
    name: "ForgotYourPassword",
    component: () => import("../views/ForgotYourPassword.vue")
  },
  {
    path: "/welcome",
    name: "Welcome",
    component: () => import("../views/Welcome.vue")
  },
  {
    path: "/terms-and-conditions",
    name: "TermsAndConditions",
    component: () => import("../views/TermsAndConditions.vue")
  },
  {
    path: "/contact-us",
    name: "ContactUs",
    component: () => import("../views/ContactUs.vue")
  },
  {
    path: "/my-profile",
    name: "MyProfile",
    component: () => import("../views/MyProfile.vue")
  },
  {
    path: "*",
    name: "404",
    component: () => import("../views/404.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.afterEach(() => {
  window.scrollTo(0, 0);
});

export default router;
