import { useContext } from 'react';
import Context from '../context/Context';

const useStepDirection = () => {
  const { state } = useContext(Context);

  return state?.direction;
};

export { useStepDirection };