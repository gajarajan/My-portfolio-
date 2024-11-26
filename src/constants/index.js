import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.png";


export const HERO_CONTENT = `
I am Gajarajan Appandarajan, a passionate and results-driven Data Engineer with expertise in building scalable data pipelines, optimizing ETL processes, and creating insightful dashboards. With 2.5+ years of hands-on experience and a master’s degree in Information Systems underway, I specialize in transforming raw data into actionable insights that drive impactful business decisions.

Dive into my portfolio to explore how I leverage technologies like Python, SQL, Power BI, Snowflake, and cloud platforms (AWS, Azure, GCP) to deliver end-to-end data solutions. Let’s connect and collaborate to unlock the power of data for your organization!
`;

export const ABOUT_TEXT = `
Hello! I’m Gajarajan, a Data Engineer and tech enthusiast with a strong academic and professional foundation in data analytics, big data technologies, and machine learning. My journey began with a Bachelor’s in Electronics and Communications Engineering, and I am currently advancing my expertise with a Master’s in Information Systems.

I specialize in crafting efficient data workflows using Python, SQL, Spark, and Snowflake, and building interactive visualizations with Power BI and Tableau. Whether I’m developing predictive models, automating ETL pipelines, or optimizing cloud-based architectures, I enjoy solving complex challenges with cutting-edge solutions.

My certifications in Cisco Networking, Ethical Hacking, and Power BI reflect my dedication to continuous learning and staying at the forefront of technological advancements. In my free time, I explore emerging trends in AI, work on personal projects, and share knowledge with the community. Let’s collaborate to turn data into actionable insights and create value for your business!
`;

export const EXPERIENCES = [
  {
    year: "2023 - 2023",
    role: "Data Engineer Intern",
    company: "Royal Cyber, Naperville, IL",
    description: `
Assisted in implementing data cleansing techniques, utilizing tools like Snowflake and Python to improve the accuracy and reliability of large datasets. This effort led to a 20% reduction in data errors, enhancing the overall data quality.
Collaborated with senior analysts to design and automate data pipelines using Apache Spark and Azure Data Factory. Contributed to streamlining Big Data processing, reducing manual efforts by 30%, and expediting data delivery for quicker decision-making.
Supported the development of predictive models using Python for customer data analysis. Leveraged machine learning algorithms and Big Data technologies like Spark and Snowflake to improve sales and demand forecasting accuracy by 15%.
Played a key role in creating interactive Power BI dashboards that segmented customers based on transaction patterns, locations, and other key performance indicators (KPIs). These dashboards provided valuable insights, contributing to a 20% increase in Q1 revenue.
Assisted in generating detailed cost analysis reports, working closely with the finance team. Utilized Spark, Azure Data Factory, and Snowflake to provide critical insights that informed pricing decisions, resulting in a 5% improvement in profit margins.

    `,
    technologies: ["Python", "Snowflake", "Apache Spark", "Azure Data Factory", "Power BI"],
  },
  {
    year: "2020 - 2022",
    role: "Data Analyst Associate",
    company: "Power Links, Chennai, India",
    description: `
Collaborated with team members to understand client requirements and the design of dashboards in Tableau, ensuring the layout, look, and feel met client specifications.
Designed and developed various dashboards and reports using Tableau Visualizations such as bar graphs, line diagrams, funnel charts, scatter plots, pie charts, heat maps, and tree maps. Utilized data storytelling to effectively present insights and track key performance indicators (KPIs).
Conducted exploratory data analysis (EDA) in Python, resulting in a 25% improvement in data accuracy and quality by addressing null values, irrelevant data, duplicates, and typos. Applied statistical analysis, data cleaning, and data validation techniques.
Leveraged Python for API integration to facilitate seamless data extraction and deployment on the Google Cloud Platform. Built and managed an ETL pipeline using Airflow, which automated data processing and reduced manual effort by 40%. Employed data integration and transformation skills to prepare data for detailed analysis and visualization in Tableau.
Developed and optimized complex SQL queries, including joins, sub-queries, and stored procedures. Gained expertise in query optimization and performance tuning in MySQL, achieving a 40% improvement in query performance and reducing production downtime by 25%.
Created detailed sales reports to track performance metrics and trends. Data analysis and reporting tools provided actionable insights that informed sales strategies and decision-making.
Engaged with stakeholders to gather requirements and feedback, ensuring that dashboards and reports met business needs and provided valuable insights. Used data visualization best practices to enhance stakeholder presentations and support data-driven decisions.
Applied advanced technical skills in Python, SQL, Tableau, and Google Cloud Platform to deliver high-quality data solutions. Demonstrated strong problem-solving abilities by addressing data discrepancies and performance issues, contributing to process improvements and operational efficiency.
Utilized data visualization techniques to translate complex data sets into meaningful visual representations, facilitating better understanding and strategic decision-making for stakeholders.

    `,
    technologies: ["Python", "SQL", "Tableau", "Airflow", "Google Cloud Platform"],
  },
];

export const PROJECTS = [
  {
    title: "Superstore Sales Analysis",
    image: project1,
    description: [
      "Led a comprehensive Superstore Sales SQL project (2014–2017) focusing on customer segmentation and operational enhancements, resulting in optimized decision-making.",
      "Automated ETL pipeline to extract, transform, and load data from multiple sources. Executed indexing and query restructuring, optimizing database performance by 80% and enabling swift data retrieval.",
      "Designed and implemented an interactive Power BI dashboard to identify sales trends, customer segments, and operational bottlenecks, providing actionable insights for strategic planning.",
      "Applied advanced SQL techniques, including window functions and subqueries, to derive valuable business metrics and KPIs.",
      "Collaborated with cross-functional teams to integrate analytics into business processes, improving decision-making across sales, marketing, and operations.",
    ],
    technologies: ["SQL", "Power BI", "ETL", "Data Visualization", "Database Optimization"],
  },
  {
    title: "Patient Readmission Risk Prediction",
    image: project2,
    description: [
      "Collected and preprocessed a comprehensive dataset from electronic health records (EHRs), using Python libraries like Pandas and NumPy.",
      "Engineered relevant features such as comorbidity scores, medication adherence metrics, and previous hospitalization history, applying feature scaling and encoding techniques for model readiness.",
      "Performed exploratory data analysis (EDA) using Matplotlib and Seaborn to identify key trends and correlations, informing model design.",
      "Developed and compared machine learning models, achieving an AUC-ROC score of 0.85.",
      "Implemented a deep learning model using TensorFlow and Keras, achieving an AUC-ROC score of 0.88 through hyperparameter tuning and feature optimization.",
      "Built interactive dashboards in Power BI to visualize prediction results, aiding healthcare professionals in reducing readmission rates and improving care outcomes.",
    ],
    technologies: ["Python", "TensorFlow", "Keras", "scikit-learn", "Pandas", "Power BI"],
  },
  {
    title: "Gajarajan Appandarajan's Personal Portfolio",
    image: project3, // Use the correct image path
    description: [
      "This is my personal portfolio website created using **React**, **Vite**, and **Tailwind CSS** to showcase my skills, experience, and projects.",
      "The portfolio highlights my background in data engineering, cloud platforms, and tools such as **AWS**, **GCP**, **Azure**, **Databricks**, and **Power BI**.",
      "Incorporates smooth animations using **Framer Motion** for a dynamic user experience, while providing intuitive navigation through sections like **About Me**, **Experience**, **Technologies**, and **Contact**.",
      "Features an interactive **Experience Timeline** to highlight my professional journey and roles in different organizations.",
      "The **Technologies** section illustrates my proficiency with key tools in the data engineering space, such as **Python**, **SQL**, **Apache Spark**, and more.",
      "The **Contact** section includes clickable social media icons (LinkedIn, GitHub, Gmail) for potential employers or collaborators to reach out.",
    ],
    technologies: ["React", "Vite", "Tailwind CSS", "Framer Motion", "React Icons"],
  },
];

export const educationData = [
  {
    degree: "Master of Science in Information Systems",
    institution: "Cleveland State University",
    year: "2022 - 2024",
    description:
      "Specializing in Big Data and Cloud Computing with hands-on experience in building data solutions, optimizing pipelines, and data visualization.",
  },
  {
    degree: "Bachelor of Engineering in Electronics and Communication",
    institution: "Anna University, Chennai",
    year: "2017 - 2021",
    description:
      "Developed a solid foundation in programming and problem-solving, contributing to multiple academic projects and learning real-world applications.",
  },
];





export const CONTACT = {
  address: "Naperville, IL, USA",
  phoneNo: "+1 (609) 403-0959",
  email: "gajarajan28@gmail.com",
};
