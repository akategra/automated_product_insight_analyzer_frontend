import React from "react";
import { FormSelect } from "shards-react";

export default function FormSelectDemo1() {
  return (
    <FormSelect
                size="lg"
                value="last-week"
                style={{ maxWidth: "200px" }}
                onChange={() => {}}
                className="ml-5 ml-lg-05"
              >
      <option value="first">iPhone 12</option>
      <option value="second" disabled>Other Phones</option>
      </FormSelect>
  );
}