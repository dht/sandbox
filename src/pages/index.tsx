import { PageGdiUiContainer } from './gdi-ui/PageGdiUi.container';
import { PageIgridViewerContainer } from './igrid-viewer/PageIgridViewer.container';
import { PageIgridContainer } from './igrid/PageIgrid.container';
import { PageIsokitContainer } from './isokit/PageIsokit.container';
import { PagePlatformerContainer } from './platformer/PagePlatformer.container';
import { PageWidgetsContainer } from './widgets/PageWidgets.container';

export const pages = {
  GdiUi: PageGdiUiContainer,
  Igrid: PageIgridContainer,
  IgridViewer: PageIgridViewerContainer,
  Isokit: PageIsokitContainer,
  Platformer: PagePlatformerContainer,
  Widgets: PageWidgetsContainer,
};
