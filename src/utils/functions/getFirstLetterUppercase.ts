const getFirstLetterUppercase = (string: string) => { 
   const firstLetter = string.charAt(0).toUpperCase();
   const restOfString = string.slice(1);
   return firstLetter.concat(restOfString);
}

export default getFirstLetterUppercase;