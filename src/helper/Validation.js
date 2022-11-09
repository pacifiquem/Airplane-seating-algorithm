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
