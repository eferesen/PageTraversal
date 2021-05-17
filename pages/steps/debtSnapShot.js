import DebtSnapShot from '../../components/steps/DebtSnapShot';
import {getPageInfo} from '../../util/getPageInfo'

const getServerSideProps = async (context) => {
  
  const {nextPage, prevPage} = getPageInfo('debtSnapShot')
  return {
    props: {
      nextPage,
      prevPage,
    },
  };
};

export { getServerSideProps };
export default DebtSnapShot;