import { makeAutoObservable } from "mobx";
import { PhotoService } from "../services/PhotoService";
import { Pagination, Photo } from "../types/types";

export class PhotoStore {
  counter = 0;
  photoService: PhotoService;

  keyword: string = '';
  searching: boolean = false;

  photos: Photo[] = [];
  pagination: Pagination = {
    page: 1,
    limit: 10,
    total: 0,
  }

  constructor() {
    this.photoService = new PhotoService();
    makeAutoObservable(this);
  }

  search = async (): Promise<void> => {
    this.searching = true;
    const { photos, total } = await this.photoService.searchPhotos(
      this.keyword,
      this.pagination.page,
      this.pagination.limit,
    );
    this.photos = photos;
    this.pagination = {
      ...this.pagination,
      total
    };
    this.searching = false;
  }

  onPageChange = async (page: number, size: number): Promise<void> => {
    this.pagination = {
      ...this.pagination,
      page,
      limit: size,
    };
    await this.search();
  }

  increment = () => {
    this.counter += 1;
  };

  decrement = () => {
    this.counter -= 1;
  };
}
