const rules = new Intl.PluralRules("ru");

export const plural = (count: number, wordCases: [string, string, string]) => {

  const map = new Map([
    ["one", wordCases[0]],
    ["few", wordCases[1]],
    ["many", wordCases[2]],
  ]);

  const rule = rules.select(count);
  return map.get(rule);
};
