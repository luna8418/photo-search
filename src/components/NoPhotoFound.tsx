import * as React from "react";
import styled from "styled-components";

export const EmptyDisplay = styled.div`
  margin: 20px;
  width: 50px;
  font-size: 36px;
  text-align: center;
`;

export const NoPhotoFound: React.FC<{}> = () => {

  return (
    <EmptyDisplay>No photos found, please search by a different keyword.</EmptyDisplay>
  );
}
