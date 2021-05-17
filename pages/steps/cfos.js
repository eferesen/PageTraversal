import Cfos from "../../components/steps/Cfos";
import { getPageInfo } from "../../util/getPageInfo";

const getServerSideProps = async (context) => {
  const { nextPage, prevPage } = getPageInfo("cfos");
  return {
    props: {
      leadData: {
        lastName: "EastWood",
        firstName: "Client",
        id: "Xcdsw23ew3",
      },
      nextPage,
      prevPage,
    },
  };
};

export { getServerSideProps };
export default Cfos;
