import { cloneElement, isValidElement } from 'react';

export function checkValidAndCloneElement(element, props = {}) {
  return element && isValidElement(element) && cloneElement(element, props);
}

export function getArrayFromNumber(length) {
  return Array.from({ length }, (_, i) => i + 1);
}
