import { makeAutoObservable } from "mobx";
import { Pagination, Photo } from "../types/types";

export class PhotoStore {
  counter = 0;

  keyword: string = '';
  searching: boolean = false;

  photos: Photo[] = [];
  pagination: Pagination = {
    page: 0,
    limit: 10,
  }

  constructor() {
    makeAutoObservable(this);
  }

  search = async () => {
    this.searching = true;
  }

  increment = () => {
    this.counter += 1;
  };

  decrement = () => {
    this.counter -= 1;
  };
}
