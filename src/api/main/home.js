import moonRequest from '../index';
const icode = 'CF03685ADB713C26';
export function getWordCloud() {
    return moonRequest.get({
        url: '/screen/wordcloud',
        params: { icode },
    });
}
export function getMapScatter() {
    return moonRequest.get({
        url: '/screen/map/scatter',
        params: { icode },
    });
}
export function getData() {
    return moonRequest.get({
        url: '/screen/data',
        params: { icode },
    });
}
