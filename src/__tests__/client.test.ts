import { ChessComClient } from '../client';
import axios, { AxiosError } from 'axios';
import { ChessComError } from '../errors';

// Cast axios to a mocked version
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('ChessComClient', () => {
  let client: ChessComClient;

  beforeEach(() => {
    // Clear all mocks before each test
    mockedAxios.get.mockClear();
    // Mock axios.create to return a mocked instance
    mockedAxios.create.mockReturnValue({
      get: jest.fn(), // Mock the get method of the created instance
    } as any); // Cast to any to avoid complex typing issues with partial mocks

    client = new ChessComClient();
  });

  it('should fetch player profile successfully', async () => {
    const mockProfile = {
      avatar: 'https://www.chess.com/bundles/web/images/user-image.007dad08.svg',
      player_id: 12345,
      url: 'https://www.chess.com/member/erik',
      username: 'erik',
      followers: 100000,
      country: 'https://api.chess.com/pub/country/US',
      last_online: 1678886400,
      joined: 1234567890,
      status: 'staff',
      is_streamer: false,
      league: 'legend',
    };

    // Access the get method of the *actual* axios instance used by the client
    // This is the instance returned by mockedAxios.create()
    (client as any).axiosInstance.get.mockResolvedValueOnce({
      data: mockProfile,
      status: 200,
      statusText: 'OK',
      headers: {},
      config: {},
    });

    const username = 'erik';
    const profile = await client.getPlayerProfile(username);

    expect(profile).toEqual(mockProfile);
    expect((client as any).axiosInstance.get).toHaveBeenCalledTimes(1);
    expect((client as any).axiosInstance.get).toHaveBeenCalledWith(`/player/${username}`);
  });

  it('should throw a ChessComError when fetching a non-existent player profile', async () => {
    const username = 'nonexistentuser';
    const error = {
      response: {
        status: 404,
        data: { message: 'Not Found' },
      },
    } as AxiosError;

    (client as any).axiosInstance.get.mockRejectedValueOnce(error);

    await expect(client.getPlayerProfile(username)).rejects.toThrow(
      ChessComError
    );
  });

  it('should fetch player stats successfully', async () => {
    const mockStats = {
      chess_blitz: {
        last: { rating: 2000, date: 1678886400, rd: 50 },
        record: { win: 100, loss: 50, draw: 10 },
      },
      chess_bullet: {
        last: { rating: 1800, date: 1678886400, rd: 50 },
        record: { win: 80, loss: 40, draw: 5 },
      },
    };

    (client as any).axiosInstance.get.mockResolvedValueOnce({
      data: mockStats,
      status: 200,
      statusText: 'OK',
      headers: {},
      config: {},
    });

    const username = 'erik';
    const stats = await client.getPlayerStats(username);

    expect(stats).toEqual(mockStats);
    expect((client as any).axiosInstance.get).toHaveBeenCalledTimes(1);
    expect((client as any).axiosInstance.get).toHaveBeenCalledWith(`/player/${username}/stats`);
  });

  it('should throw a ChessComError when fetching stats for a non-existent player', async () => {
    const username = 'nonexistentuser';
    const error = {
      response: {
        status: 404,
        data: { message: 'Not Found' },
      },
    } as AxiosError;

    (client as any).axiosInstance.get.mockRejectedValueOnce(error);

    await expect(client.getPlayerStats(username)).rejects.toThrow(
      ChessComError
    );
  });
});
