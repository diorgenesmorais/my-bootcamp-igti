const currency = Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' });
const percent = Intl.NumberFormat('pt-BR', { style: 'percent', minimumFractionDigits: 2, maximumFractionDigits: 2 });

/**
 * @description
 * Formatar um valor em moeda corrente
 * @param {number} value valor a ser formatado
 * @returns Valor formatado.
 */
function currencyFormat(value) {
    return currency.format(value);
}

/**
 * @description
 * Formatar um valor em porcentagem.
 * @param {number} value valor em porcentagem
 * @returns Valor formatado em porcentagem.
 */
function percentFormat(value) {
    return percent.format(value);
}

export { currencyFormat, percentFormat };
