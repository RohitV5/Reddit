import React, { Dispatch } from 'react';

export const ariaHandleKeyPress = (
  event: React.KeyboardEvent<HTMLDivElement>,
  callback: () =>
    | void
    | Dispatch<string>
    | Promise<string | number | object | undefined>,
) => {
  if (event.key === 'Enter' || event.key === ' ') {
    if (typeof callback === 'function') {
      callback();
    }
  }
};

export function millisToMinutesAndSeconds(millis: number) {
  const minutes = Math.floor(millis / 60000);
  const seconds: string = ((millis % 60000) / 1000).toFixed(0);
  return seconds === '60'
    ? `${minutes + 1}:00`
    : `${minutes} : ${seconds < '10' ? '0' : ''} ${seconds}`;
}

export default { ariaHandleKeyPress };
