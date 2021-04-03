import numeral from 'numeral'
export const prettyPrintStat = (stat) => (
  stat
    ? `+${numeral(stat).format("0.0a")}`
    : "N/A"
)