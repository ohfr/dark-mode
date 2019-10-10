import { useEffect } from 'react';
import { useLocalStorage } from './useLocalStorage';

export const useDarkMode = (value) => {
    const [darkMode, setDarkMode] = useLocalStorage('darkMode', value);

    useEffect(() => {
        darkMode ? document.querySelector('body').classList.add('dark-mode') : document.querySelector('body').classList.remove('dark-mode');
    }, [darkMode])

    return [darkMode, setDarkMode];
}