function sum(a: number, b: number): number {
  return a + b;
}


export default sum;
export const addStrings = (str1: string, str2: string  = "Default value here"): string => `${str1} ${str2}`;

export const format = (title: number, param: string | number): string => `${title} ${param}`

/* this next function printFormat won't return anything so we speicify the type as void (just like in java) */

export const printFormat = (title: number, param: string | number): void => {
  console.log(format(title, param));
}


export const fetchData = (url: string): Promise<string> => Promise.resolve(`Data from ${url}`);

function introduce(salutation: string, ...names: string[]): string {
  return `${salutation} ${names.join(" ")}`;
}

export function getName(user: {first: string; last: string}): string {
  return `${user.first} ${user.last}`;
}
