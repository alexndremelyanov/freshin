import { IS_BROWSER } from "$fresh/runtime.ts";
import { Configuration, setup } from "twind";
export * from "twind";
export const config: Configuration = {
  darkMode: "class",
  mode: "silent",
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        // Use a own gradient
        "gradient-radial": `radial-gradient(${theme(
          "colors.blue.500"
        )}, ${theme("colors.red.500")});`,
        // Integrate with gradient colors stops (from-*, via-*, to-*)
        "gradient-15":
          "linear-gradient(.15turn, var(--tw-gradient-stops,var(--tw-gradient-from,transparent),var(--tw-gradient-to,transparent)))",
      }),
    },
  },
};
if (IS_BROWSER) setup(config);
