import { useContext } from '../../../hooks/hook-context';
import { DrawerContext } from './DrawerContextProvider';

const useDrawerContext = () => useContext(DrawerContext);

export default useDrawerContext;
