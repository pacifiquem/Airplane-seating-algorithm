export function isValid2dArray(input, optCondition, ...optConParams) {
  if (
    !(
      input.length > 0 &&
      input.constructor === Array &&
      input[0][0] &&
      input[0].constructor === Array
    )
  ) {
    return false;
  }
  if (optCondition) {
    return input.every(
      arr =>
        arr.length === 2 &&
        arr.every(number => isNonNegativeInteger(number)) &&
        optCondition(arr[0], arr[1], ...optConParams),
    );
  }
  return input.every(arr => arr.length === 2 && arr.every(number => isNonNegativeInteger(number)));
}

export function isNonNegativeInteger(input) {
  return Number.isInteger(input) && input >= 0;
}

export function isValidPassengers(input) {
  if (!isNonNegativeInteger(input)) {
    throw new Error('Invalid passenger input. Must be a non-negative number.');
  }
  return input;
}

export function isRowsAndColsLessThan(rows, cols, rowNumber, colNumber) {
  if (rows && cols) {
    return rows < rowNumber && cols < colNumber;
  }
  return false;
}


export const isArrayValid = (input) => {

  if(input.constructor === Array && input.length > 1 && input.length < 10) {

    const isValidArr = input.map(arr => {
      if(arr.constructor === Array && arr.length === 2 && arr[0] < 20 && arr[0] > 1 && arr[1] < 30 && arr[1] > 1) {
        const isValidNum = arr.map(num => {
          if(num.constructor === Number && num > 0 && Number.isInteger(num)) {
            return true;
          }else {
            return false;
          }
        })

        return isValidNum;

      }else {
        return false;
      }
    });

    let is2dValid = isValidArr.map(arr => {
      if(arr[0] === true && arr[1] === true) {
        return true;
      }else {
        return false;
      }
    });

    if(is2dValid.includes(false)) {
      return false;
    }else {
      return true;
    }
  }else {
    return false;
  }

}