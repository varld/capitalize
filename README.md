# Capitalize

A small library for capitalizing words and sentences.

## Install

```bash
# yarn
yarn add @varld/capitalize

# npm
npm install --save @varld/capitalize
```

## Usage

### Capitalize Sentence

```typescript
import capitalizeSentence from '@varld/outside-click';

capitalizeSentence('i am a sentence');
// > I am a Sentence
```

### Capitalize Word

```typescript
import { capitalize } from '@varld/outside-click';

capitalize('word');
// > Word

capitalize('A sentence');
// > A sentence
```

## License

MIT © [Tobias Herber](https://github.com/herber)

[![Made by Varld](https://potato.varld.co/oss/badge.svg)](https://varld.co)
