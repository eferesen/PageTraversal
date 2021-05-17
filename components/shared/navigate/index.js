import Link from "next/link";
import Button from "@material-ui/core/Button";

const StepNavigation = ({ pageName }) => {
  return (
    <>
      <Link href={`/steps/${pageName}`}>
        <Button variant="contained" color="primary">
          {pageName}
        </Button>
      </Link>
    </>
  );
};

export { StepNavigation };
