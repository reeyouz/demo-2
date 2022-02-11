const today = new Date();

export function daysFromToday(num: number) {
  return new Date(today.getTime() + num * 86400000);
}
