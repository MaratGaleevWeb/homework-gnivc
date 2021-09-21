const pronouns: Array<string> = ["я", "мы", "ты", "вы", "он", "она", "оно", "они"];
const firstConjugationexceptions: Array<string> = [
    "видеть",
    "обидеть",
    "ненавидеть",
    "зависеть",
    "терпеть",
    "смотреть",
    "вертеть",
    "дышать",
    "слышать",
    "гнать",
    "держать",
];
const secondConjugationexceptions: Array<string> = ["зиждиться", "стелить", "брить"];
const getValidateVerb = (verb: string, pronoun: string): any => {
    const defineConjugation = ((): 1 | 2 => {
        if (secondConjugationexceptions.includes(verb)) return 1;
        if (firstConjugationexceptions.includes(verb)) return 2;
        return !verb.endsWith("ить") ? 1 : 2;
    })();
    let validatedVerb: string = verb.slice(0, verb.length - 2);
    switch (pronoun) {
        case "я":
            return `${validatedVerb + "ю (у)"}`;
        case "мы":
            return `${(validatedVerb += defineConjugation === 1 ? "ем" : "им")}`;
        case "ты":
            return `${(validatedVerb += defineConjugation === 1 ? "ешь" : "ишь")}`;
        case "вы":
            return `${(validatedVerb += defineConjugation === 1 ? "ете" : "ите")}`;
        case "он":
        case "она":
        case "оно":
            return `${(validatedVerb += defineConjugation === 1 ? "ет" : "ит")}`;
        case "они":
            return `${(validatedVerb += defineConjugation === 1 ? "ют (ут)" : "ят (ат)")}`;
        default:
            return verb;
    }
};

const filterData = (verb: string, pronoun: string): undefined | Error => {
    if (!verb.toLowerCase().endsWith("ть") || verb === "") throw Error("The verb you entered is not an infintive");
    if (!pronouns.includes(pronoun.toLowerCase()) || pronoun === "") throw Error("The pronoun you entered does not exist in Russian");
    return;
};
export { getValidateVerb, filterData };
