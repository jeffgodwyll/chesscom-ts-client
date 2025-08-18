import axios, { AxiosError, AxiosInstance } from 'axios';
import {
  PlayerProfile,
  PlayerStats,
  PlayerGames,
  PlayerMonthlyArchives,
  PlayerGamesToMove,
  PlayerClubs,
  PlayerTeamMatches,
  PlayerTournaments,
} from './types';
import { ChessComError } from './errors';

export class ChessComClient {
  private axiosInstance: AxiosInstance;

  constructor() {
    this.axiosInstance = axios.create({
      baseURL: 'https://api.chess.com/pub',
      headers: {
        'User-Agent':
          'chesscom-ts-client/0.0.1 (https://github.com/jeffgodwyll/chesscom-ts-client)', // Replace with your project details
      },
    });
  }

  /**
   * Get a player's public profile.
   * @param username The username of the player.
   */
  public async getPlayerProfile(username: string): Promise<PlayerProfile> {
    try {
      const response = await this.axiosInstance.get<PlayerProfile>(
        `/player/${username}`
      );
      return response.data;
    } catch (error) {
      throw ChessComError.fromAxiosError(error as AxiosError);
    }
  }

  /**
   * Get a player's stats.
   * @param username The username of the player.
   */
  public async getPlayerStats(username: string): Promise<PlayerStats> {
    try {
      const response = await this.axiosInstance.get<PlayerStats>(
        `/player/${username}/stats`
      );
      return response.data;
    } catch (error) {
      throw ChessComError.fromAxiosError(error as AxiosError);
    }
  }

  /**
   * Get a list of a player's games.
   * @param username The username of the player.
   */
  public async getPlayerGames(
    username: string,
    year: number,
    monthString: string
  ): Promise<PlayerGames> {
    try {
      const response = await this.axiosInstance.get<PlayerGames>(
        `/player/${username}/games/${year}/${monthString}`
      );
      return response.data;
    } catch (error) {
      throw ChessComError.fromAxiosError(error as AxiosError);
    }
  }

  /**
   * Get a list of a player's monthly archives.
   * @param username The username of the player.
   */
  public async getPlayerMonthlyArchives(
    username: string
  ): Promise<PlayerMonthlyArchives> {
    try {
      const response = await this.axiosInstance.get<PlayerMonthlyArchives>(
        `/player/${username}/games/archives`
      );
      return response.data;
    } catch (error) {
      throw ChessComError.fromAxiosError(error as AxiosError);
    }
  }

  /**
   * Get a list of a player's games to move.
   * @param username The username of the player.
   */
  public async getPlayerGamesToMove(
    username: string
  ): Promise<PlayerGamesToMove> {
    try {
      const response = await this.axiosInstance.get<PlayerGamesToMove>(
        `/player/${username}/games/to-move`
      );
      return response.data;
    } catch (error) {
      throw ChessComError.fromAxiosError(error as AxiosError);
    }
  }

  /**
   * Get a list of clubs a player is in.
   * @param username The username of the player.
   */
  public async getPlayerClubs(username: string): Promise<PlayerClubs> {
    try {
      const response = await this.axiosInstance.get<PlayerClubs>(
        `/player/${username}/clubs`
      );
      return response.data;
    } catch (error) {
      throw ChessComError.fromAxiosError(error as AxiosError);
    }
  }

  /**
   * Get a list of team matches a player is in.
   * @param username The username of the player.
   */
  public async getPlayerTeamMatches(
    username: string
  ): Promise<PlayerTeamMatches> {
    try {
      const response = await this.axiosInstance.get<PlayerTeamMatches>(
        `/player/${username}/matches`
      );
      return response.data;
    } catch (error) {
      throw ChessComError.fromAxiosError(error as AxiosError);
    }
  }

  /**
   * Get a list of tournaments a player is in.
   * @param username The username of the player.
   */
  public async getPlayerTournaments(
    username: string
  ): Promise<PlayerTournaments> {
    try {
      const response = await this.axiosInstance.get<PlayerTournaments>(
        `/player/${username}/tournaments`
      );
      return response.data;
    } catch (error) {
      throw ChessComError.fromAxiosError(error as AxiosError);
    }
  }
}
