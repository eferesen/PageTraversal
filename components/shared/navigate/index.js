import Link from "next/link";
import { useContext } from "react";
import Button from "@material-ui/core/Button";
import Context from "../../../context/Context";

const StepNavigation = ({ pageName, direction }) => {
  const { dispatch } = useContext(Context);

  const onClickHandler = async () => {
    await dispatch({ type: "setState", payload: { direction } });
  };

  return (
    <>
      <Link href={`/steps/${pageName}`}>
        <Button variant="contained" onClick={onClickHandler} color="primary">
          {pageName}
        </Button>
      </Link>
    </>
  );
};

export default StepNavigation;
