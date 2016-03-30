import i18n from 'i18next';
import ru from 'data/lang/ru.json';
import uk from 'data/lang/uk.json';

i18n
    .init({
        lng: 'ru',
        interpolation: {
            escapeValue: false // not needed for react!!
        },
        resources: {
            ru,
            uk
        }
    });

export default i18n;
