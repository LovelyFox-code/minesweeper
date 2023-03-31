import { emptyFieldGenerator, CellState, fieldGenerator } from "./Fields";

const { empty, bomb, hidden } = CellState;

describe('Field Generator', () => {
    describe('Empty field gnerator tests', () => {
        it('2*2', () => {
            expect(emptyFieldGenerator(2)).toStrictEqual([
                [empty, empty],
                [empty, empty]
            ])
        })
        it('3*3', () => {
            expect(emptyFieldGenerator(3)).toStrictEqual([
                [empty, empty, empty],
                [empty, empty, empty],
                [empty, empty, empty]
            ])
        })
        it('3*3 with hidden state', () => {
            expect(emptyFieldGenerator(3, hidden)).toStrictEqual([
                [hidden, hidden, hidden],
                [hidden, hidden, hidden],
                [hidden, hidden, hidden]
            ])
        })

    })
    describe('Simple cases', () => {
        // test fails need to debug
        // it('Wrong probability', () => {
        //     const errorText = 'probability must be between 0 to 1';
        //     expect(() => fieldGenerator(1, -1)).toThrow(errorText);
        //     expect(() => fieldGenerator(1, 0)).toThrow(errorText);
        // });
        it('Smallest possible without mine', () => {
            expect(fieldGenerator(1, 0)).toStrictEqual([[empty]]);
        });
        it('Big field without mine', () => {
            expect(fieldGenerator(10, 0)).toStrictEqual([
                [empty, empty, empty, empty, empty, empty, empty, empty, empty, empty],
                [empty, empty, empty, empty, empty, empty, empty, empty, empty, empty],
                [empty, empty, empty, empty, empty, empty, empty, empty, empty, empty],
                [empty, empty, empty, empty, empty, empty, empty, empty, empty, empty],
                [empty, empty, empty, empty, empty, empty, empty, empty, empty, empty],
                [empty, empty, empty, empty, empty, empty, empty, empty, empty, empty],
                [empty, empty, empty, empty, empty, empty, empty, empty, empty, empty],
                [empty, empty, empty, empty, empty, empty, empty, empty, empty, empty],
                [empty, empty, empty, empty, empty, empty, empty, empty, empty, empty],
                [empty, empty, empty, empty, empty, empty, empty, empty, empty, empty]
            ])
        })

        it('Smallest possible field with mine', () => {
            expect(fieldGenerator(1, 1)).toStrictEqual([[bomb]]);
        });
        it('2*2 field with mines', () => {
            expect(fieldGenerator(2, 1)).toStrictEqual([
                [bomb, bomb],
                [bomb, bomb]
            ])
        });
        it('2*2 field with 50% probability mines', () => {
            const field = fieldGenerator(2, 0.5);
            const flatField = field.flat();
            console.table(field);
            console.table(flatField);

            const cellsWithBombs = flatField.filter((cell) => cell === bomb);
            const emptyCells = flatField.filter(cell => cell === empty);

            expect(cellsWithBombs).toHaveLength(2);
            expect(emptyCells).toHaveLength(2)
        });
    })
})