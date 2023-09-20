type TimingConfig = {
  initialTime: number;
  interval: number;
  step: number;
};

type Timer = {
  start: () => void;
  stop: () => void;
  getTime: () => number;
};

const createInterval = ({
  initialTime,
  interval,
  step,
}: TimingConfig): Timer => {
  let time = initialTime;
  let intervalId: NodeJS.Timeout;

  const startInterval = (): void => {
    intervalId = setInterval(() => {
      time += step;
    }, interval);
  };

  const stopInterval = (): void => {
    clearInterval(intervalId);
  };

  return {
    start: startInterval,
    stop: stopInterval,
    getTime: (): number => time,
  };
};

// Example usage:
// const timer: Timer = createInterval({
//   initialTime: 0,
//   interval: 1000,
//   step: 1,
// });

// timer.start();

// setTimeout(() => {
//   timer.stop();
//   console.log(timer.getTime()); // Output: (current time)
// }, 5000);
