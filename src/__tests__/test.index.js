import fetchData from '../http';
import getLevel from '../index';

jest.mock('../http');

beforeEach(() => jest.resetAllMocks());

test.each([
  [{ status: 'ok', level: 5 }, 'Ваш текущий уровень: 5'],
  [{ status: 'error' }, 'Информация об уровне временно недоступна'],
])(
  'test getLevel function with response %o from fetchData on return %s data',
  (response, expected) => {
    fetchData.mockReturnValue(response);
    expect(getLevel(1)).toBe(expected);
  },
);
