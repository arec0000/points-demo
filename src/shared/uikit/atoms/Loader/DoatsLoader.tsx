import { MantineProvider, LoadingOverlay } from "@mantine/core";

import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";

export function DoatsLoader({
  visible = true,
  withoutBlur,
}: {
  visible?: boolean;
  withoutBlur?: boolean;
}) {
  return (
    <MantineProvider>
      <LoadingOverlay
        visible={visible}
        zIndex={1000}
        overlayProps={
          withoutBlur ? { display: "none" } : { radius: "sm", blur: 2 }
        }
        loaderProps={{ color: "blue", type: "dots" }}
      />
    </MantineProvider>
  );
}
