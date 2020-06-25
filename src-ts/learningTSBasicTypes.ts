//boolean
export var var1Boolean: boolean = true;
//number
export var var2Decimal: number = 13;
export var var3Hex: number = 0xf00d;
export var var4Binary: number = 111111;
export const var5Octal: number = 744;
//string
export var var6String: string = "Hello, world!";
//array
export var var7Array: [number, string, { a: number }, ...number[]] = [
  1,
  "test",
  { a: 3 },
  4,
  5
];
export var var8NumericArray: Array<number> = [1, 2, 3, 4, 5];
//tuple
export var var9Tuple: [string, number] = ["key", 12345];
//enums
enum Color {
  Red = 1,
  Green = 2,
  Blue = 4
}
export var var10Enum: Color = Color.Blue;
//any
export var var11ArrayOfAny: Array<any> = [1, "test", { a: 3 }, 4, 5];
//void
export var var12VoidFunction = (): void => console.log();
//null and undefined
export var var13Null: any = null;
export var var14Undefined: undefined = undefined;
//never
export var var15NeverFunction = (): never => {
  throw Error;
};
