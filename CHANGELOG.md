# Changelog

## 0.0.5 - 2025-08-18

### Added

- Comprehensive error handling for all API requests.
- `ChessComError` class for detailed error information.

### Fixed

- Corrected a syntax error in the client module.
- Resolved a typing issue in the error handling logic.
- Updated Jest configuration to ignore the `dist` directory during test runs.

## 0.0.2 - 2025-01-28

### Changed

- Version bump for package publication.

## 0.0.1 - 2025-08-12

### Added

- Initial release of the Chess.com API Client.
- Implemented comprehensive TypeScript types for requests and responses.
- Added client methods for the following player endpoints:
  - Get Player Profile
  - Get Player Stats
  - Get Player Games
  - Get Player Monthly Archives
  - Get Player Games to Move
  - Get Player Clubs
  - Get Player Team Matches
  - Get Player Tournaments
- Project setup with `package.json` and `tsconfig.json`.
- Basic usage example.
