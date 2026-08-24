import { createRootRoute, createRoute, createRouter, Outlet } from '@tanstack/react-router'
import { Dashboard } from './pages/dashboard'
import { Settings } from './pages/settings'

const rootRoute = createRootRoute({ component: () => <Outlet /> })
const dashboardRoute = createRoute({ getParentRoute: () => rootRoute, path: '/', component: Dashboard })
const settingsRoute = createRoute({ getParentRoute: () => rootRoute, path: '/settings', component: Settings })
const routeTree = rootRoute.addChildren([dashboardRoute, settingsRoute])
export const router = createRouter({ routeTree })
declare module '@tanstack/react-router' { interface Register { router: typeof router } }