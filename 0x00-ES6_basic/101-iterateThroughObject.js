export default function iterateThroughObject(reportWithIterator) {
  const names = reportWithIterator.map(name => name  + " | ");
  return names;
}
