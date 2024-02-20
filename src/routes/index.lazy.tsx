import {createLazyFileRoute} from '@tanstack/react-router';
import Index from '../Pages';

const page = () => {
  return <Index />;
};

export const Route = createLazyFileRoute('/')({
  component: page,
});
