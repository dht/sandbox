import styled from 'styled-components';
import { Grid } from 'igrid-viewer';
import { elements } from './PageIsokit.data';
import { allWidgets } from 'widgets';

export function PageIsokit() {
  return (
    <Wrapper>
      <Grid id='main' widgets={allWidgets} elements={elements} />
    </Wrapper>
  );
}

export const Wrapper = styled.div`
  display: flex;
  flex: 1;
`;
