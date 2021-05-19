import PageMotion from "../shared/motion";
import { StepNavigation } from "../shared/navigate";
import { useSteps } from "../../hooks/useSteps";
import { useStepDirection } from "../../hooks/useStepDirection";

const DebtSnapShot = () => {
  const { next, previous } = useSteps();
  const direction = useStepDirection() || 1;
  console.log("direction DebtSnapShot", direction);

  return (
    <PageMotion direction={direction}>
      <div>
        <h3>DebtSnapShot</h3>
        {previous && (
          <div>
            <StepNavigation pageName={previous} direction={-1} />
          </div>
        )}
        {next && (
          <div>
            <StepNavigation pageName={next} direction={1} />
          </div>
        )}
      </div>
    </PageMotion>
  );
};

export default DebtSnapShot;
