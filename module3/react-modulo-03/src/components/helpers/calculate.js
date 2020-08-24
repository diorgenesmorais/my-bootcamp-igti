/**
 * @description
 * Calcula a porcentagem para juros compostos.
 * @param {number} rate taxa
 * @param {number} month quantos meses
 * @returns A porcentagem
 */
function getPercentage(rate, month) {
    return ((1 + rate / 100) ** month) - 1;
}

/**
 * @description
 * Obter o valor com base na taxa
 * @param {number} amount montante (base)
 * @param {number} rate taxa
 * @returns Valor monetário baseado na taxa informada.
 */
function getRateValue(amount, rate) {
    return amount * rate;
}

/**
 * @description
 * Obter o valor do montante
 * @param {number} base montante base
 * @param {number} value valor a incrementar o decrementar
 * @returns Valor do montante calculado.
 */
function getAmount(base, value) {
    return base + value;
}

export { getPercentage, getRateValue, getAmount };
