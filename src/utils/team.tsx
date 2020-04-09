type TeamMember = {
    name: string
    expertise: string[]
    linkedinUrl: string
    imagePath: string
}

const team: TeamMember[] = [
    {
        name: 'Tiago Sampaio',
        expertise: [
            'Vaccine Researcher',
            'AI Developer',
            'Software Engineer @ Amazon',
        ],
        imagePath:
            'https://media-exp1.licdn.com/dms/image/C5603AQH0_JLa1mWWDQ/profile-displayphoto-shrink_200_200/0?e=1591228800&v=beta&t=lyjMzLq4-DuXgo_UYsDEZ2bWxiCKf6exk6z0JXKPK3s',
        linkedinUrl: 'https://www.linkedin.com/in/trsampaio/',
    },
    {
        name: 'Jasmin Karatas',
        expertise: ['Gamification', 'UX Innovations Manager @ Accenture'],
        imagePath:
            'https://media-exp1.licdn.com/dms/image/C4D03AQHz_x6C0nmrMQ/profile-displayphoto-shrink_200_200/0?e=1591228800&v=beta&t=yU183PIGg7tWHve1GrfqeW54jnG4v32RkO4PcbxfgxM',
        linkedinUrl: 'https://www.linkedin.com/in/jasmin-karatas-682a478a/',
    },
    {
        name: 'Ayana Martins',
        expertise: ['Research', 'Data Science', 'PhD in Computational Biology'],
        imagePath:
            'https://media-exp1.licdn.com/dms/image/C4D03AQGTFQVRgNhO8Q/profile-displayphoto-shrink_200_200/0?e=1591228800&v=beta&t=OGT093xIqv5ATc0deriFx-edD-eBaNE2kwUcJkQ-TcE',
        linkedinUrl: 'https://www.linkedin.com/in/ayana-martins/',
    },
    {
        name: 'Jannis Born',
        expertise: [
            'PhD in Computational Systems',
            'Biology',
            'Deep Learning for Drug Discovery @ IBM',
        ],
        imagePath:
            'https://media-exp1.licdn.com/dms/image/C4D03AQF8CK9CgPueVA/profile-displayphoto-shrink_200_200/0?e=1591228800&v=beta&t=5W3poXWXkwawfDyroWLFeqKsGy6NQjSU0f2ecYMyXDI',
        linkedinUrl: 'https://www.linkedin.com/in/jannis-born-319054121/',
    },

    {
        name: 'Milda Dapkeviciute',
        expertise: ['Strategic Partnerships', 'COO @ ParisRio.fi'],
        imagePath:
            'https://media-exp1.licdn.com/dms/image/C5603AQH_vOQK7xsjUA/profile-displayphoto-shrink_200_200/0?e=1591228800&v=beta&t=gh0JgKPbsl70el8v3lCz2PDKHSaPe4V92w6XR4WS9M8',
        linkedinUrl:
            'https://www.linkedin.com/in/milda-dapkevi%C4%8Di%C5%ABt%C4%97-27ba50aa/',
    },
    {
        name: 'Arnold Mauragas',
        expertise: [
            'Business Development',
            'UX Design',
            'Co-Founder @ DesignDen',
        ],
        imagePath:
            'https://media-exp1.licdn.com/dms/image/C4D03AQEu2JMB5zgKhA/profile-displayphoto-shrink_200_200/0?e=1591228800&v=beta&t=BuR3-8PR5cRxpTPeMH8wSzE3V2vdOMXt9JKLTEWfILI',
        linkedinUrl: 'https://www.linkedin.com/in/arnoldasmauragas/',
    },
    {
        name: 'Stian Weiseth',
        expertise: ['AI Developer', 'Masters in Biotechnology'],
        imagePath:
            'https://media-exp1.licdn.com/dms/image/C4D03AQFtPkkeurvylw/profile-displayphoto-shrink_200_200/0?e=1591228800&v=beta&t=U8Eo2wrXloD_5r1p0NXDIsH_ZvBdyoL_wrdGGRjbC-0',
        linkedinUrl: 'https://www.linkedin.com/in/stianaweiseth/',
    },
    {
        name: 'Mathis Duehrsen',
        expertise: ['Psychology & Game Behaviour', 'University of Maastricht'],
        imagePath:
            'https://media-exp1.licdn.com/dms/image/C5603AQH-0hqIaxmlxg/profile-displayphoto-shrink_200_200/0?e=1591228800&v=beta&t=8IoZvTrG0Schm4_sEEaAOEyyPkvpoEu5FMyfItp7R7I',
        linkedinUrl: 'https://www.linkedin.com/in/mathis-duehrsen-265b24101/',
    },
    {
        name: 'Teppo Hudsson',
        expertise: ['Service Architect', ' UX', 'Lead Architect @ Elisa Plc'],
        imagePath:
            'https://media-exp1.licdn.com/dms/image/C5603AQEqlS-P_edOBw/profile-displayphoto-shrink_200_200/0?e=1591228800&v=beta&t=osb7i8Oq60saPVgyfvuUm5YZrfk6FkL1t7g5E-wCxUc',
        linkedinUrl: 'https://www.linkedin.com/in/hudsson/',
    },
]

export default team
