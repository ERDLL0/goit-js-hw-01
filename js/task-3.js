function getElementWidth(content, padding, border) {
  // '50px' -> 50
  const contentValue = parseFloat(content);
  const paddingValue = parseFloat(padding);
  const borderValue = parseFloat(border);

  // Box-sizing: border-box olduğunda toplam genişlik:
  // totalWidth = content + 2*padding + 2*border
  // Çünkü padding ve border her iki tarafta da var.

  const totalWidth = contentValue + 2 * paddingValue + 2 * borderValue;

  // İstersen tam sayı olarak dönebilirsin, decimal olabilir.
  return totalWidth;
}

// Test kodları:
console.log(getElementWidth("50px", "8px", "4px"));    // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px"));   // 200
