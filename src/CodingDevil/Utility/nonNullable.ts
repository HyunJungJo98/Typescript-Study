type T3 = string | null | undefined | void;
// null만 빼고
type T4 = NonNullable<T3>