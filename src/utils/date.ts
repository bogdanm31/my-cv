export const getYearAndMonthName = (dateString: string) => new Date(dateString).toLocaleString('default', {
  year: 'numeric',
  month: 'long'
});

const getYearAndMonthNr = (dateString: string) => dateString.split('-').map(t => Number(t));

export const getPeriodData = (started: string, ended?: string) => {
  const when = getYearAndMonthName(started)
    + ' - '
    + (ended ? getYearAndMonthName(ended) : 'present');

  if (ended) {
    const [startYear, startMonth] = getYearAndMonthNr(started);
    const [endYear, endMonth] = getYearAndMonthNr(ended);

    const length = (endYear - startYear) * 12 + endMonth - startMonth + 1;
    const years = Math.floor(length / 12);
    const months = length % 12;

    let longevity = '';
    if (years) {
      longevity += `${years} ${years > 1 ? 'years' : 'year'} `;
    }
    if (months) {
      longevity += `${months} ${months > 1 ? 'months' : 'month'}`
    }
    longevity = longevity.trim();

    return {
      when,
      longevity
    };
  }

  return { when, longevity: null };
};