import Draggable from 'react-draggable';
import { A, Menu } from './App.style';

export function AppMenu() {
  return (
    <Draggable>
      <Menu>
        <A draggable={false} href='/gdi-ui'>
          Gdi UI
        </A>
        <A draggable={false} href='/igrid-viewer'>
          Igrid viewer
        </A>
        <A draggable={false} href='/igrid'>
          Igrid
        </A>
        <A draggable={false} href='/isokit'>
          Isokit
        </A>
        <A draggable={false} href='/platformer'>
          Platformer
        </A>
      </Menu>
    </Draggable>
  );
}
