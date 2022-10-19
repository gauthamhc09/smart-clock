import { Button } from "antd";
import React from "react";

const ButtonComponent = ({ start, status, resume, stop, reset }) => {
  return (
    <>
      {status === 0 ? (
        <Button
          type="primary"
          size="large"
          style={{ borderRadius: "8px", minWidth: "96px" }}
          onClick={() => start()}
        >
          Start
        </Button>
      ) : (
        ""
      )}
      {status === 1 ? (
        <div>
          <Button
            type="primary"
            size="large"
            style={{ borderRadius: "8px", minWidth: "96px" }}
            onClick={() => stop()}
          >
            Stop
          </Button>
          <Button
            type="primary"
            size="large"
            style={{ borderRadius: "8px", minWidth: "96px" }}
            onClick={() => reset()}
          >
            Reset
          </Button>
        </div>
      ) : (
        ""
      )}

      {status === 2 ? (
        <div>
          <Button
            type="primary"
            size="large"
            style={{ borderRadius: "8px", minWidth: "96px" }}
            onClick={() => resume()}
          >
            Resume
          </Button>
          <Button
            type="primary"
            size="large"
            style={{ borderRadius: "8px", minWidth: "96px" }}
            onClick={() => reset()}
          >
            Reset
          </Button>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default ButtonComponent;
