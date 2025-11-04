
import useLocalStorage from './useLocalStorage';

const MAX_HISTORY_ITEMS = 5;

export const useSearchHistory = (): [string[], (term: string) => void] => {
  const [history, setHistory] = useLocalStorage<string[]>('searchHistory', []);

  const addSearchTerm = (term: string) => {
    if (!term || term.trim() === '') return;
    
    setHistory(prevHistory => {
      const newHistory = [
        term,
        ...prevHistory.filter(item => item.toLowerCase() !== term.toLowerCase())
      ];
      return newHistory.slice(0, MAX_HISTORY_ITEMS);
    });
  };

  return [history, addSearchTerm];
};
