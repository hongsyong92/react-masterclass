import React from "react";
import { useRecoilState } from "recoil";
import { hourSelector, minuteState } from "./atoms";

function App() {
  const [minutes, setMinutes] = useRecoilState(minuteState);
  const [hours, setHours] = useRecoilState(hourSelector);
  const onMinutesChange = (event: React.FormEvent<HTMLInputElement>) => {
    setMinutes(+event.currentTarget.value);
  };
  const onHoursChange = (event: React.FormEvent<HTMLInputElement>) => {
    setHours(+event.currentTarget.value);
  };
  return (
    <div>
      <input
        type="number"
        value={minutes}
        onChange={onMinutesChange}
        placeholder="minutes"
      />
      <input
        type="number"
        value={hours}
        onChange={onHoursChange}
        placeholder="hours"
      />
    </div>
  );
}

export default App;
