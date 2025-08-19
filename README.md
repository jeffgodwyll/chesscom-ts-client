# Chess.com API Client

A fully typed TypeScript client library for the Chess.com Public API, focusing on player-related endpoints.

## Installation

To install the package from npm or Yarn:

```bash
npm install chesscom-ts-client
# or
yarn add chesscom-ts-client
```

## Usage

Here's how to use the client to fetch player data:

```typescript
import { ChessComClient } from "chesscom-ts-client";

async function main() {
  const client = new ChessComClient();
  const username = "erik"; // Replace with a valid Chess.com username

  try {
    console.log(`Fetching profile for ${username}...`);
    const profile = await client.getPlayerProfile(username);
    console.log("Player Profile:", profile.username, profile.followers);

    console.log(`\nFetching stats for ${username}...`);
    const stats = await client.getPlayerStats(username);
    console.log("Player Stats (Blitz Rating):", stats.chess_blitz?.last.rating);

    console.log(`\nFetching games for ${username}...`);
    const games = await client.getPlayerGames(username);
    console.log("Player Games (first game URL):", games.games[0]?.url);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

main();
```

## Error Handling

The client throws a `ChessComError` when an API request fails. You can catch this error and inspect its properties for more details:

```typescript
import { ChessComClient, ChessComError } from 'chesscom-ts-client';

const client = new ChessComClient();

async function main() {
  try {
    // This will fail because the user does not exist
    const profile = await client.getPlayerProfile('nonexistentuser123456789');
    console.log(profile);
  } catch (error) {
    if (error instanceof ChessComError) {
      console.error('Caught a Chess.com API error:');
      console.error(`Message: ${error.message}`);
      console.error(`Status code: ${error.statusCode}`);
      console.error('Original error:', error.originalError);
    } else {
      console.error('An unexpected error occurred:', error);
    }
  }
}

main();
```

## Available Player Endpoints

The `ChessComClient` provides the following methods for player-related data:

- `getPlayerProfile(username: string)`: Get a player's public profile.
- `getPlayerStats(username: string)`: Get a player's stats.
- `getPlayerGames(username: string)`: Get a list of a player's games.
- `getPlayerMonthlyArchives(username: string)`: Get a list of a player's monthly archives.
- `getPlayerGamesToMove(username: string)`: Get a list of a player's games to move.
- `getPlayerClubs(username: string)`: Get a list of clubs a player is in.
- `getPlayerTeamMatches(username: string)`: Get a list of team matches a player is in.
- `getPlayerTournaments(username: string)`: Get a list of tournaments a player is in.

## Contributing

Contributions are welcome! Please feel free to open issues or submit pull requests.

## License

This project is licensed under the ISC License. See the `LICENSE` file for details.

---

**Powered by [Gemini CLI](https://github.com/google-gemini/gemini-cli)**
