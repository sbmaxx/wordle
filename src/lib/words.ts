import { WORDS } from "../constants/wordlist";

export const isWordInWordList = (word: string) => {
  return WORDS.includes(word.toLowerCase());
};

export const isWinningWord = (word: string) => {
  return solution === word;
};

export const getWordOfDay = () => {
  // January 1, 2022 Game Epoch
  const epochMs = 1641013200000;
  const now = Date.now();
  const msInDay = 86400000;
  let index = Math.floor((now - epochMs) / msInDay);

  const urlSearchParams = new URLSearchParams(window.location.search);
  if (urlSearchParams.has('id')) {
    index = parseInt(urlSearchParams.get('id') || index.toString(), 10);
  }

  return WORDS[index].toUpperCase();
};

export const solution = getWordOfDay();
