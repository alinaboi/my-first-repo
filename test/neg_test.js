import * as chai from 'chai';
import { strict as assert} from 'assert';
import { calculator } from '../Practical task/calculator.js';


describe('calculator', function(){
    it('should not perform operations with spaces instead of input',() =>{
        assert.equal(calculator(124,'+',''),'Error was found!');
    });
});

describe('calculator', function(){
    it('should not perform operations with spaces instead of input',() =>{
        assert.equal(calculator(124,'/',''),'Error was found!');
    });
});

describe('calculator', function(){
    it('should not perform calculations with incorrect input of second operand',() =>{
        assert.equal(calculator(12,'/','.12'),'Error was found!');
    });
});

describe('calculator', function(){
    it('should not perform calculations with incorrect input of first operand',() =>{
        assert.equal(calculator(true,'-', 1),'Error was found!');
    });
});

describe('calculator', function(){
    it('should not perform calculations with incorrect input of both operands',() =>{
        assert.equal(calculator('','*',''),'Error was found!');
    });
});

describe('calculator', function(){
    it('should not perform calculations with more than 2 operands',() =>{
        assert.equal(calculator(9,'+',8, 0),'Error was found!');
    });
});

describe('calculator', function(){
    it('should not perform calculations with less than 2 operands',() =>{
        assert.equal(calculator(9,'+'),'Error was found!');
    });
});

describe('calculator', function(){
    it('this test contains wrong expected result',() =>{
        assert.equal(calculator(1,'+',10),110);
    });
});