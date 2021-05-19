import PageMotion from "../shared/motion";
import StepNavigation from "../shared/navigate";
import { useSteps } from "../../hooks/useSteps";
import { useStepDirection } from "../../hooks/useStepDirection";

const Income = () => {
  const { previous } = useSteps();
  const direction = useStepDirection();
  console.log("direction Income", direction);
  return (
    <PageMotion direction={direction}>
      <div>
        <h3>Income Component</h3>
        {/* {previous && (
          <div>
            <StepNavigation pageName={previous} direction={-1} />
          </div>
        )} */}
      </div>
    </PageMotion>
  );
};

export default Income;
