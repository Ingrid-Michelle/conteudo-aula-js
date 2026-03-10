// Utilizando o BigInt
let a = BigInt("6721747176918261876457476357168237218484575372836534353702189247383876645378754854575494939909990015244352792020937455473465");

console.log(a);

// Utilizando n
let b = 8916242347508098654343682929283643261790397645453637338393039384745434332323563738339303030938366535343433536738393933383773736185n;

console.log(b);

// Utilizando operadores aritméticos com BigInt
let c = 23456789012345678n;
let d = 23456789012345678n;
let e = (c * d);

console.log(e);

// Convertendo BigInt
let f = BigInt("987654321123456789");
let fConvertido = Number(f);

console.log(fConvertido);

// Utilizando métodos de comparação em BigInt
let g = 100n;
let h = 90n;
let exComparacao = (g === h);

console.log(exComparacao);