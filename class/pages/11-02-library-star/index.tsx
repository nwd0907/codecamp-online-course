import { Rate } from "antd";
import { useState } from "react";

const desc = ["terrible", "bad", "normal", "good", "wonderful"];

export default function LibraryStarPage() {
  const [value, setValue] = useState(3);

  const handleChange = (value: number) => {
    setValue(value);
  };

  return <Rate tooltips={desc} onChange={handleChange} value={value} />;
}
