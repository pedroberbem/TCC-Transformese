
function atualizarLinha() {
    const boxSection = section.getBoundingClientRect();
    const boxOrigem = cardOrigem.getBoundingClientRect();
    const boxDestino = cardDestino.getBoundingClientRect();

    const x1 = boxOrigem.right - boxSection.left;
    const y1 = boxOrigem.bottom - boxSection.top;
    const x2 = boxDestino.left - boxSection.left;
    const y2 = boxDestino.top - boxSection.top;

    linha.setAttribute('x1', x1);
    linha.setAttribute('y1', y1);
    linha.setAttribute('x2', x2);
    linha.setAttribute('y2', y2);
}

atualizarLinha();
window.addEventListener('resize', atualizarLinha);