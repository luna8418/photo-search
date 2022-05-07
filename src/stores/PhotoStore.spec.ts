import { PhotoStore } from './PhotoStore';

test('that counters initial value is zero', () => {
    const photoStore = new PhotoStore();

    expect(photoStore.counter).toBe(0);
});

test('that increment, increments counter by one', () => {
    const photoStore = new PhotoStore();

    photoStore.increment();

    expect(photoStore.counter).toBe(1);
});

test('that decrement, decrements counter by one', () => {
    const photoStore = new PhotoStore();

    photoStore.decrement();

    expect(photoStore.counter).toBe(-1);
});