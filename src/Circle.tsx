import { useState } from "react";
import styled from "styled-components";

interface CircleProps {
  bgColor: string;
  borderColor?: string;
}
interface ContainerProps {
  bgColor: string;
  borderColor: string;
}

function Circle({ bgColor, borderColor }: CircleProps) {
  const [counter, setCounter] = useState<number | string>(1);

  return <Container bgColor={bgColor} borderColor={borderColor ?? "blue"} />;
}

export default Circle;

const Container = styled.div<ContainerProps>`
  width: 200px;
  height: 200px;
  background-color: ${(props) => props.bgColor};
  border: 2px solid ${(props) => props.borderColor};
`;
