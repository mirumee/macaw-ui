import { Meta, Story } from "@storybook/react";
import React from "react";

import { Decorator } from "../utils/Decorator";
import { Backlink } from "./Backlink";
import { useBacklink } from "./context";

// Normally some other component would rerender and force Backlink to recheck
// anchor too, but since it's static view we need to hack it a bit
const Wrapper: React.FC = ({ children }) => {
  const anchor = useBacklink();
  const [initialized, setInitialized] = React.useState(false);
  const timer = React.useRef<number>();

  React.useEffect(() => {
    timer.current = setInterval(() => {
      if (!initialized && anchor.current) {
        setInitialized(true);
        clearInterval(timer.current);
      }
    }, 50) as any;

    return () => clearInterval(timer.current);
  }, []);

  return (
    <div>
      <div ref={anchor} />
      {initialized && children}
    </div>
  );
};

export const Default: Story = () => (
  <Backlink onClick={() => undefined}>Back</Backlink>
);
export const Loading: Story = () => (
  <Backlink onClick={() => undefined}>{undefined}</Backlink>
);

export default {
  title: "Backlink",
  decorators: [
    (Story) => (
      <Wrapper>
        <Story />
      </Wrapper>
    ),
    Decorator,
  ],
} as Meta;
