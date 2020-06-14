import {sum} from "../index";

describe("index", () => {
    describe("sum", () => {
        it("should return the sum of 2 values", () => {
            expect(sum(1,2)).toBe(3);
        })
    })
});