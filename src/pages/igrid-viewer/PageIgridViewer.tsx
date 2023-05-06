import styled from 'styled-components';
import { Grid } from 'igrid-viewer';
import { elements } from './PageIgridViewer.data';
import { allWidgets } from 'widgets';

export function PageIgridViewer() {
  return (
    <Wrapper>
      <Grid id='main' widgets={allWidgets} elements={elements} />
    </Wrapper>
  );
}

export const Wrapper = styled.div`
  flex: 1;
  display: flex;
`;
