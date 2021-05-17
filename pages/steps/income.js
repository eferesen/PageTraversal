import Income from '../../components/steps/Income';
import {getPageInfo} from '../../util/getPageInfo'

const getServerSideProps = async (context) => {
  
  const {nextPage, prevPage} = getPageInfo('income')
  return {
    props: {
      nextPage,
      prevPage,
    },
  };
};

export { getServerSideProps };
export default Income;