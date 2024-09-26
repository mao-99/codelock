const workshopData = [
    {
        id: 0,
        title: "Introduction to JavaScript",
        related_concepts: ['variables', 'functions', 'loops'],
        leetcode_link: "https://leetcode.com/problemset/all/",
        rating: "A",
        solution_sheet_link: "https://example.com/js-solutions",
        video_link: "https://example.com/js-video",
        difficulty: "Easy",
        discord_server_link: "https://discord.gg/examplejs"
    },
    {
        id: 1,
        title: "Advanced CSS Techniques",
        related_concepts: ['flexbox', 'grid', 'animations'],
        leetcode_link: "https://leetcode.com/tag/css/",
        rating: "B",
        solution_sheet_link: "https://example.com/css-solutions",
        video_link: "https://example.com/css-video",
        difficulty: "Easy",
        discord_server_link: "https://discord.gg/examplecss"
    },
    {
        id: 2,
        title: "React Basics",
        related_concepts: ['components', 'props', 'state'],
        leetcode_link: "https://leetcode.com/tag/react/",
        rating: "A+",
        solution_sheet_link: "https://example.com/react-solutions",
        video_link: "https://example.com/react-video",
        difficulty: "Easy",
        discord_server_link: "https://discord.gg/examplereact"
    },
    {
        id: 3,
        title: "Node.js Fundamentals",
        related_concepts: ['express', 'middleware', 'APIs'],
        leetcode_link: "https://leetcode.com/tag/nodejs/",
        rating: "B+",
        solution_sheet_link: "https://example.com/nodejs-solutions",
        video_link: "https://example.com/nodejs-video",
        difficulty: "Easy",
        discord_server_link: "https://discord.gg/examplenode"
    },
    {
        id: 4,
        title: "Database Design",
        related_concepts: ['SQL', 'NoSQL', 'ERD'],
        leetcode_link: "https://leetcode.com/tag/database/",
        rating: "A-",
        solution_sheet_link: "https://example.com/db-solutions",
        video_link: "https://example.com/db-video",
        difficulty: "Easy",
        discord_server_link: "https://discord.gg/exampledb"
    },
    {
        id: 5,
        title: "Machine Learning Basics",
        related_concepts: ['supervised learning', 'unsupervised learning', 'neural networks'],
        leetcode_link: "https://leetcode.com/tag/machine-learning/",
        rating: "A",
        solution_sheet_link: "https://example.com/ml-solutions",
        video_link: "https://example.com/ml-video",
        difficulty: "Easy",
        discord_server_link: "https://discord.gg/exampleml"
    },
    {
        id: 6,
        title: "Web Security Essentials",
        related_concepts: ['HTTPS', 'CORS', 'XSS'],
        leetcode_link: "https://leetcode.com/tag/security/",
        rating: "B",
        solution_sheet_link: "https://example.com/security-solutions",
        video_link: "https://example.com/security-video",
        difficulty: "Easy",
        discord_server_link: "https://discord.gg/examplesecurity"
    },
    {
        id: 7,
        title: "Cloud Computing Basics",
        related_concepts: ['AWS', 'Azure', 'GCP'],
        leetcode_link: "https://leetcode.com/tag/cloud/",
        rating: "B+",
        solution_sheet_link: "https://example.com/cloud-solutions",
        video_link: "https://example.com/cloud-video",
        difficulty: "Easy",
        discord_server_link: "https://discord.gg/examplecloud"
    }
];

export default workshopData

/*
Schema:
id: 0,Each problem has: {
difficulty: "Easy",title, related_concepts, problem_link, rating, solution_sheet_link, video_link, 
discord_server_link}

Overview: 
id: 0,    
title - This is the problem name
    related_concepts - This is a array of related computer science topics and data structures
    leetcode_link - This is a link to the leetcode/codesignal/hackerrank question.
    rating - An easy, medium, or hard rating of the problem
    solution_link - This is a link to the solution sheet on github. The solution sheet includes a c++, python, javascript, and java solution as well as the algorithm overview and summary
    video_link - This is a link to a video workshop that explains the algorithm approach and a demonstration of how it works
    difficulty: "Easy",
    discord_server_link - This is a link to the discord server
*/