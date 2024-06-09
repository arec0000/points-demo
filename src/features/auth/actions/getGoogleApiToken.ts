export function getGoogleApiToken() {
  return new Promise<{
    access_token: string;
    token_type: "Bearer";
    expires_in: number;
    scope: string;
    authuser: `${number}`;
    prompt: string;
  }>((res) => {
    const client = window.google?.accounts.oauth2.initTokenClient({
      client_id: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
      scope: "openid profile email",
      callback: res,
    });

    client?.requestAccessToken();
  });
}
