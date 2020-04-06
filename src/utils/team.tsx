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
        expertise: [
            'Research',
            'Data Science',
            'PhD in Genetics and Molecular Biology',
        ],
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
]

export default team
