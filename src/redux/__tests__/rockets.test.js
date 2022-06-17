import rockets, {
  cancelReserveRocket,
  reserveRocket,
} from '../rockets/rockets';

describe('Testing rocket store initial state', () => {
  test('should return the initial state', () => {
    expect(rockets(undefined, {})).toEqual({ list: [] });
  });

  test('The reducer should return the new state after update', () => {
    const previousState = { list: [] };
    const data = [
      {
        id: 1,
        name: 'The Space x',
        type: 'Rocket',
        flickr_images: 'image1',
        description: 'This is a test rocket',
        reserved: false,
      },
    ];
    const FETCH_DATA = 'spacestore/rockets/FETCH_DATA';
    const fetchData = (data) => ({ type: FETCH_DATA, data });

    expect(rockets(previousState, fetchData(data))).toEqual({
      list: [
        {
          id: 1,
          name: 'The Space x',
          type: 'Rocket',
          flickr_images: 'image1',
          description: 'This is a test rocket',
          reserved: false,
        },
      ],
    });
  });

  test('The value of reserved property should be update to reserved when reserveRocket is called', () => {
    const previousState = {
      list: [
        {
          id: 1,
          name: 'The Space x',
          type: 'Rocket',
          flickr_images: 'image1',
          description: 'This is a test rocket',
          reserved: false,
        },
      ],
    };
    expect(rockets(previousState, reserveRocket(1))).toEqual({
      list: [
        {
          id: 1,
          name: 'The Space x',
          type: 'Rocket',
          flickr_images: 'image1',
          description: 'This is a test rocket',
          reserved: true,
        },
      ],
    });
  });

  test('The value of reserved property should be update to false when cancelReservedRocket is called', () => {
    const previousState = {
      list: [
        {
          id: 1,
          name: 'The Space x',
          type: 'Rocket',
          flickr_images: 'image1',
          description: 'This is a test rocket',
          reserved: true,
        },
      ],
    };
    expect(rockets(previousState, cancelReserveRocket(1))).toEqual({
      list: [
        {
          id: 1,
          name: 'The Space x',
          type: 'Rocket',
          flickr_images: 'image1',
          description: 'This is a test rocket',
          reserved: false,
        },
      ],
    });
  });
});
