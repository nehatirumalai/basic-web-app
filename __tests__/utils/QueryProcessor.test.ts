import QueryProcessor from "../../utils/QueryProcessor";
import '@testing-library/jest-dom'

describe("QueryProcessor", () => {
    test("should return a string", () => {
        const query = "test";
        const response: string = QueryProcessor(query);
        expect(typeof response).toBe("string");
    });

    test('should return shakespeare description', () => {
        const query = "shakespeare";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
            "English poet, playwright, and actor, widely regarded as the greatest " +
            "writer in the English language and the world's pre-eminent dramatist."
          ));
    });

    test('should return andrew ID', () => {
        const query = "andrew ID";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "ntirumal"
          ));
    });

    test('should return name', () => {
        const query = "name";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "ntirumal"
          ));
    });

    test('should add numbers', () => {
        expect(QueryProcessor("What is 19 plus 7?")).toEqual("26");
        expect(QueryProcessor("What is 62 plus 17?")).toEqual("79");
        expect(QueryProcessor("What is 24 plus 19?")).toEqual("43");
        expect(QueryProcessor("What is 20 plus 4?")).toEqual("24");
        expect(QueryProcessor("What is 11 plus 24?")).toEqual("35");
        expect(QueryProcessor("What is 55 plus 76?")).toEqual("131");
    });

    test('should multiply numbers', () => {
        expect(QueryProcessor("What is 26 multiplied by 97?")).toEqual("2522");
        expect(QueryProcessor("What is 6 multiplied by 65?")).toEqual("390");
        expect(QueryProcessor("What is 53 multiplied by 60?")).toEqual("3180");
        expect(QueryProcessor("What is 20 multiplied by 4?")).toEqual("80");
        expect(QueryProcessor("What is 81 multiplied by 54?")).toEqual("4274");
        expect(QueryProcessor("What is 71 multiplied by 59?")).toEqual("4189");
    });

    test('should find all prime numbers', () => {
        expect(QueryProcessor("Which of the following numbers are primes: 38, 99, 59, 62, 55?")).toEqual(['59']);
        expect(QueryProcessor("Which of the following numbers are primes: 2, 53, 19, 30, 48?")).toEqual(['2','19','53']);
    });

});