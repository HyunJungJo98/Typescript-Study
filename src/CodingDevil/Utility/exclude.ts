// Exclude<T1, T2> : T1에서 T2를 제외하고 사용
// Omit과 다르게 타입만으로 판단

type T1 = string | number;
// T1에서 number 제외 -> string만 가능
type T2 = Exclude<T1, number>