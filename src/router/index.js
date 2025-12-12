import { createRouter, createWebHistory } from "vue-router";

import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import BMI from "@/views/BMI.vue";
import Temperature from "@/views/Temperature.vue";
import Children1 from "@/views/Children1.vue";
import Children2 from "@/views/Children2.vue";
import NotFound from "@/views/NotFound.vue";
import Lifecycle from "@/views/Lifecycle.vue";
import DemoList from "@/views/DemoList.vue";
import ToDoList from "@/views/ToDoList.vue";
import Parent from '@/views/Parent.vue';
import CardList from '@/views/CardList.vue';
import ScoreTable from "@/views/ScoreTable.vue";

const routes = [
  {
    path: "/",
    component: Home,
    name: "Home",
    children: [
      {
        path: "Children1/:id",
        component: Children1,
        name: "Children1",
        props: true,
      },
      {
        path: "Children2/:id",
        component: Children2,
        name: "Children2",
      },
    ],
  },
  {
    path: "/About",
    component: About,
    name: "About",
  },
  {
    path: "/BMI",
    component: BMI,
    name: "BMI",
  },
  {
    path: "/Temperature",
    component: Temperature,
    name: "Temperature",
  },
  {
    path: "/Lifecycle",
    component: Lifecycle,
    name: "Lifecycle",
  },
  {
    path: "/DemoList",
    component: DemoList,
    name: "DemoList",
  },
  {
    path: "/ToDoList",
    component: ToDoList,
    name: "ToDoList"
  },
  {
    path: "/Parent",
    component: Parent,
    name: "Parent"
  },
  {
    path: "/CardList",
    component: CardList,
    name: "CardList"
  },
  {
    path: "/ScoreTable",
    component: ScoreTable,
    name: "ScoreTable"
  },
  {
    path: "/:pathMatch(.*)*",
    component: NotFound,
    name: "NotFound",
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
