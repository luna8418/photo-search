import * as React from "react";
import { Input, Layout } from 'antd';
import styled from "styled-components";
import { observer } from "mobx-react";
import { AppContext } from "../AppContext";
import { NoPhotoFound } from "./NoPhotoFound";
import { PhotoTable } from "./PhotoTable";

const { Content } = Layout;
const { Search } = Input;

export const PhotoContent = styled(Content)`
  margin: 20px;
`;

export const PhotoApp = () => {
  const { photoStore } = React.useContext(AppContext);

  return <Layout>
    <PhotoContent>
      <Search
        placeholder="Search keywords on title"
        size="large"
        loading={photoStore.searching}
        onChange={(e) => photoStore.keyword = e.target.value}
        onSearch={async() => await photoStore.search()}
      />

      {photoStore.keyword && !photoStore.searching && photoStore.photos?.length === 0 &&
        <NoPhotoFound />
      }

      {photoStore.keyword && !photoStore.searching && photoStore.photos?.length > 0 &&
        <PhotoTable
          photos={photoStore.photos}
        />
      }
    </PhotoContent>
  </Layout>
}

export const PhotoAppObserver = observer(PhotoApp);
