import {
    PieChartOutlined,
    UserOutlined,
  } from '@ant-design/icons';

const menuList = [
    {
        title: 'Home Page',
        key:'/home',
        icon:<UserOutlined/>,
    },
    {
        title:'Endorsements',
        key:'/endorsements',
        icon:<UserOutlined/>,
        children:[
            {
                title:'Education & Qualifitions',
                key:'/endorsements/education_&_qualifitions',
                icon:<PieChartOutlined/>,
            },
            {
                title:'Technical Skills & Expertise',
                key:'/endorsements/technical_skills_&_expertise',
                icon:<PieChartOutlined/>,
            },
            {
                title:'Core Competencies',
                key:'/endorsements/core_competencies',
                icon:<PieChartOutlined/>,
            },
        ]
    },
    {
        title:'Experience',
        key:'/experience',
        icon:<UserOutlined/>,
        children:[
            {
                title:'Employment History',
                key:'/experience/employment_history',
                icon:<PieChartOutlined/>,
            },
            {
                title:'Project History',
                key:'/experience/project_history',
                icon:<PieChartOutlined/>,
            },
            {
                title:'Community Experiences',
                key:'/experience/community_experiences',
                icon:<PieChartOutlined/>,
            },
        ]
    },
]

export default menuList