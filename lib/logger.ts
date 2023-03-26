/* eslint-disable @typescript-eslint/no-empty-function */

/**
 * Logger, disabled in test environment
 */
export const logger =
  process.env.NODE_ENV === "test"
    ? {
        debug: () => {},
        error: () => {},
        info: () => {},
        log: () => {},
        warn: () => {}
      }
    : console
