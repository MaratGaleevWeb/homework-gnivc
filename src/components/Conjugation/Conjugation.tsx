import { useState } from "react";
import { getValidateVerb, filterData } from "./script";

import "./styles.css";

const Conjugation = () => {
    const [verb, setVerb] = useState<string>("");
    const [pronoun, setPronoun] = useState<string>("");
    const [validatedVerb, setValidatedVerb] = useState<string>("");

    const changeVerb = (verb: string): void => setVerb(verb);
    const changePronoun = (pronoun: string): void => setPronoun(pronoun);

    const populateVerb = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, verb: string, pronoun: string): void => {
        event.preventDefault();
        try {
            filterData(verb, pronoun);
            setValidatedVerb(getValidateVerb(verb, pronoun));
        } catch (error) {
            alert(error);
        }
    };

    return (
        <div className="conjugation">
            <h3 className="conjugation__title">Here's the first part of the homework</h3>
            <form className="conjugation__form">
                <input
                    type="text"
                    className="conjugation__input"
                    placeholder="Enter a Russian verb"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => changeVerb(e.target.value)}
                    value={verb}
                />
                <input
                    type="text"
                    className="conjugation__input"
                    placeholder="Enter a Russian pronoun"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => changePronoun(e.target.value)}
                    value={pronoun}
                />
                <button
                    className="conjugation__button"
                    onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>
                        populateVerb(e, verb.toLowerCase(), pronoun.toLowerCase())
                    }
                >
                    Click to validate
                </button>
                <input
                    type="text"
                    className="conjugation__input"
                    placeholder="Here'll be the validated verb"
                    value={validatedVerb}
                    disabled
                />
            </form>
            <h3 className="conjugation__title">And under this line there's the second part of the homework</h3>
        </div>
    );
};
export default Conjugation;
