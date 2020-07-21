import './contentscript.scss';
import { title } from 'process';

const isThisContentscript = true;
console.log('isThisContentscript', isThisContentscript);

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.command === 'test') {
    const name = (<HTMLElement>(
      document.querySelector('.pv-top-card--list').querySelector('.inline.t-24')
    ))?.innerText;

    const titleCompanyLine = (<HTMLElement>(
      document.querySelector('.mt1.t-18.t-black.t-normal.break-words')
    ))?.innerText;

    const educationList = <NodeListOf<HTMLElement>>(
      document.querySelectorAll('.pv-entity__school-name.t-16')
    );

    const yearsAtCurrent = (<HTMLElement>(
      document.querySelector(
        'div.pv-entity__company-summary-info > h4 > span:nth-child(2)',
      )
    ))?.innerText;

    let licensesAndCerts = [];

    document
      .querySelectorAll(
        'div.pv-certifications__summary-info.pv-entity__summary-info.pv-entity__summary-info--background-section.pv-certifications__summary-info--has-extra-details',
      )
      .forEach((certNode) =>
        licensesAndCerts.push({
          title: (<HTMLElement>certNode.querySelector('h3'))?.innerText,
          issuedBy: (<HTMLElement>(
            certNode.querySelector('p > span:nth-child(2)')
          ))?.innerText,
        }),
      );

    const location = (<HTMLElement>(
      document.querySelector(
        'ul.pv-top-card--list.pv-top-card--list-bullet.mt1 > li.t-16',
      )
    ))?.innerText;

    const contactInfoButton = <HTMLElement>(
      document.querySelector(
        'ul.pv-top-card--list.pv-top-card--list-bullet.mt1 > li:nth-child(3) > a',
      )
    );

    sendResponse({
      name,
      currentTitle: titleCompanyLine.split(' at ')[0],
      currentCompany: titleCompanyLine.split(' at ')[1],
      primaryEducation: educationList[0]?.innerText,
      secondaryEducation: educationList[1]?.innerText,
      yearsAtCurrent,
      licensesAndCerts,
      location,
    });
  }
  /* Content script action */
});
