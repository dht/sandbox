import styled from 'styled-components';
import { Icon } from '@gdi/ui';

export function PageGdiUi() {
  return (
    <Wrapper>
      <Icon name='diamond' />
    </Wrapper>
  );
}

export const Wrapper = styled.div`
  display: flex;
  flex: 1;
`;
