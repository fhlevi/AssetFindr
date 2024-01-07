import { createRouter, createWebHistory } from "vue-router"
import RouteBase from "./path"

const router = createRouter({
    history: createWebHistory(),
    routes: RouteBase
})

export default router