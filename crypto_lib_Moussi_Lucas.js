console.log("Début du script");
console.log("ça charge?");
var vowels = ['a', 'e', 'i', 'u', 'o', 'y', 'A', 'E', 'I', 'U', 'O', 'Y'];


//Fonction 1 - What are words worth ?

function what_are_words_worth() {
    var valeur_entree = prompt("Entrez un mot ou une phrase :");
    var longueur = valeur_entree.length;
    var confirmation = confirm(`Votre entrée "${valeur_entree}" comporte ${longueur} caractère(s)`);
    return confirmation;
}
console.group('Partie 1');
console.log(what_are_words_worth())
console.groupEnd();


//Fonction 2 - Count Wordula
function count_words(string_of_words) {
    if (!string_of_words || string_of_words === ' ' ) return 0;
    var count = 1 
    for (let i = 0; i < string_of_words.length; i++) { 
        if (string_of_words.charAt(i) === ' ' ) count ++
    }
    return count
}
console.group('Partie 2');
console.log(count_words('Turing believes machines think')) //on aurait pu enlever la phrase et le compte serait donc à 0// ou on pourrait appliquer cette fonction à notre entrée de la partie 1// 
console.groupEnd();

//Fonction 3 - Count Wordula, 2nd of his name
function count_words_by(string_of_words, letter) {
    if (!string_of_words || string_of_words === ' ' ) return 0;
    var count = 1
    for (let i = 0; i < string_of_words.length; i++) { 
        if (string_of_words.charAt(i) === letter ) count ++
    }
    return count
}
console.group('Partie 3');
console.log(count_words_by('Turing believes machines think', 'i')) //on aurait pu enlever la phrase et le compte serait donc à 0 // ou on pourrait appliquer cette fonction à notre entrée de la partie 1// 
console.groupEnd();


// Fonction 4 - Des chiffres & des lettres : voyelles
function is_a_vowel(letter) {
    for (let i = 0; i < vowels.length; i++) {
        if (vowels[i] === letter) return true;
    }
    return false;
}

function count_vowels(string_of_words) {
    if (!string_of_words) return 0;
    var count = 0;
    for (let i = 0; i < string_of_words.length; i++) {
        if (is_a_vowel(string_of_words.charAt(i))) count++;
    }
    return count;
}

console.group('Partie 4');
console.log(count_vowels('Turing believes machines think')); // Doit afficher 10  //ou on pourrait appliquer cette fonction à notre entrée de la partie 1//
console.groupEnd();


// Fonction 5 - Des chiffres & des lettres : Consonnes

function count_consonants(string_of_words) {
    return string_of_words ? string_of_words.length - count_vowels(string_of_words) - count_words_by(string_of_words, ' ') + 1 : 0; // compte le nombre de lettre, soustrait voyelles et espaces// pas facile celle là ahahah // 
}

console.group('Partie 5');
console.log(count_consonants('Turing believes machines think')); // Devrait afficher 17 // ou on pourrait appliquer cette fonction à notre entrée de la partie 1//
console.groupEnd();


// Fonction 6 - search and destroy

function remove(string_of_words, caracter) {
    return string_of_words ? string_of_words.split(caracter).join('') : '';
}

console.group('Partie 6');
console.log(remove('Turing believes machines think', 'e')); // 'Turing blivs machins think'
console.log(remove('Turing blivs machins think', 'i')); // 'Turng blvs machns thnk'
console.log(remove('Turng blvs machns thnk', ' ')); // 'Turngblvsmachnsthnk'' // je me suis un peu amusé 
console.log(remove('', '')); // '' // test chaine vide 
console.groupEnd();


// Fonction 7 - Caedite eos. Novit enim Dominus qui sunt eius 

function remove_strings(string_of_words, characters) {
    if (!string_of_words) return '';
    let result = string_of_words;
    for (let i = 0; i < characters.length; i++) {
        result = remove(result, characters.charAt(i));
    }
    return result;
}

console.group('Partie 7');
console.log(remove_strings('Turing believes machines think', 'z')); // "Turing believes machines think"
console.log(remove_strings('Turing believes machines think', 'e')); // "Turing blivs machins think"
console.log(remove_strings('Turing lies with men', 'i'));           // "Turng les wth men"
console.log(remove_strings('', 'abc'));                           // "" // test chaine vide 
console.groupEnd();

//Fonction 8 - Caesar // je crois qu'il y à plus facile comme soluce

function crypto(a_string, a_number) {
    if (!a_string) return "";
    var result = "";
    for (var i = 0; i < a_string.length; i++) {
        var c = a_string.charAt(i);
        var code = a_string.charCodeAt(i);
        
        // Si c'est une lettre minuscule (a-z)
        if (code >= 97 && code <= 122) {
            var shifted = ((code - 97 + a_number) % 26);
            if (shifted < 0) shifted += 26;  // gestion des décalages négatifs
            result += String.fromCharCode(shifted + 97);
        } 
        
        // Si c'est une lettre majuscule (A-Z)
        else if (code >= 65 && code <= 90) {
            var shifted = ((code - 65 + a_number) % 26);
            if (shifted < 0) shifted += 26;
            result += String.fromCharCode(shifted + 65);
        } 
        // Pour tous les autres caractères (espaces, ponctuation, etc.)
        else {
            result += c;
        }
    }
    return result;
}

console.group('Partie 8');
console.log(crypto('If the only thing keeping a person decent is the expectation of divine reward then, brother, that person is a piece of shit.', 1));  // "Jg uif pomz uijoh lffqjoh b qfstpo efdfou jt uif fyqfdubujpo pg ejwjof sfxbse uifo, cspuifs, uibu qfstpo jt b qjfdf pg tiju."
console.log(crypto('If the only thing keeping a person decent is the expectation of divine reward then, brother, that person is a piece of shit.', 2));  // "Kh vjg qpna vjkpi mggrkpi c rgtuqp fgegpv ku vjg gzrgevcvkqp qh fkxkpg tgyctf vjgp, dtqvjgt, vjcv rgtuqp ku c rkgeg qh ujkv."
console.log(crypto('If the only thing keeping a person decent is the expectation of divine reward then, brother, that person is a piece of shit.', 10)); // "Sp dro yxvi drsxq uoozsxq k zobcyx nomoxd sc dro ohzomdkdsyx yp nsfsxo bogkbn drox, lbydrob, drkd zobcyx sc k zsomo yp crsd.."
console.log(crypto('If the only thing keeping a person decent is the expectation of divine reward then, brother, that person is a piece of shit.', 27)); // "Jg uif pomz uijoh lffqjoh b qfstpo efdfou jt uif fyqfdubujpo pg ejwjof sfxbse uifo, cspuifs, uibu qfstpo jt b qjfdf pg tiju."
console.log(crypto('If the only thing keeping a person decent is the expectation of divine reward then, brother, that person is a piece of shit.', 28)); // "Kh vjg qpna vjkpi mggrkpi c rgtuqp fgegpv ku vjg gzrgevcvkqp qh fkxkpg tgyctf vjgp, dtqvjgt, vjcv rgtuqp ku c rkgeg qh ujkv."
console.log(crypto('If the only thing keeping a person decent is the expectation of divine reward then, brother, that person is a piece of shit.', 1500)); // "Ax lzw gfdq lzafy cwwhafy s hwjkgf vwuwfl ak lzw wphwulslagf gx vanafw jwosjv lzwf, tjglzwj, lzsl hwjkgf ak s hawuw gx kzal."
console.groupEnd();


//Fonction 9 - Décrypter // c'est la premiére fois que j'utilise assert

function decrypt(a_string, a_number) { return crypto(a_string, -a_number); }

console.group('Partie 9');
console.assert(decrypt('Jg uif pomz uijoh lffqjoh b qfstpo efdfou jt uif fyqfdubujpo pg ejwjof sfxbse uifo, cspuifs, uibu qfstpo jt b qjfdf pg tiju.',1) === 'If the only thing keeping a person decent is the expectation of divine reward then, brother, that person is a piece of shit.');
console.assert(decrypt('Jg uif pomz uijoh lffqjoh b qfstpo efdfou jt uif fyqfdubujpo pg ejwjof sfxbse uifo, cspuifs, uibu qfstpo jt b qjfdf pg tiju.',27) === 'If the only thing keeping a person decent is the expectation of divine reward then, brother, that person is a piece of shit.');
console.assert(decrypt('Kh vjg qpna vjkpi mggrkpi c rgtuqp fgegpv ku vjg gzrgevcvkqp qh fkxkpg tgyctf vjgp, dtqvjgt, vjcv rgtuqp ku c rkgeg qh ujkv.',2) === 'If the only thing keeping a person decent is the expectation of divine reward then, brother, that person is a piece of shit.');
console.assert(decrypt('Kh vjg qpna vjkpi mggrkpi c rgtuqp fgegpv ku vjg gzrgevcvkqp qh fkxkpg tgyctf vjgp, dtqvjgt, vjcv rgtuqp ku c rkgeg qh ujkv.',28) === 'If the only thing keeping a person decent is the expectation of divine reward then, brother, that person is a piece of shit.');
console.assert(decrypt('Ax lzw gfdq lzafy cwwhafy s hwjkgf vwuwfl ak lzw wphwulslagf gx vanafw jwosjv lzwf, tjglzwj, lzsl hwjkgf ak s hawuw gx kzal.',1500) === 'If the only thing keeping a person decent is the expectation of divine reward then, brother, that person is a piece of shit.');
console.assert(decrypt('If the only thing keeping a person decent is the expectation of divine reward then, brother, that person is a piece of shit.',26) === 'If the only thing keeping a person decent is the expectation of divine reward then, brother, that person is a piece of shit.'); 

console.groupEnd(); // Rien n'apparait sur la console donc c'est bon, si je script ne marchait pas "Assertion failed: console.assert"


//Fonction 10 - Enigma 

function enigma(crypted_string) {
    for (let key = 1; key < 27; key++) 
      console.log("Clé " + key + ": " + 
                  decrypt(crypted_string, key));
  }
  
  console.group('Partie 10');
  enigma('lzw akgdslwv esf vgwk fgl vwnwdgh sfq aflwddwulmsd hgowj. Al ak fwuwkksjq xgj zae lg tw aeewjkwv af sf wfnajgfewfl gx glzwj ewf, ozgkw lwuzfaimwk zw stkgjtk vmjafy lzw xajkl lowflq qwsjk gx zak daxw. Zw esq lzwf hwjzshk vg s dalldw jwkwsjuz gx zak gof sfv escw s nwjq xwo vakugnwjawk ozauz sjw hskkwv gf lg glzwj ewf. Xjge lzak hgafl gx nawo lzw kwsjuz xgj fwo lwuzfaimwk emkl tw jwysjvwv sk usjjawv gml tq lzw zmesf ugeemfalq sk s ozgdw, jslzwj lzsf tq afvanavmsdk');
  console.groupEnd(); // clé 18 
  