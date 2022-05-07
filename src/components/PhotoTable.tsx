import * as React from "react";
import { Image, Table } from 'antd';
import { Photo } from "../types/types";

export const PhotoTable: React.FC<{ photos: Photo[] }> = ({ photos }) => {
  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'Thumbnail',
      dataIndex: 'thumbnailUrl',
      key: 'thumbnailUrl',
      render: (thumbnailUrl: string, photo: Photo) => (
        <Image
          width={200}
          src={thumbnailUrl}
          preview={{
            visible: !!photo.visible,
            src: photo.url,
            onVisibleChange: value => {
              photo.visible = value;
            },
          }}
        />
      ),
    },
  ];

  return (
    <Table
      dataSource={photos}
      columns={columns}
      onRow={(photo: Photo) => {
        return {
          onClick: event => { photo.visible = true }, // click row
          onDoubleClick: event => { photo.visible = true }, // double click row
        };
      }}
    />
  );
}
