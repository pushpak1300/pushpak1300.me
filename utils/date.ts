// ponytail: content dates are "YYYY/MM/DD" (blogs) or "YYYY-MM-DD" (talks); parse both as local midnight so server and client agree
const parse = (v: string) => new Date(`${v.replaceAll("/", "-")}T00:00`);
export const ts = (v: string) => parse(v).getTime();
export const month = (v: string) =>
  parse(v).toLocaleDateString("en-US", { month: "short", year: "numeric" });
