module.exports.STEVIE_STYLE = 'Stevie style';
module.exports.ON_PAR = 'On par';
module.exports.HTFU = 'HTFU';

/**
 * @param {Number} moving_time_seconds 
 * @param {Number} elapsed_time_seconds 
 * @returns {Number}
 */
module.exports.calculate_skc = (moving_time_seconds, elapsed_time_seconds) => 
    Math.round(((elapsed_time_seconds - moving_time_seconds) / moving_time_seconds) * 1000) / 10;

const moving_time_per_hour = (hours) =>
    3600 * hours;

/**
 * @param {Number} moving_time 
 * @param {Number} skc
 * @returns {Object}
 */
 module.exports.grade_skc = (moving_time, skc) => {
    // Source for this mapping the Bicycling magazine. Translations are my own.
    // https://tools.bicycling.nl/steven-kruijswijk-coefficient
    const mapping = [
        { moving_time_floor: moving_time_per_hour(1), stevie_style_ceiling: -1, on_par_ceiling: 0, text: __('Did you really stop on a one hour ride?') },
        { moving_time_floor: moving_time_per_hour(2), stevie_style_ceiling: -1, on_par_ceiling: 5, text: __('5 minute break max, we all need to stop for a traffic light.') },
        { moving_time_floor: moving_time_per_hour(3), stevie_style_ceiling: 5, on_par_ceiling: 10, text: __('Three hour ride? A coffee break is allowed, but 20 minutes max!') },
        { moving_time_floor: moving_time_per_hour(4), stevie_style_ceiling: 6, on_par_ceiling: 8 , text: __('Four hours? A coffee break is allowed, but that\'s it. 20 minutes. Do it.') },
        { moving_time_floor: moving_time_per_hour(5), stevie_style_ceiling: 6, on_par_ceiling: 8, text: __('With a five hour ride: coffee break and candy bar and fizzy drink is allowed. 25 minutes without movement max.') },
        { moving_time_floor: moving_time_per_hour(6), stevie_style_ceiling: 6, on_par_ceiling: 8, text: __('Six hour ride? Coffee break and a candy bar and fizzy drink stop is allowed. And a toilet break. 30 minutes. Full throttle.') },
        { moving_time_floor: moving_time_per_hour(7), stevie_style_ceiling: 7, on_par_ceiling: 10, text: __('Seven hours. Okay, okay. Coffee break and a candy bar and fizzy drink stop allowed. And a toilet break. Or two. 45 minutes.') },
        { moving_time_floor: moving_time_per_hour(8), stevie_style_ceiling: 8, on_par_ceiling: 11, text: __('Eight hours? Nice job. You\'ll get 50 minutes of "me time". Enjoy.') },
        { moving_time_floor: moving_time_per_hour(9), stevie_style_ceiling: 8, on_par_ceiling: 11, text: __('Nine hour training? Kudo\'s guaranteed. 60 minutes to be on par with SKC!') },
        { moving_time_floor: moving_time_per_hour(10), stevie_style_ceiling: 10, on_par_ceiling: 13, text: __('Sick fuck. (Take your time.)') },
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