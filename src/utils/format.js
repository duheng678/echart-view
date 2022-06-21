export function formatNumber(v) {
    const reg = /\d{1,3}(?=(\d{3})+$)/g;
    return `${v}`.replace(reg, '$&,');
}
