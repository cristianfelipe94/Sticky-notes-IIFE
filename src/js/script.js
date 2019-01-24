(function () {
    console.log('IIFE');

    const stickyNotesArray = [
        { titleNote: 'Nota 1', contentNote: 'Contenido nota1' },
        { titleNote: 'Nota 2', contentNote: 'Contenido nota2' },
        { titleNote: 'Nota 3', contentNote: 'Contenido nota3' },
        { titleNote: 'Nota 4', contentNote: 'Contenido nota4' },
    ];

    let e;

    for (let i = 0; i < stickyNotesArray.length; i++) {

        function getElementsValues(elementKey = getELementsArray()) {
            e =+1;
            for (const elementkeyValue in elementKey) {
                console.log(elementKey[elementkeyValue]);
                console.log(e);
            }
        };

        function getELementsArray() {
            for (e; e < stickyNotesArray.length;) {
                console.log(e);
                return stickyNotesArray[e];
            }
        }
        getElementsValues();
    }

} ());
