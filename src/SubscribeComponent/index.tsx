import React from 'react';
import { styled } from '@linaria/react';

const SubscribeComponentContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  width: 100%;
  border: 1px solid #ccc;
`;
const SubscribeHeader = styled.div`
  display: flex;
  color: #2057df;
  font-weight: 700;
`;
const SubscribeComponent: React.FunctionComponent = () => {
  return (
    <SubscribeComponentContainer>
      <SubscribeHeader>Autoship and save more</SubscribeHeader>
    </SubscribeComponentContainer>
  );
};

export { SubscribeComponent };
