import { emptyFieldGenerator, CellState } from "./Fields";

const {empty, bomb, hidden } = CellState;

describe('Field Generator', ()=>{
    describe('Empty field gnerator tests', ()=>{
        it('2*2', ()=>{
           expect(emptyFieldGenerator(2)).toStrictEqual([
            [empty, empty],
            [empty, empty]
           ])
        })
    })
})