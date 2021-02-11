import def, { capitalize, capitalizeSentence } from '../src';

describe('capitalize', () => {
  it('exports capitalizeWords as default', () => {
    expect(def).toEqual(capitalizeSentence);
  });

  it('capitalizes word', () => {
    expect(capitalize('word')).toEqual('Word');
    expect(capitalize('more than one word')).toEqual('More than one word');
  });

  it('capitalizes sentence', () => {
    expect(capitalizeSentence('word')).toEqual('Word');
    expect(capitalizeSentence('i am a sentence')).toEqual('I am a Sentence');
    expect(capitalizeSentence('a sentence')).toEqual('A Sentence');
    expect(capitalizeSentence('just a sentence with a some words in it.')).toEqual(
      'Just a Sentence with a some Words in it.'
    );
  });
});
