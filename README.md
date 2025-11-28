# Ballot Shared Types

Shared types, models, and utilities for ballot backend modules.

## Installation

```bash
npm install
npm run build
```

## Usage

In other modules:

```bash
npm install file:../shared-types
```

Then import:

```typescript
import { UserType, Match, pub, usersSelect } from '@abdlarahman/backend-shared-types';
```

## What's Included

- **Types**: All TypeScript interfaces and types
- **Models**: Mongoose models (User, Match, Team, Cup)
- **Utils**: Common utilities and error handling
- **Constants**: Shared constants
- **Redis**: Redis client and keys
- **PubSub**: Event publisher/subscriber
