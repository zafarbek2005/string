// N 1

// function chiqarKattaHarf(str, n) {
//     console.log(str.slice(0, n).toUpperCase());
// }
// var text = "A,B,C,D,F,V,L,G,K,L,M,N,C,T,U,Y,I,O,H,E,S,Z,R,F,P,X";
// var n = 15;
// chiqarKattaHarf(text, n); 


// N 2

// function kiritilganBelgiTekshirish(char) {
//     if (!isNaN(char)) {
//         return "dgit"; 
//     }
//     else if (/[a-zA-Z]/.test(char)) {
//         return 'Lotin';
//     }
//     else {
//         return 0;
//     }
// }
// console.log(kiritilganBelgiTekshirish(5));

// kiritilganBelgiTekshirish()

// N 3

// function utf16KodlariniChiqar(str) {
//     var birinchiBelgi = str.charCodeAt(0);
//     var oxirgiBelgi = str.charCodeAt(str.length - 1);
//     console.log("Birinchi belgi UTF-16 kodi:", birinchiBelgi);
//     console.log("Oxirgi belgi UTF-16 kodi:", oxirgiBelgi);
// }
// var text = "JavaScript";
// utf16KodlariniChiqar(text);

// N 4

// let b = belgi
// let n = 30

// for(let i =1; i<n;i+=belgi){

// }console.log(i);

// N 5

// function chiqarBelgi(belgi, n) {
//     for (let i = 0; i < n; i++) {
//         console.log(belgi);
//     }
// }
// let belgi = 'A';
// let n = 5;
// chiqarBelgi(belgi, n);

// N 7

// let string = "uf,wdd,d wdwdq,111,4,9,8,484,84,4,8,48,48,484,484,8tttt4,t4,t4,t4t4,t4t,4,t,4t";
// let b = 0;

// function grtsting() {
//     for (const i of string) { 
//         if(isNaN(parseInt(i))) {
//             b += 1;
//             console.log(i);
//         }
//     }
// }

// grtsting();
// console.log("raqamlar soni", b);

// N 8

// function harfSoniniAniqlovchi(string) {
//     let kichikLotinHarflari = 0;
//     let kichikKrilHarflari = 0;

//     for (const harf of string) {
//         if (harf >= 'a' && harf <= 'z') {
//             kichikLotinHarflari++;
//         } else if ((harf >= 'а' && harf <= 'я') || (harf >= 'ё' && harf <= 'ө') || (harf >= 'ғ' && harf <= 'қ') || harf === 'і') {
//             kichikKrilHarflari++;
//         }
//     }

//     console.log("Kichik lotin harflari soni:", kichikLotinHarflari);
//     console.log("Kichik kril harflari soni:", kichikKrilHarflari);
// }

// let string = "gg  r3r3err egeggewg кпкпгт го 4уаттаот тпкпртпршт туутапшгт штип туцкршр акруцратра рр ариириуцаот32кгшр гшри г аугиагигн иарнцгиангр и иаунирнуциг";
// harfSoniniAniqlovchi(string);


// N 9

// function kattaLotinKichigigaAlmash(string) {
//     let yangiString = "";
//     for (const harf of string) {
//         if (harf >= 'A' && harf <= 'Z') {
//             yangiString += harf.toLowerCase();
//         } else {
//             yangiString += harf;
//         }
//     }
//     return yangiString;
// }

// let string = "FHEBHFBEHFBHB EUFB UBBB FBEUFUB BFEFB BFBFBFBHJEBFHEBFHB HBH BFHWBFB BFHEB";
// let yangiString = kattaLotinKichigigaAlmash(string);
// console.log("Natija:", yangiString);

// N 10

// function kattaLotinKichigigaAlmash(string) {
//     let yangiString = "";
//     for (const harf of string) {
//         if (harf >= 'A' && harf <= 'Z') {
//             yangiString += harf.toLowerCase();
//         } else {
//             yangiString += harf.toUpperCase(); 
//         }
//     }
//     return yangiString;
// }

// let string = "FHEBHFBEHFBHB EUFB UBBB FBEUFUB BFEFB BFBFBFBHJEBFHEBFHB HBH BFHWBFB BFHEB ffhbh bbebfhefhbfhbfh fhfefhefhbfefbfefhevfbe";
// let yangiString = kattaLotinKichigigaAlmash(string);
// console.log("Natija:", yangiString);

// N11

// function getstr(son) {
//     if (Number.isInteger(son)) {
//         return 1
//     }
//     if (!isNaN(son) && Number.isInteger(Number(son))) {
//         return 0
//     }
//     return 2
// }

// console.log(getstr(45.255));  

// N12

// let son = "49859 5959595 9959949499494949499";
// let reversedSon = son.split('').reverse().join('');
// console.log(reversedSon);

// N 13

// console.log(eval(7+3-2));

// N 15

// count = 0
// let string = "ehbchebchebwdhcbhcbhecbnhecbhedbchebdnshxbbxgyvsfvsfxcvfsxcfsfscvxfcxfecfvcvvccvcvvc"
// for (const i of string) {
//    if(i === "c"){
//      count++;
//    }
// }
// console.log(count);

// N 16

// function getstr(S1, S2, C) {
//     let result = "";
//     for (let i = 0; i < S1.length; i++) {
//         if (S1[i] === C) {
//             result += S2;
//         }
//         result += S1[i];
//     }
//     return result;
// }

// let str_value = "fuefuehfuheufhueucnnucnunwuwdcubcbuwnaxmjnwjnxuiwqnduwnduwamjkcxsjkcnjkcn";
// let s2_value = "bcieiubwchiybwficbnuubneuibnce";
// let C = "c";

// let result = getstr(str_value, s2_value, C);
// console.log("Natija:", result);



// N 17 

// let count = 0;
// let str = "fefhuehwbhbhebdhebdhbe";
// let str1 = "eubcgygbrgcgcgyycvgyevcgyvecgvgy";
// if (str.includes("str1")) {
//     count++;
// }
// if (str1.includes("str")) {
//     count++;
// }
// console.log(count);

// N 23


// let s = 0;
// let word = "";
// let str = "CNDNCDNCHJNDCHJNC JENCJNAA VJRAAAANVJRAANVJC CJMCRAAAACJNRJCAANRJCNJNJNRJCNJREMCKCM "
// for (let i in str) {
//     if(str[i] !== " "){
//         word += str[i];
//     }
//     else{
//         if(word.includes("AA")){
//             s = s + 1;
//         }
//         word = ""
//     }    
// }
// console.log(s);

// N 25

// let s = 0;
// let word = "";
// let str = "CNDNCDNCHJNDCHJNC JENCJNAA VJRAAAANVJRAANVJC CJMCRAAAACJNRJCAANRJCNJNJNRJCNJREMCKCM "
// for (let i in str) {
//     if(str[i] !== " "){
//         word += str[i];
//     }
//     else{
//         word=str.splite("").join(".")  
//     }    
// }
// console.log(word);

// let s = 0;
// let word = "";
// let str = "CNDNCDNCHJNDCHJNC JENCJNAA VJRAAAANVJRAANVJC CJMCRAAAACJNRJCAANRJCNJNJNRJCNJREMCKCM ";
// for (let i in str) {
//     if(str[i] !== " "){
//         word += str[i];
//     }
//     else{
//         word += ".";
//     }    
// }
// console.log(word);


// N 27

// let s = 0;
// let word = "";
// let str = ",.;'?; ";
// for (let i in str) {
//     if (str[i] !== " ") {
//         word += str[i];
//     } else {
//         if (word.length) {
//             s = s + 1;
//         }
//         word = "";
//     }
// }
// if (word.length) {
//     s = s + 1;
// }
// console.log(s);



// N 28

// function getfilname(path){
//     frist_index =path.lastindexof('/')
//     last_index =path.lastindexof('.')
//     return path.slice(frist_index +1,last_index)

// }
// console.log(getfilname('D:/Qudrat_c++/books/My_book.exe'));
// N 29

// function getfilname(path){
   
//     last_index =path.lastindexof('.')
//     return path.slice(last_index +1)

// }
// console.log(getfilname('D:/Qudrat_c++/books/My_book.exe'));

// N 30

// function getfilname(path){
//     frist_index =path.lastindexof('_')
//     last_index =path.lastindexof('.')
//     return path.slice(frist_index +4,last_index)

// }
// console.log(getfilname('D:/Qudrat_c++/books/My_book.exe'));
