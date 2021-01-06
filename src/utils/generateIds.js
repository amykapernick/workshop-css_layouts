import {
	months, fullMonths
} from '../_data/dates';

const weekId = (date) => `${date.getDate()}-${months[date.getMonth()].toLowerCase()}-${date.getFullYear()}`,
	weekString = (date) => `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`,
	monthId = (date) => `${months[date.getMonth()].toLowerCase()}-${date.getFullYear()}`,
	monthString = (date) => `${fullMonths[date.getMonth()]} ${date.getFullYear()}`;

module.exports = {
	weekId,
	weekString,
	monthId,
	monthString
};
