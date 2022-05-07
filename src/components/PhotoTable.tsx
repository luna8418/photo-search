import * as React from "react";
import { Image, Table } from 'antd';
import { Pagination, Photo } from "../types/types";

export const PhotoTable: React.FC<{
  photos: Photo[],
  pagination: Pagination,
  onPaginationChange: (page: number, pageSize: number) => void,
  previewPhoto: (id: string, visible: boolean) => void,
}> = ({ photos, pagination, onPaginationChange, previewPhoto }) => {
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
            visible: photo.visible,
            src: photo.url,
            onVisibleChange: visible => {
              previewPhoto(photo.id, visible);
            },
          }}
        />
      ),
    },
  ];

  return (
    <Table
      id="photo-table"
      dataSource={photos}
      columns={columns}
      pagination={{
        position: ['topRight', 'bottomRight'],
        defaultCurrent: 1,
        current: pagination.page || 1,
        total: pagination.total || 0,
        pageSize: pagination.limit || 10,
        onChange: onPaginationChange,
        onShowSizeChange: onPaginationChange,
      }}
      onRow={(photo: Photo) => {
        return {
          onClick: event => { previewPhoto(photo.id, true); }, // click row
          onDoubleClick: event => { previewPhoto(photo.id, true); }, // double click row
        };
      }}
    />
  );
}
