import * as chai from 'chai';
import { strict as assert} from 'assert';
import { calculator } from '../Practical task/calculator.js';

describe('calculator', function(){
    it('should perform addition of two numbers',() =>{
        assert.equal(calculator(1,'+',10),11);
    });
});

describe('calculator', function(){
    it('should perform addition of negative numbers',() =>{
        assert.equal(calculator(1,'+',-10),-9);
    });
});

describe('calculator', function(){
    it('should perform addition of two negative numbers',() =>{
        assert.equal(calculator(-1,'+',-10),11);
    });
});

describe('calculator', function(){
    it('should perform subtraction of two numbers',() =>{
        assert.equal(calculator(14,'-',12),2);
    });
});

describe('calculator', function(){
    it('should perform multiplication of two numbers',() =>{
        assert.equal(calculator(9,'*',9),81);
    });
});

describe('calculator', function(){
    it('should perform devisiion of two numbers',() =>{
        assert.equal(calculator(145,'/',5),29);
    });
});

describe('calculator', function(){
    it('should not perform devisiion by 0',() =>{
        assert.equal(calculator(12,'/',0),'Error was found!');
    });
});

describe('calculator', function(){
    it('should not perform calculations with incorrect input of second operand',() =>{
        assert.equal(calculator(12,'/','aaa'),'Error was found!');
    });
});

describe('calculator', function(){
    it('should not perform calculations with incorrect input of first operand',() =>{
        assert.equal(calculator('2ab','-', 1),'Error was found!');
    });
});

describe('calculator', function(){
    it('should not perform calculations with incorrect input of both operands',() =>{
        assert.equal(calculator('a','*','b'),'Error was found!');
    });
});

describe('calculator', function(){
    it('should not perform calculations with incorrect input of operators mark',() =>{
        assert.equal(calculator(9,'a',8),'Invalid operator');
    });
});