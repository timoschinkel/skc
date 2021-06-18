const translations = {
    'nl-NL': {
        'Steven Kruijswijk Coefficient': 'Steven Kruijswijk Coëfficiënt',
        'Did you really stop on a one hour ride?': 'Gestopt op een ritje van een uur? Twintig zweepslagen van Stevie zelf.',
        '5 minute break max, we all need to stop for a traffic light.': 'Vijf minuten stilstaan max.  Vooruit dan. We komen allemaal wel eens een verkeerslichtje tegen waar je echt naar moet luisteren.',
        'Three hour ride? A coffee break is allowed, but 20 minutes max!': 'Drie uur fietsen? Koffie-break allowed! Maar rap wat. 20 min max!',
        'Four hours? A coffee break is allowed, but that\'s it. 20 minutes. Do it.': 'Vier uur? Koffiebreak mag, maar that\'s it. 20 min. Do it.',
        'With a five hour ride: coffee break and candy bar and fizzy drink is allowed. 25 minutes without movement max.': 'Bij vijf uur fietsen: koffie-break en snicker-cola break toegestaan. 25 min stilstaan max.',
        'Six hour ride? Coffee break and a candy bar and fizzy drink stop is allowed. And a toilet break. 30 minutes. Full throttle.': 'Zes uur rijden? Koffie- en snicker-cola break mag. Plus ff pissen. 30 min. Gas erop.',
        'Seven hours. Okay, okay. Coffee break and a candy bar and fizzy drink stop allowed. And a toilet break. Or two. 45 minutes.': 'Zeven uur. Ok, ok. Koffie- en snicker-cola break mag. Plus ff pissen. Of twee keer. Vooruit. 45min.',
        'Eight hours? Nice job. You\'ll get 50 minutes of "me time". Enjoy.': 'Acht uur? Lekker sjef. 50 minuten me time krijg je. Geniet er van.',
        'Nine hour training? Kudo\'s guaranteed. 60 minutes to be on par with SKC!': 'Negen uur trainen? Kudo’s sowieso. 60 minuten voor een on par SKC!',
        'Sick fuck. (Take your time.)': 'Sick fuck. (Take your time.)',
    }
}

/**
 * 
 * @param {String} translation_string 
 * @returns {String}
 */
module.exports.__ = (language) => 
    (translation_string) =>
        translations?.[language]?.[translation_string] || translation_string;