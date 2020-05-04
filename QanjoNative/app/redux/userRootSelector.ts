import { useSelector, TypedUseSelectorHook } from 'react-redux';
import { RootState } from './reducers';

const useRootSelector: TypedUseSelectorHook<RootState> = useSelector;
export default useRootSelector;
