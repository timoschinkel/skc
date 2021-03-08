'use strict';

import { STEVIE_STYLE, ON_PAR, HTFU, calculate_skc, grade_skc } from './../skc';
import { __ } from './../i18n';
import { duration_to_seconds } from './../time';

/** @type {String|undefined} */
const language = document.querySelector('html[lang]')?.getAttribute('lang');

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
        
        const localized_skc = Intl.NumberFormat(language).format(skc);
        const localized_title = __('Steven Kruijswijk Coefficient');

        activity_stats.innerHTML += `<div class="section skc">
            <div class="skc-stats row">
                <div class="skc-number spans8">
                    <div style="font-size: 28px; color: ${color};" title="${grade}">${localized_skc}</div>
                    <div>${localized_title}</div>
                </div>
                <div class="skc-grade spans8">${text}</div>
            </div>
        </div>`;
    }
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
    const skc = calculate_skc(moving_time, elapsed_time);
    const grade = grade_skc(moving_time, skc);

    inject(skc, grade);
}
