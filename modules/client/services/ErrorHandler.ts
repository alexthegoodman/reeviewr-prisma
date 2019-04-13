export const ErrorHandler = (error: Error, componentStack: string) => {
  console.error(`Error: `, error, ` ComponentStack: `, componentStack);
  // rollbar
};
