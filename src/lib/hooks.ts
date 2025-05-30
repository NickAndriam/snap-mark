export function useTime(seconds: number) {
  const time = new Date();
  time.setSeconds(time.getSeconds() + seconds);
  return time;
}
