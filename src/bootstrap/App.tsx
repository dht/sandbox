import { pages } from '../pages';
import { AppMenu } from './App.menu';
import { Wrapper } from './App.style';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

export function App() {
  return (
    <Wrapper>
      <Router>
        <Routes>
          <Route path='/' element={<pages.IgridViewer />}></Route>
          <Route path='/gdi-ui' element={<pages.GdiUi />}></Route>
          <Route path='/igrid' element={<pages.Igrid />}></Route>
          <Route path='/igrid-viewer' element={<pages.IgridViewer />}></Route>
          <Route path='/isokit' element={<pages.Isokit />}></Route>
          <Route path='/platformer' element={<pages.Platformer />}></Route>
          <Route path='/widgets' element={<pages.Widgets />}></Route>
        </Routes>
        <AppMenu />
      </Router>
    </Wrapper>
  );
}
