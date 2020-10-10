import expect from 'expect';

import {fromArray} from '../src/array';

describe('Array Utils', ()=>{
    it('returns an element', ()=>{
       expect(fromArray([100])).toBe(100);
    })

    it('returns multiple elements', ()=>{
        expect(fromArray([10,100,20], 3)).toContain(100).toContain(10).toContain(20)
    })

    it('returns elements based on its length', ()=>{
        expect(fromArray([1,1,1,1,1,1], 10).length).toBe(6)
    })

    it('works only with arrays', ()=>{
        const message = 'You can only use this with arrays'
        expect(()=>fromArray({})).toThrow(message)
        expect(()=>fromArray('Hola amigos en Twitch y Youtbe')).toThrow(message)
        expect(()=>fromArray(()=>{})).toThrow(message)
        expect(()=>fromArray(null)).toThrow(message)
        expect(()=>fromArray()).toThrow(message)
    })
})