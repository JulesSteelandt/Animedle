import {createRootRoute, Outlet} from '@tanstack/react-router';
import {TanStackRouterDevtools} from '@tanstack/router-devtools';
import NavBar from '../components/navbar/Navbar.tsx';

export const Route = createRootRoute({
  component: () => {
    return (
      <div>
        <NavBar />
        <Outlet />
        <TanStackRouterDevtools />
      </div>
    );
  },
});
