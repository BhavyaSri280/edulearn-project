import { Course, Assignment, Submission, Enrollment, User } from '../types';

export const mockUsers: User[] = [
  {
    id: 'edu-1',
    name: 'Dr. Sarah Johnson',
    email: 'sarah.johnson@edu.com',
    role: 'educator',
    avatar: 'https://images.unsplash.com/photo-1758685848177-93817e9ad5a2?w=400'
  },
  {
    id: 'stu-1',
    name: 'Alex Morgan',
    email: 'alex.morgan@student.com',
    role: 'student',
    avatar: 'https://i.pravatar.cc/150?img=33'
  },
  {
    id: 'stu-2',
    name: 'Emma Wilson',
    email: 'emma.wilson@student.com',
    role: 'student',
    avatar: 'https://i.pravatar.cc/150?img=47'
  },
  {
    id: 'stu-3',
    name: 'James Chen',
    email: 'james.chen@student.com',
    role: 'student',
    avatar: 'https://i.pravatar.cc/150?img=12'
  }
];

export const mockCourses: Course[] = [
  {
    id: 'course-1',
    title: 'Web Development Fundamentals',
    description: 'Learn the basics of HTML, CSS, and JavaScript to build modern websites. This comprehensive course covers everything from basic syntax to advanced concepts.',
    instructor: 'Dr. Sarah Johnson',
    instructorId: 'edu-1',
    thumbnail: 'https://images.unsplash.com/photo-1675495277087-10598bf7bcd1?w=800',
    category: 'Programming',
    duration: '8 weeks',
    level: 'Beginner',
    enrolledStudents: 245,
    createdAt: '2026-01-15',
    lessons: [
      {
        id: 'lesson-1-1',
        courseId: 'course-1',
        title: 'Introduction to HTML',
        description: 'Learn the structure of web pages using HTML',
        content: `# Introduction to HTML

HTML (HyperText Markup Language) is the standard markup language for creating web pages. It describes the structure of a web page semantically.

## Basic HTML Structure

\`\`\`html
<!DOCTYPE html>
<html>
  <head>
    <title>My First Page</title>
  </head>
  <body>
    <h1>Welcome to Web Development</h1>
    <p>This is a paragraph.</p>
  </body>
</html>
\`\`\`

## Common HTML Elements

- **Headings**: h1 through h6
- **Paragraphs**: p
- **Links**: a
- **Images**: img
- **Lists**: ul, ol, li
- **Divisions**: div, span`,
        type: 'reading',
        duration: '45 min',
        order: 1
      },
      {
        id: 'lesson-1-2',
        courseId: 'course-1',
        title: 'CSS Basics',
        description: 'Style your web pages with CSS',
        content: `# CSS Basics

CSS (Cascading Style Sheets) is used to style and layout web pages.

## CSS Syntax

\`\`\`css
selector {
  property: value;
}
\`\`\`

## Common CSS Properties

- **Color**: color, background-color
- **Typography**: font-family, font-size, font-weight
- **Layout**: display, position, margin, padding
- **Box Model**: width, height, border

## Example

\`\`\`css
h1 {
  color: blue;
  font-size: 32px;
  text-align: center;
}
\`\`\``,
        type: 'reading',
        duration: '50 min',
        order: 2
      },
      {
        id: 'lesson-1-3',
        courseId: 'course-1',
        title: 'JavaScript Fundamentals',
        description: 'Add interactivity to your websites',
        content: `# JavaScript Fundamentals

JavaScript is a programming language that enables interactive web pages.

## Variables

\`\`\`javascript
let name = "John";
const age = 25;
var city = "New York";
\`\`\`

## Functions

\`\`\`javascript
function greet(name) {
  return "Hello, " + name + "!";
}

console.log(greet("World"));
\`\`\`

## DOM Manipulation

\`\`\`javascript
document.getElementById("myButton").addEventListener("click", function() {
  alert("Button clicked!");
});
\`\`\``,
        type: 'reading',
        duration: '60 min',
        order: 3
      }
    ]
  },
  {
    id: 'course-2',
    title: 'Digital Marketing Strategy',
    description: 'Master the art of digital marketing with proven strategies for social media, SEO, content marketing, and analytics.',
    instructor: 'Dr. Sarah Johnson',
    instructorId: 'edu-1',
    thumbnail: 'https://images.unsplash.com/photo-1758691736545-5c33b6255dca?w=800',
    category: 'Marketing',
    duration: '6 weeks',
    level: 'Intermediate',
    enrolledStudents: 189,
    createdAt: '2026-01-20',
    lessons: [
      {
        id: 'lesson-2-1',
        courseId: 'course-2',
        title: 'Introduction to Digital Marketing',
        description: 'Overview of digital marketing channels and strategies',
        content: 'Digital marketing encompasses all marketing efforts that use electronic devices or the internet...',
        type: 'video',
        duration: '35 min',
        order: 1,
        videoUrl: 'https://example.com/video1'
      },
      {
        id: 'lesson-2-2',
        courseId: 'course-2',
        title: 'SEO Fundamentals',
        description: 'Learn how to optimize your content for search engines',
        content: 'SEO (Search Engine Optimization) is the practice of increasing both the quality and quantity of website traffic...',
        type: 'reading',
        duration: '40 min',
        order: 2
      }
    ]
  },
  {
    id: 'course-3',
    title: 'Data Science with Python',
    description: 'Learn data analysis, visualization, and machine learning using Python, Pandas, and Scikit-learn.',
    instructor: 'Dr. Sarah Johnson',
    instructorId: 'edu-1',
    thumbnail: 'https://images.unsplash.com/photo-1666875753105-c63a6f3bdc86?w=800',
    category: 'Data Science',
    duration: '10 weeks',
    level: 'Advanced',
    enrolledStudents: 156,
    createdAt: '2026-02-01',
    lessons: [
      {
        id: 'lesson-3-1',
        courseId: 'course-3',
        title: 'Python for Data Science',
        description: 'Introduction to Python libraries for data science',
        content: 'Python has become the lingua franca of data science...',
        type: 'video',
        duration: '55 min',
        order: 1,
        videoUrl: 'https://example.com/video2'
      }
    ]
  },
  {
    id: 'course-4',
    title: 'Graphic Design Principles',
    description: 'Explore the fundamentals of graphic design including color theory, typography, and composition.',
    instructor: 'Dr. Sarah Johnson',
    instructorId: 'edu-1',
    thumbnail: 'https://images.unsplash.com/photo-1689267166689-795f4f536819?w=800',
    category: 'Design',
    duration: '5 weeks',
    level: 'Beginner',
    enrolledStudents: 312,
    createdAt: '2026-02-05',
    lessons: [
      {
        id: 'lesson-4-1',
        courseId: 'course-4',
        title: 'Color Theory Basics',
        description: 'Understanding color relationships and psychology',
        content: 'Color theory is a practical combination of art and science...',
        type: 'reading',
        duration: '30 min',
        order: 1
      }
    ]
  },
  {
    id: 'course-5',
    title: 'React.js Advanced',
    description: 'Master advanced React concepts including hooks, context API, performance optimization, and state management patterns.',
    instructor: 'Dr. Sarah Johnson',
    instructorId: 'edu-1',
    thumbnail: 'data:image/jpeg;base64,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',
    category: 'Programming',
    duration: '7 weeks',
    level: 'Advanced',
    enrolledStudents: 198,
    createdAt: '2026-02-08',
    lessons: [
      {
        id: 'lesson-5-1',
        courseId: 'course-5',
        title: 'React Hooks Deep Dive',
        description: 'Master useState, useEffect, and custom hooks',
        content: 'React Hooks allow you to use state and other React features without writing a class...',
        type: 'video',
        duration: '50 min',
        order: 1,
        videoUrl: 'https://example.com/video3'
      }
    ]
  },
  {
    id: 'course-6',
    title: 'Full-Stack Web Development',
    description: 'Build complete web applications from frontend to backend using modern technologies and best practices.',
    instructor: 'Dr. Sarah Johnson',
    instructorId: 'edu-1',
    thumbnail: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800',
    category: 'Programming',
    duration: '12 weeks',
    level: 'Advanced',
    enrolledStudents: 267,
    createdAt: '2026-02-10',
    lessons: [
      {
        id: 'lesson-6-1',
        courseId: 'course-6',
        title: 'Frontend Architecture',
        description: 'Structuring scalable React applications',
        content: 'Learn best practices for organizing your React project structure...',
        type: 'reading',
        duration: '45 min',
        order: 1
      }
    ]
  },
  {
    id: 'course-7',
    title: 'Content Marketing Mastery',
    description: 'Create compelling content that engages, converts, and builds lasting customer relationships across multiple channels.',
    instructor: 'Dr. Sarah Johnson',
    instructorId: 'edu-1',
    thumbnail: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
    category: 'Marketing',
    duration: '8 weeks',
    level: 'Intermediate',
    enrolledStudents: 224,
    createdAt: '2026-02-12',
    lessons: [
      {
        id: 'lesson-7-1',
        courseId: 'course-7',
        title: 'Content Strategy Framework',
        description: 'Building a content marketing roadmap',
        content: 'A successful content strategy starts with understanding your audience...',
        type: 'video',
        duration: '40 min',
        order: 1,
        videoUrl: 'https://example.com/video4'
      }
    ]
  },
  {
    id: 'course-8',
    title: 'Social Media Analytics',
    description: 'Master data analysis and metrics to optimize your social media campaigns and measure ROI effectively.',
    instructor: 'Dr. Sarah Johnson',
    instructorId: 'edu-1',
    thumbnail: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800',
    category: 'Marketing',
    duration: '6 weeks',
    level: 'Intermediate',
    enrolledStudents: 201,
    createdAt: '2026-02-14',
    lessons: [
      {
        id: 'lesson-8-1',
        courseId: 'course-8',
        title: 'Social Media Metrics Explained',
        description: 'Understanding key performance indicators',
        content: 'Learn about engagement rates, reach, impressions, and conversion metrics...',
        type: 'reading',
        duration: '35 min',
        order: 1
      }
    ]
  },
  {
    id: 'course-9',
    title: 'Machine Learning Essentials',
    description: 'Learn fundamental machine learning algorithms, model training, evaluation, and real-world applications using Python.',
    instructor: 'Dr. Sarah Johnson',
    instructorId: 'edu-1',
    thumbnail: 'data:image/jpeg;base64,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',
    category: 'Data Science',
    duration: '9 weeks',
    level: 'Advanced',
    enrolledStudents: 178,
    createdAt: '2026-02-16',
    lessons: [
      {
        id: 'lesson-9-1',
        courseId: 'course-9',
        title: 'Supervised Learning Basics',
        description: 'Classification and regression models',
        content: 'Supervised learning involves training algorithms on labeled data...',
        type: 'video',
        duration: '55 min',
        order: 1,
        videoUrl: 'https://example.com/video5'
      }
    ]
  },
  {
    id: 'course-10',
    title: 'Big Data Analytics',
    description: 'Process and analyze large-scale datasets using distributed computing, Hadoop, Spark, and modern data tools.',
    instructor: 'Dr. Sarah Johnson',
    instructorId: 'edu-1',
    thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800',
    category: 'Data Science',
    duration: '10 weeks',
    level: 'Advanced',
    enrolledStudents: 145,
    createdAt: '2026-02-18',
    lessons: [
      {
        id: 'lesson-10-1',
        courseId: 'course-10',
        title: 'Introduction to Big Data',
        description: 'Working with massive datasets',
        content: 'Big Data refers to large, complex datasets that require specialized tools...',
        type: 'reading',
        duration: '50 min',
        order: 1
      }
    ]
  },
  {
    id: 'course-11',
    title: 'UI/UX Design Fundamentals',
    description: 'Learn user interface and user experience design principles to create intuitive and beautiful digital products.',
    instructor: 'Dr. Sarah Johnson',
    instructorId: 'edu-1',
    thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2rqz1-2Y1DdrSQ0LxahfSeLrT_gNMXkRoXw&s',
    category: 'Design',
    duration: '8 weeks',
    level: 'Beginner',
    enrolledStudents: 289,
    createdAt: '2026-02-19',
    lessons: [
      {
        id: 'lesson-11-1',
        courseId: 'course-11',
        title: 'User Research Methods',
        description: 'Understanding user needs and behaviors',
        content: 'User research is the foundation of good design...',
        type: 'video',
        duration: '45 min',
        order: 1,
        videoUrl: 'https://example.com/video6'
      }
    ]
  },
  {
    id: 'course-12',
    title: 'Adobe Creative Suite Masterclass',
    description: 'Master Photoshop, Illustrator, and InDesign to create professional-quality designs and creative projects.',
    instructor: 'Dr. Sarah Johnson',
    instructorId: 'edu-1',
    thumbnail: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800',
    category: 'Design',
    duration: '10 weeks',
    level: 'Intermediate',
    enrolledStudents: 276,
    createdAt: '2026-02-20',
    lessons: [
      {
        id: 'lesson-12-1',
        courseId: 'course-12',
        title: 'Photoshop Essentials',
        description: 'Mastering photo editing and manipulation',
        content: 'Adobe Photoshop is the industry standard for image editing...',
        type: 'video',
        duration: '60 min',
        order: 1,
        videoUrl: 'https://example.com/video7'
      }
    ]
  }
];

export const mockAssignments: Assignment[] = [
  {
    id: 'assign-1',
    courseId: 'course-1',
    title: 'Build a Personal Portfolio Page',
    description: 'Create a simple portfolio page using HTML and CSS. Include a header, about section, projects section, and contact information.',
    dueDate: '2026-03-01',
    totalPoints: 100,
    createdAt: '2026-02-10'
  },
  {
    id: 'assign-2',
    courseId: 'course-1',
    title: 'Interactive Calculator',
    description: 'Build a calculator using JavaScript that can perform basic operations (add, subtract, multiply, divide).',
    dueDate: '2026-03-15',
    totalPoints: 100,
    createdAt: '2026-02-15'
  },
  {
    id: 'assign-3',
    courseId: 'course-2',
    title: 'SEO Audit Report',
    description: 'Perform an SEO audit on a website of your choice and create a comprehensive report with recommendations.',
    dueDate: '2026-02-28',
    totalPoints: 100,
    createdAt: '2026-02-12'
  }
];

export const mockSubmissions: Submission[] = [
  {
    id: 'sub-1',
    assignmentId: 'assign-1',
    studentId: 'stu-1',
    studentName: 'Alex Morgan',
    content: 'I have created a portfolio website with all the required sections. The design is responsive and follows modern web standards.',
    fileUrl: 'portfolio.zip',
    submittedAt: '2026-02-25T14:30:00',
    grade: 95,
    feedback: 'Excellent work! Your design is clean and professional. The responsive layout works perfectly.',
    status: 'graded'
  },
  {
    id: 'sub-2',
    assignmentId: 'assign-1',
    studentId: 'stu-2',
    studentName: 'Emma Wilson',
    content: 'Please find attached my portfolio page. I included animations and a contact form.',
    fileUrl: 'emma-portfolio.zip',
    submittedAt: '2026-02-26T10:15:00',
    status: 'submitted'
  },
  {
    id: 'sub-3',
    assignmentId: 'assign-1',
    studentId: 'stu-3',
    studentName: 'James Chen',
    content: 'My portfolio includes projects from previous courses and links to my GitHub.',
    fileUrl: 'james-portfolio.zip',
    submittedAt: '2026-03-01T23:45:00',
    grade: 85,
    feedback: 'Good effort, but submitted after the deadline. Make sure to plan your time better.',
    status: 'graded'
  },
  {
    id: 'sub-4',
    assignmentId: 'assign-3',
    studentId: 'stu-1',
    studentName: 'Alex Morgan',
    content: 'Completed SEO audit for www.example.com with detailed recommendations.',
    submittedAt: '2026-02-27T16:20:00',
    status: 'submitted'
  }
];

// the initial hard‑coded set of enrollments is used only if there is nothing
// saved in localStorage. once the student interacts with the system we persist
// their progress so it survives refresh.
export const mockEnrollments: Enrollment[] = [
  {
    id: 'enroll-1',
    studentId: 'stu-1',
    courseId: 'course-1',
    enrolledAt: '2026-01-20',
    progress: 67,
    completedLessons: ['lesson-1-1', 'lesson-1-2'],
    grade: 95
  },
  {
    id: 'enroll-2',
    studentId: 'stu-1',
    courseId: 'course-2',
    enrolledAt: '2026-01-25',
    progress: 50,
    completedLessons: ['lesson-2-1'],
    grade: 88
  },
  {
    id: 'enroll-3',
    studentId: 'stu-2',
    courseId: 'course-1',
    enrolledAt: '2026-01-22',
    progress: 33,
    completedLessons: ['lesson-1-1'],
  },
  {
    id: 'enroll-4',
    studentId: 'stu-3',
    courseId: 'course-1',
    enrolledAt: '2026-01-23',
    progress: 100,
    completedLessons: ['lesson-1-1', 'lesson-1-2', 'lesson-1-3'],
    grade: 85
  }
];

const ENROLLMENTS_KEY = 'mock_enrollments';

export function loadEnrollments(): Enrollment[] {
  if (typeof localStorage !== 'undefined') {
    const data = localStorage.getItem(ENROLLMENTS_KEY);
    if (data) {
      try {
        return JSON.parse(data) as Enrollment[];
      } catch {
        // corrupt data – fall through to default
      }
    }
  }
  // deep copy so callers don't mutate the exported array by accident
  return JSON.parse(JSON.stringify(mockEnrollments));
}

export function saveEnrollments(enrollments: Enrollment[]) {
  if (typeof localStorage !== 'undefined') {
    localStorage.setItem(ENROLLMENTS_KEY, JSON.stringify(enrollments));
  }
}
