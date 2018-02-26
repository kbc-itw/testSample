import { expect } from 'chai';
import { positiveAddition } from '../app/positiveAddition';

// describには何のテストであるかを記述する
describe('positiveAddition', () => {

    // itは各テストケース。
    // 第一引数にはそのメソッドがどういうときどういう挙動をするか記述する。
    // こうすることで、テストケースがそのまま仕様を表現する。
    it('returns sum of two positive number ', () => {
        expect(positiveAddition(3, 2)).to.be.equal(5);
        expect(positiveAddition(0, 0)).to.be.equal(0);
    });

    it('throws an error when any number is negative', () => {
        // 関数がエラーを返す場合、expectにはテスト対象をラップした関数を渡す
        expect(() => positiveAddition(-1, -1)).to.be.throw('両方負数です');
        expect(() => positiveAddition(-1, 3)).to.be.throw('xが負数です');
        expect(() => positiveAddition(3, -1)).to.be.throw('yが負数です');
    });
});
