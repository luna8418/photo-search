import * as React from "react";
import { render, stores } from "../testUtils";
import { PhotoApp } from "./PhotoApp";

describe('PhotoApp', () => {
  it("should have the search input", () => {
    const wrapper = render(<PhotoApp />);

    expect(wrapper.getByPlaceholderText("Search keywords on title")).toBeTruthy();
  });

  it("should show 'No photos found' when find nothing", () => {
    const photoStore = stores.photoStore;
    photoStore.keyword = 'abc';
    photoStore.searched = true;

    const wrapper = render(<PhotoApp />);

    expect(wrapper.getByText("No photos found, please search by a different keyword.")).toBeTruthy();
  });

  it.skip("should show photo list as a table", () => {
    const photoStore = stores.photoStore;
    photoStore.keyword = 'ab';
    photoStore.searched = true;
    photoStore.photos = [{
      id: '1',
      title: 'abcd',
      url: 'url',
      thumbnailUrl: 'thumbnail',
    }, {
      id: '2',
      title: 'abcde',
      url: 'url',
      thumbnailUrl: 'thumbnail',
    }];
    photoStore.pagination = {
      limit: 10,
      page: 1,
      total: 2,
    }

    const wrapper = render(<PhotoApp />);

    expect(wrapper.findByTestId("photo-table")).toMatchSnapshot();
  });
})
