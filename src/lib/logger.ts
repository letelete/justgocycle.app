const buildLogger = () => {
  return {
    error: (at: string, error: Error | string) => {
      console.error(`[ERROR] ${at}:`, error);
    },
  };
};

export const logger = buildLogger();
