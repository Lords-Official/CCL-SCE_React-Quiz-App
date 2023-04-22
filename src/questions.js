/* The code is defining a JavaScript object named `quiz` that contains information about a quiz on the topic of Cloud & DevOps. The object includes the quiz topic, level, total number of questions, per question score, and an array of questions. Each question in the array includes the question text, answer choices, question type, and correct answer. */

export const quizQuestions = {
    topic: 'Cloud & DevOps',
    level: 'Beginner -> Intermediate',
    totalQuestions: 10,
    perQuestionScore: 5,
    questions: [
        {
            question:
            'What is the purpose of DevOps?',
            choices: ['To ensure that developers have control over all aspects of the software development lifecycle', 'To bridge the gap between development and operations teams', 'To increase the number of deployments', 'To reduce the amount of testing required'],
            type: 'MCQs',
            correctAnswer: 'To bridge the gap between development and operations teams',
        },
        {
            question:
            'What is the primary advantage of using cloud services?',
            choices: ['Reduced hardware costs', 'Increased network bandwidth', 'Increased security', 'Faster application development'],
            type: 'MCQs',
            correctAnswer: 'Reduced hardware costs',
        },
        {
            question:
            'Which of the following is a container orchestration tool?',
            choices: [
            'Jenkins',
            'Ansible',
            'Kubernetes',
            'Terraform',
            ],
            type: 'MCQs',
            correctAnswer: 'Kubernetes',
        },
        {
            question: 'What is the purpose of infrastructure as code (IaC)?',
            choices: ['To manually configure infrastructure settings', 'To automate the creation and management of infrastructure', 'To allow developers to write code in any programming language', 'To eliminate the need for version control'],
            type: 'MCQs',
            correctAnswer: 'To automate the creation and management of infrastructure',
        },
        {
            question: 'Which cloud service provider offers a serverless computing platform?',
            choices: ['Amazon Web Services', 'Microsoft Azure', 'Google Cloud Platform', 'Oracle Cloud Infrastructure'],
            type: 'MCQs',
            correctAnswer: 'Amazon Web Services',
        },
        {
            question: 'Which of the following is a popular version control system used in DevOps?',
            choices: ['Git', 'Mercurial', 'SVN', 'All of the above'],
            type: 'MCQs',
            correctAnswer: 'Git',
        },
        {
            question: 'What is the role of a configuration management tool in DevOps?',
            choices: ['To automate the deployment of applications', 'To manage infrastructure settings and configurations', 'To monitor application performance', 'To test and debug code'],
            type: 'MCQs',
            correctAnswer: 'To manage infrastructure settings and configurations',
        },
        {
            question: 'Which of the following is not a cloud service model?',
            choices: ['Infrastructure as a Service (IaaS)', 'Platform as a Service (PaaS)', 'Software as a Service (SaaS)', 'Security as a Service (SecaaS)'],
            type: 'MCQs',
            correctAnswer: 'Security as a Service (SecaaS)',
        },
        {
            question: 'What is the purpose of continuous integration (CI) in DevOps?',
            choices: ['To automate the deployment of applications', 'To ensure that code changes are tested and merged regularly', 'To manage infrastructure settings and configurations', 'To monitor application performance'],
            type: 'MCQs',
            correctAnswer: 'To ensure that code changes are tested and merged regularly',
        },
        {
            question: 'Which of the following is a popular tool for automating infrastructure deployment in DevOps?',
            choices: ['Chef', 'Puppet', 'SaltStack', 'All of the above'],
            type: 'MCQs',
            correctAnswer: 'All of the above',
        },
    ],
}