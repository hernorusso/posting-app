"use client";
import { useFormStatus } from "react-dom";

const FormSubmit = () => {
  const formStatus = useFormStatus();
  console.log(formStatus);

  if (formStatus.pending) {
    return <p>Submition in progress...</p>;
  }
  return (
    <>
      <button type="reset">Reset</button>
      <button>Create Post</button>
    </>
  );
};

export { FormSubmit };
