(function (global, doc) {
    const CLASS_SELECTED = 'ez-translation__label--selected';
    const SELECTOR_WRAPPER = '.ez-translation__language-wrapper';
    const SELECTOR_LABEL = '.ez-translation__label';
    const SELECTOR_MODAL = '.ez-modal';
    const updateSelection = (event) => {
        event.preventDefault();

        const radio = event.currentTarget.querySelector('input[type="radio"]');
        const checked = !(radio.checked && radio.name === 'add-translation[base_language]');
        const methodName = checked ? 'setAttribute' : 'removeAttribute';

        [...event.target.closest(SELECTOR_WRAPPER).querySelectorAll(SELECTOR_LABEL)].forEach(label => label.classList.remove(CLASS_SELECTED));

        if (checked) {
            event.currentTarget.classList.add(CLASS_SELECTED);
        }

        radio[methodName]('checked', checked);

        if (radio.name === 'add-translation[language]') {
            const modal = event.target.closest(SELECTOR_MODAL);

            modal.querySelector('.ez-btn--create-translation').removeAttribute('disabled');
        }
    };

    [...doc.querySelectorAll(SELECTOR_LABEL)].forEach(input => input.addEventListener('click', updateSelection, false));
})(window, document);
