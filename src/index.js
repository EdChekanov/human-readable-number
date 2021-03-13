module.exports = function toReadable (number) {

  function subFunction (number) {
    const oneSymbolNumbers = ['zero','one','two','three','four', 'five','six','seven','eight','nine',''];
    const twoSymbolNumbers1 = ['ten','eleven','twelve','thirteen', 'fourteen','fifteen','sixteen', 'seventeen','eighteen','nineteen'];
    const twoSymbolNumbers2 = ['','','twenty','thirty','forty','fifty', 'sixty','seventy','eighty','ninety'];
    const bigNumbers = ['hundred','thousand','million', 'billion','trillion'];
    let n = 0;
    let result = '';
    if (Number(number) == NaN)  {
      return '';
    };

  function transformOneCountNumber (number) {
      return oneSymbolNumbers[number];
    };

  function transformTwoCountNumber (number) {
      if (number < 20) {
        if (String(number)[0] == 0) {
          n = String(number)[1];
          if (n == 0) {
            return '';
          }
          return transformOneCountNumber(n);
        };
      n = String(number)[1];
      return twoSymbolNumbers1[n];
      } else {
         n = String(number)[0];
         result = twoSymbolNumbers2[n];
         n = String(number)[1];
        if (n == 0) {
          n = 10;
        };
         result = result + ' ' + oneSymbolNumbers[n];
         return result;
       }
   };

  function transformThreeCountNumber (number) {
      n = String(number)[0];
      if (n == 0) {
      return transformTwoCountNumber(String(number).slice(1));  
      }
      return transformOneCountNumber(n) + ' ' + bigNumbers[0] + ' ' + transformTwoCountNumber(String(number).slice(1));
    }

  function transformFourCountNumber (number) {
      n = String(number)[0];
      return transformOneCountNumber(n) + ' ' + bigNumbers[1] + ' ' + transformThreeCountNumber(String(number).slice(1));
    }

  function transformFiveCountNumber (number) {
    n = String(number).slice(0, 2);
    return transformTwoCountNumber(n) + ' ' + bigNumbers[1] + ' ' +  transformThreeCountNumber(String(number).slice(2));
  }

  function transformSixCountNumber (number) {
    n = String(number).slice(0, 3);
    if (n[0] == 0) {
     return transformThreeCountNumber(String(number).slice(3)); 
    }
    return transformThreeCountNumber(n) + ' ' + bigNumbers[1] + ' ' +  transformThreeCountNumber(String(number).slice(3));
  }

  function transformSevenCountNumber (number) {
    n = String(number)[0];
    return transformOneCountNumber(n) + ' ' + bigNumbers[2] + ' ' + transformSixCountNumber(String(number).slice(1)); 
  }

  
    if (String(number).length == 1) {
      return transformOneCountNumber(number);
    } else if ((String(number).length == 2)) {
      return transformTwoCountNumber(number);
    } else if (String(number).length == 3) {
      return transformThreeCountNumber(number);
    } else if (String(number).length == 4) {
      return transformFourCountNumber(number);
    } else if (String(number).length == 5) {
      return transformFiveCountNumber(number);
    } else if (String(number).length == 6) {
      return transformSixCountNumber(number);
    } else if (String(number).length == 7) {
      return transformSevenCountNumber(number);
    }
  }
  if (subFunction(number)[subFunction(number).length - 1] == ' ') {
    return subFunction(number).slice(0, -1); 
  }
  return subFunction(number);
}