const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export function formatPublishedDate(isoDate: string) {
  const [year, month, day] = isoDate.split("-").map(Number);
  const monthName = months[(month ?? 1) - 1] ?? "";
  return `${day} ${monthName} ${year}`;
}

export function readingTimeLabel(minutes: number) {
  return `${minutes} min read`;
}
