import PageMotion from "../shared/motion";
import { StepNavigation } from "../shared/navigate";
import { useSteps } from "../../hooks/useSteps";
import { useStepDirection } from "../../hooks/useStepDirection";

const Cfos = () => {
  const { next } = useSteps();
  const direction = useStepDirection();
  console.log("direction CFOS", direction);
  return (
    <PageMotion direction={direction}>
      <div>
        <h3>Cfos Component</h3>
        <div>
          <StepNavigation pageName={next} direction={direction} />
        </div>
      </div>
    </PageMotion>
  );
};

export default Cfos;
