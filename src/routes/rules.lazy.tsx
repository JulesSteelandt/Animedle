import {createLazyFileRoute} from '@tanstack/react-router';
import Rules from '../Pages/Rules.tsx';

export const Route = createLazyFileRoute('/rules')({
  component: page,
});

function page() {
  return <Rules />;
}
