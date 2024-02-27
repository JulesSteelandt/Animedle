import {createLazyFileRoute} from '@tanstack/react-router';
import Rules from '../Pages/Rules.tsx';

export const Route = createLazyFileRoute('/play/classic')({
  component: page,
});

function page() {
 return <Rules/>;
}
