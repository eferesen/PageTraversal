import Tradelines from '../../components/steps/Tradelines';
import {getPageInfo} from '../../util/getPageInfo'

const getServerSideProps = async (context) => {
  
  const {nextPage, prevPage} = getPageInfo('tradelines')
  return {
    props: {
      nextPage,
      prevPage,
    },
  };
};

export { getServerSideProps };
export default Tradelines;