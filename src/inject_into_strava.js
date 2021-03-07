'use strict';

const STEVIE_STYLE = 'Stevie style';
const ON_PAR = 'On par';
const HTFU = 'HTFU';

const get_language = () =>
    document.querySelector('html[lang]')?.getAttribute('lang');

const calculate_skc = (moving_time, elapsed_time) => 
    Math.round(((elapsed_time - moving_time) / moving_time) * 1000) / 10;

const moving_time_per_hour = (hours) =>
    3600 * (hours - 1);

const grade_skc = (moving_time, skc) => {
    // Source for this mapping the Bicycling magazine
    // https://tools.bicycling.nl/steven-kruijswijk-coefficient
    const mapping = [
        { moving_time_floor: moving_time_per_hour(1), stevie_style_ceiling: -1, on_par_ceiling: 0, text: 'Gestopt op een ritje van een uur? Twintig zweepslagen van Stevie zelf.' },
        { moving_time_floor: moving_time_per_hour(2), stevie_style_ceiling: -1, on_par_ceiling: 5, text: 'Vijf minuten stilstaan max.  Vooruit dan. We komen alle-maal wel eens een verkeer-lichtje tegen waar je echt naar moet luisteren.' },
        { moving_time_floor: moving_time_per_hour(3), stevie_style_ceiling: 5, on_par_ceiling: 10, text: 'Drie uur fietsen? Koffie-break allowed! Maar rap wat. 20 min max!' },
        { moving_time_floor: moving_time_per_hour(4), stevie_style_ceiling: 6, on_par_ceiling: 8 , text: 'Vier uur? Koffiebreak mag, maar that’s it. 20 min. Do it.' },
        { moving_time_floor: moving_time_per_hour(5), stevie_style_ceiling: 6, on_par_ceiling: 8, text: 'Bij vijf uur fietsen: koffie-break en snicker-cola break toegestaan. 25 min stilstaan max.' },
        { moving_time_floor: moving_time_per_hour(6), stevie_style_ceiling: 6, on_par_ceiling: 8, text: 'Zes uur rijden? Koffie- en snicker-cola break mag. Plus ff pissen. 30 min. Gas erop.' },
        { moving_time_floor: moving_time_per_hour(7), stevie_style_ceiling: 7, on_par_ceiling: 10, text: 'Zeven uur. Ok, ok. Koffie- en snicker-cola break mag. Plus ff pissen. Of twee keer. Vooruit. 45min.' },
        { moving_time_floor: moving_time_per_hour(8), stevie_style_ceiling: 8, on_par_ceiling: 11, text: 'Acht uur? Lekker sjef. 50 minuten me time krijg je. Geniet er van.' },
        { moving_time_floor: moving_time_per_hour(9), stevie_style_ceiling: 8, on_par_ceiling: 11, text: 'Negen uur trainen? Kudo’s sowieso. 60 minuten voor een on par SKC!' },
        { moving_time_floor: moving_time_per_hour(10), stevie_style_ceiling: 10, on_par_ceiling: 13, text: 'Sick fuck. (Take your time.)' },
    ];

    const eligible = mapping.filter(({ moving_time_floor }) => moving_time_floor <= moving_time);
    const rank = eligible[eligible.length - 1];

    if (skc <= rank.stevie_style_ceiling) {
        return { grade: STEVIE_STYLE, text: rank.text };
    } else if (skc <= rank.on_par_ceiling) {
        return { grade: ON_PAR, text: rank.text };
    }

    return { grade: HTFU, text: rank.text };
}

const inject = (skc, { grade, text }) => {
    const activity_stats = document.querySelector('.activity-stats');
    if (activity_stats) {        

        let color = 'inherit';
        if (grade == STEVIE_STYLE) {
            color = '#36c597';
        }
        if (grade == HTFU) {
            color = '#b40312';
        }
        
        const localized_skc = Intl.NumberFormat(get_language()).format(skc);
        activity_stats.innerHTML += `<div class="section skc">
            <div class="skc-stats row">
                <div class="skc-number spans8">
                    <div style="font-size: 28px; color: ${color};" title="${grade}">${localized_skc}</div>
                    <div>Steven Kruijswijk Coefficient</div>
                </div>
                <div class="skc-grade spans8">${text}</div>
            </div>
        </div>`;
    }
}

const duration_to_seconds = (time) => {
    const parts = time.split(':').reverse();
    
    return parseInt(parts[0])
        + (parts.length > 1 ? (parseInt(parts[1]) * 60) : 0)
        + (parts.length > 2 ? (parseInt(parts[2]) * 3600) : 0);

}

const get_moving_time = () => {
    const time = document.querySelector('[data-glossary-term="definition-moving-time"]')
        ?.closest('li')
        ?.querySelector('strong')
        ?.innerText;
    
    return time ? duration_to_seconds(time) : undefined;
}

const get_elapsed_time = () => {
    const time = document.querySelector('[data-glossary-term="definition-elapsed-time"]')
        ?.closest('tr')
        ?.querySelector('td')
        ?.innerText;
    
    return time ? duration_to_seconds(time) : undefined;
}

const moving_time = get_moving_time();
const elapsed_time = get_elapsed_time();

if (moving_time && elapsed_time) {
    const delta = elapsed_time - moving_time;
    const skc = calculate_skc(moving_time, elapsed_time);
    const grade = grade_skc(moving_time, skc);

    inject(skc, grade);
}
