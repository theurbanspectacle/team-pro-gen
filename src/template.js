const Manager = require("../lib/Manager");
const Intern = require("../lib/Intern");
const Engineer = require("../lib/Engineer");

/**
 * Get the staff box to render on the HTML
 * @param {Manager|Intern|Engineer} staff 
 * @returns {string} the HTML for the staff box
 */
const getEmployeeBox = (staff) => {
    let customField = '';
    let icon = '';

    switch (staff.getRole()) {
        case 'Manager':
            icon = '💼';
            customField = `Office number: ${staff.getOfficeNumber()}`;
            break;
            case 'Intern':
            icon = '🎓';
            customField = `School: ${staff.getSchool()}`;
            break;
            case 'Engineer':
            icon = '💻';
            customField = `Github: <a href="https://github.com/${staff.getGithub()}" target="_blank">${staff.getGithub()}</a>`;
            break;
    }

    return `<div class="staff-box">
                <div class="staff-box--header">
                    <p class="staff-box--name">${staff.getName()}</p>
                    <p>
                        <span class="icon">${icon}</span>
                        ${staff.getRole()}
                    </p>
                </div>
                <div class="staff-box--body">
                    <p>ID: ${staff.getId()}</p>
                    <p>Email: <a href="mailto:${staff.getEmail()}" target="_blank">${staff.getEmail()}</a></p>
                    <p>${customField}</p>
                </div>
            </div>`;
};


/**
 * Create the HTML file and render it to the FS
 * 
 * @param {Manager} manager - manager of staff
 * @param {(Intern|Engineer)[]} staff - array of staff for final HTML
 * 
 * @returns {string} - Final HTML file to content
 */
const getMainPage = (manager, staff) => {
    const pageTitle = `${manager.getName()}'s team`;

    return `<!DOCTYPE html>
<html>
    <head>
        <title>${pageTitle}</title>
        <link href="style.css" rel="stylesheet" />
    </head>
    
    <body>
        <div class="header">${pageTitle}</div>
        <div class="staff-list">
            ${getEmployeeBox(manager)}
            ${staff.map(item => getEmployeeBox(item)).join('\n')}
        </div>
    </body>
</html>
`;
};

module.exports = {
    getMainPage,
    getEmployeeBox,
};