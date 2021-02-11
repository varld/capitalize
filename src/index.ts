import { lowercase } from './lowercase';

export let capitalize = (str: string) => str.charAt(0).toUpperCase() + str.substring(1);

export let capitalizeSentence = (str: string) =>
  str
    .split(' ')
    .map((word, i) => {
      if ((lowercase.indexOf(word.toLowerCase()) != -1 || word.includes('.')) && i != 0)
        return word.toLowerCase();

      return capitalize(word);
    })
    .join(' ');

export default capitalizeSentence;
