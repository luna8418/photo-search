import { makeAutoObservable } from "mobx";
import { PhotoService } from "../services/PhotoService";
import { Pagination, Photo } from "../types/types";

export class PhotoStore {
  counter = 0;
  photoService: PhotoService;

  keyword: string = '';
  searching: boolean = false;
  // used to fix ui when first time input keyword and before searching 
  searched: boolean = false;

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

  updateKeyword = async (newKeyword: string): Promise<void> => {
    this.keyword = newKeyword;
    this.searched = false; // reset

    await this.search();
  }

  search = async (): Promise<void> => {
    if (this.keyword?.trim() === '') {
      this.reset();
      return;
    }
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
    this.searched = true;
  }

  onPageChange = async (page: number, size: number): Promise<void> => {
    this.pagination = {
      ...this.pagination,
      page,
      limit: size,
    };
    await this.search();
  }

  previewPhoto = (id: string, visible: boolean) => {
    this.photos.find(photo => photo.id === id).visible = visible;
    // new array to force mobx working
    this.photos = [...this.photos];
  }

  reset = () => {
    this.searched = false;
    this.searching = false;
    this.photos = [];

    this.pagination = {
      ...this.pagination,
      page: 1,
      total: 0,
    }
  }

  increment = () => {
    this.counter += 1;
  };

  decrement = () => {
    this.counter -= 1;
  };
}
