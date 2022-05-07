import { GraphQLClient, gql } from 'graphql-request';
import { Photo } from '../types/types';

export class PhotoService {
  private client: GraphQLClient;

  constructor() {
    this.client = new GraphQLClient('https://graphqlzero.almansi.me/api');
  }

  searchPhotos = async (keyword: string, page: number, size: number): Promise<{ photos: Photo[], total: number }> => {
    const query = gql`{
      photos(options: {
        search: {
          q: "${keyword}"
        }
        paginate: {
          page: ${page}
          limit: ${size}
        }
      }) {
        data {
          id
          title
          thumbnailUrl
          url
        }
        meta {
          totalCount
        }
      }
    }`

    const data = await this.client.request(query);
    const photos = data.photos.data.map((photo: Photo) => {
      return {
        ...photo,
        visible: false,
      }
    });

    return {
      photos,
      total: data.photos.meta.totalCount,
    }
  }
}
