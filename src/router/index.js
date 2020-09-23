import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
    {
      path:"/",
      redirect:"/Home"
    },
    {
      path:"/Home",
      name:"Home",
      component:()=>import("@/Home.vue")
    },
    {
      path:"/homePage",
      name:"homePage",
      component:()=>import("@/views/homePage.vue")
    },
    {
      path:"/sort",
      name:"sort",
      component:()=>import("@/views/sort.vue")
    },
    {
      path:"/car",
      name:"car",
      component:()=>import("@/views/car.vue")
    },
    {
      path:"/mine",
      name:"mine",
      component:()=>import("@/views/mine.vue")
    },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
