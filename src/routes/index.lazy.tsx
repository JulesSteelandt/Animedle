import {createLazyFileRoute} from '@tanstack/react-router';
import App from '../App.tsx';

const Homepage = () => {
  return <App />;
};

export const Route = createLazyFileRoute('/')({
  component: Homepage,
});
