import Countries from './country';
import Error from '../pages/error.tsx';
import useSortableData from '../hooks/useSortableData';
import useFetch from '../hooks/useFetch';
import CountryCard from './CountryCard';
import Navbar from './navbar';
import Saved from '../pages/saved.tsx';
import MyButton from './MyButton';

const components = {
    Countries,
    Error,
    useSortableData,
    useFetch,
    CountryCard,
    Navbar,
    Saved,
    MyButton,
}

export default components;