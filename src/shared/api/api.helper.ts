export function getContentType() {
  return {
    "Content-Type": "application/json",
  };
}

export function errorCatch(error: any) {
  const message = error?.response?.data?.message;

  if (!message) {
    return error.message;
  }

  return typeof message === "object" ? message[0] : message;
}
