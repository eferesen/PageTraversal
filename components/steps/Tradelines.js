import PageMotion from "../shared/motion";
import { StepNavigation} from '../shared/navigate'

const Tradelines = (props) => {
  const { nextPage, prevPage } = props;

  return (
    <PageMotion>
      <div>
        <h3>Tradelines Component</h3>
        {prevPage && (
          <div>
            <StepNavigation pageName={prevPage} />
          </div>
        )}
        {nextPage && (
          <div>
             <StepNavigation pageName={nextPage} />
          </div>
        )}
      </div>
    </PageMotion>
  );
};

export default  Tradelines;
