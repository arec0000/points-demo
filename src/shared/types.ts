export type Color =
  | "auto"
  | "inherit"
  | "white"
  | "black"
  | "gray90"
  | "gray70"
  | "gray30"
  | "gray20"
  | "blue"
  | "blue30"
  | "darkBlue"
  | "darkBlue60"
  | "darkBlue40"
  | "spaceBlue"
  | "lightBlue"
  | "red"
  | "pink"
  | "purple"
  | "orange"
  | "primaryGradient";

export type Size = "xs" | "sm" | "md" | "lg" | "xl" | "2xl";

declare global {
  interface Window {
    google?: {
      accounts: {
        oauth2: {
          initTokenClient: (options: {
            client_id?: string;
            scope:
              | "openid profile email"
              | "openid profile"
              | "profile email"
              | "openid email"
              | "openid"
              | "profile"
              | "email";
            callback: (res: {
              access_token: string;
              token_type: "Bearer";
              expires_in: number;
              scope: string;
              authuser: `${number}`;
              prompt: string;
            }) => void;
          }) => {
            requestAccessToken: () => void;
          };
          revoke: () => void;
        };
      };
    };
  }
}
