const numberFormat = Intl.NumberFormat('pt-BR');
const percentage = Intl.NumberFormat('pt-BR', { minimumIntegerDigits: 1, minimumFractionDigits: 2, maximumFractionDigits: 2 });

function format(value) {
    return numberFormat.format(value);
}

function percentageFormatter(value) {
    return `${percentage.format(value)}%`;
}

export { format, percentageFormatter };
