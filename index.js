const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const handleError = (error) => {
    console.error('Error encountered', error);
}

const managerPrompt = [
    {
        name: 'id',
        message: 'Manager ID',
    },
    {
        name: 'name',
        message: 'Manager name',
    },
    {
        name: 'email',
        message: 'Manager email',
    },
    {
        name: 'officeNumber',
        message: 'Manager office number',
    },
];

const engineerPrompt = [
    {
        name: 'id',
        message: 'Engineer ID',
    },
    {
        name: 'name',
        message: 'Engineer name',
    },
    {
        name: 'email',
        message: 'Engineer email',
    },
    {
        name: 'github',
        message: 'Engineer Github account',
    },
];

const internPrompt = [
    {
        name: 'id',
        message: 'Intern ID',
    },
    {
        name: 'name',
        message: 'Intern name',
    },
    {
        name: 'email',
        message: 'Intern email',
    },
    {
        name: 'school',
        message: 'Intern school',
    },
];

const basePrompt = [
    {
        name: 'menu',
        type: 'list',
        message: 'What would you like to do?',
        choices: [
            {
                name: 'Add an engineer to the team',
                value: 'engineer',
            },
            {
                name: 'Add an intern to the team',
                value: 'intern',
            },
            {
                name: 'Finished. Create team list',
                value: 'done',
            },
        ],
    }
];

/**
 * Create the HTML file and render it to the FS
 * 
 * @param {Manager} manager - manager of staff
 * @param {(Intern|Engineer)[]} staff - array of staff for final HTML
 */
const createHtml = (manager, staff) => {
    console.log(manager, staff);
};


inquirer.prompt(managerPrompt).then(managerData => {
    const manager = new Manager(managerData.id, managerData.name, managerData.email, managerData.officeNumber);
    const staff = [];
    
    const promptItem = (prompts, type) => {
        inquirer.prompt(prompts).then(staffData => {
            switch (type) {
                case 'ENGINEER':
                    staff.push(new Engineer(staffData.id, staffData.name, staffData.email, staffData.github));
                    break;
                case 'INTERN':
                    staff.push(new Intern(staffData.id, staffData.name, staffData.email, staffData.school));
                    break;
            }

            promptMenu();

        }).catch(handleError);
    };

    const promptMenu = () => {
        inquirer.prompt(basePrompt).then(baseData => {
            switch (baseData.menu) {
                case 'engineer':
                    promptItem(engineerPrompt, 'ENGINEER');
                    break;
                case 'intern':
                    promptItem(internPrompt, 'INTERN');
                    break;

                case 'done':
                default:
                    createHtml(manager, staff);
            }
        }).catch(handleError);
    };

    promptMenu();
}).catch(handleError);