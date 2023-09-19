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
});