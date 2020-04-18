interface ICount {
    readonly count: number;
}
class TestReadonly implements ICount {
    readonly count: number;
    static readonly count2: number;
    private readonly conunt3: number;
    readonly count4: number = 0;
    getCount() {
        // this.count4 = 0;
        // readonly count5: number = 0;
    }
}

function getCount() {
    // readonly count: number;
}

let literalObj: { readonly alias: string } = { alias : "happy"};
// literalObj.alias = "happy";
// literalObj = "test";