import * as React from "react";
import { Input, Layout } from 'antd';
import { observer } from "mobx-react";
import { AppContext } from "../AppContext";
import { NoPhotoFound } from "./NoPhotoFound";
import { PhotoTable } from "./PhotoTable";

const { Content } = Layout;
const { Search } = Input;

export const PhotoApp = () => {
  const { photoStore } = React.useContext(AppContext);

  return <Layout>
    <Content>
      <Search
        placeholder="Search keywords on title"
        loading={photoStore.searching}
        onChange={(e) => photoStore.keyword = e.target.value}
      />

      {photoStore.keyword && !photoStore.searching && photoStore.photos?.length === 0 &&
        <NoPhotoFound />
      }

      {photoStore.keyword && !photoStore.searching && photoStore.photos?.length > 0 &&
        <PhotoTable
          photos={photoStore.photos}
        />
      }
    </Content>
  </Layout>
}

export const PhotoAppObserver = observer(PhotoApp);
