import * as React from "react";
import { Image, Table } from 'antd';
import { Photo } from "../types/types";

export const PhotoTable: React.FC<{
  photos: Photo[],
  total: number,
  currentPage: number,
  onPaginationChange: (page: number, pageSize: number) => void,
}> = ({ photos, total, currentPage, onPaginationChange }) => {
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
      pagination={{
        position: ['topRight', 'bottomRight'],
        defaultCurrent: 1,
        current: currentPage,
        total: total || 0,
        onChange: onPaginationChange,
        onShowSizeChange: onPaginationChange,
      }}
      onRow={(photo: Photo) => {
        return {
          onClick: event => { photo.visible = true }, // click row
          onDoubleClick: event => { photo.visible = true }, // double click row
        };
      }}
    />
  );
}
