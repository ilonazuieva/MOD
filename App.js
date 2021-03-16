function mod256WithoutMod(number) {
    return number - 256 * Math.trunc(number/256);
}

//https://www.codewars.com/kata/581e1d083a4820eb4f00004f/solutions/javascript/all/best_practices