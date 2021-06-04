import React from "react";
import { FormSelect } from "shards-react";

export default function FormSelectDemo() {
  return (
    <FormSelect
                size="lg"
                value="last-week"
                style={{ maxWidth: "200px" }}
                onChange={() => {}}
                className="ml-5 ml-lg-05"
              >
      <option value="first">Phone</option>
      <option value="second" disabled>Other category</option>
      </FormSelect>
  );
}