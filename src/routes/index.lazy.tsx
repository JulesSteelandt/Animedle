import {createLazyFileRoute} from '@tanstack/react-router';
import Index from '../Pages';

const Homepage = () => {
  return <Index />;
};

export const Route = createLazyFileRoute('/')({
  component: Homepage,
});
