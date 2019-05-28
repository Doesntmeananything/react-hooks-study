import { useState, useEffect, useDebugValue } from "react";

function useTitleInput(initialValue) {
  const [value, setValue] = useState(initialValue);
  useEffect(() => {
    document.title = value;
  });
  useDebugValue("Debugging value");

  return [value, setValue];
}

export default useTitleInput;
