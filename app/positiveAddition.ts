
export function positiveAddition(x: number, y: number) {
    if (x < 0 && y < 0) {
        throw Error('両方負数です');
    } else if (x < 0) {
        throw Error('xが負数です');
    } else if (y < 0) {
        throw Error('yが負数です');
    }
    return x + y;
}
