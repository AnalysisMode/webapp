type AdvisorsMember = {
    name: string
    expertise: string[]
    linkedinUrl: string
    imagePath: string
}

const advisors: AdvisorsMember[] = [
    {
        name: 'Charles-Louis Machuron',
        expertise: ['Founder', 'Silicon Luxembourg'],
        imagePath:
            'https://media-exp1.licdn.com/dms/image/C4D03AQH3WUlFvHnZXg/profile-displayphoto-shrink_200_200/0?e=1591228800&v=beta&t=R_qfneRNGag8qCl9wP28Fxch9aWtCfku99LQsp7oek0',
        linkedinUrl: 'https://www.linkedin.com/in/charleslouismachuron/',
    },
    {
        name: 'Tessy (HRH Princess De Luxembourg) Antony - de Nassau',
        expertise: ['Doctorate in Integrative Medicine and PHD candidate', 'Quantum University'],
        imagePath:
            'https://media-exp1.licdn.com/dms/image/C4D03AQFd0QRJUk9vng/profile-displayphoto-shrink_200_200/0?e=1591228800&v=beta&t=8nLtMbREOsGMhwiBoS9qyZmIOiCTPeh84P1kpkAIGIg',
        linkedinUrl: 'https://www.linkedin.com/in/tessyd/',
    },
    {
        name: 'Peter Vesterbacka',
        expertise: ['Angry Birds creator', 'Founder of Slush', 'Co-founder FinestNinja'],
        imagePath:
            'https://media-exp1.licdn.com/dms/image/C5603AQGQ1Gtwxt7dTg/profile-displayphoto-shrink_200_200/0?e=1591228800&v=beta&t=i-Wxif5ZzWXlQCX9o43D03l50nz-SJnALp7YD2gOUM0',
        linkedinUrl: 'https://www.linkedin.com/in/petervesterbacka/',
    },
    {
        name: 'Alessia Officio',
        expertise: ['Mentor & Strategic Consulting', 'Lead Mentor', 'TechStars'],
        imagePath:
            'https://media-exp1.licdn.com/dms/image/C4E03AQEwqAUPpJ9nCQ/profile-displayphoto-shrink_200_200/0?e=1591228800&v=beta&t=r2WvpuR6gAybhgAcPxc94YoQUrVKv0cvobyoLaf0e08',
        linkedinUrl: 'https://www.linkedin.com/in/alessia-officio-3134499/',
    },
    {
        name: 'Dmitri Sarle',
        expertise: [
            'Founder, ArcticStartup',
            'Startup Europe Advisory Board',
            'European Commission',
        ],
        imagePath:
            'https://media-exp1.licdn.com/dms/image/C5603AQG3dYToQFgR7A/profile-displayphoto-shrink_200_200/0?e=1591228800&v=beta&t=eb6VdHYOipBcj7TEBRUW3GowMbnc9DndxLVkuOexgLY',
        linkedinUrl: 'https://www.linkedin.com/in/sarle/',
    },
    {
        name: 'Eleonora Sakalauskaite',
        expertise: ['Manager of Strategic initiatives', 'Swedbank'],
        imagePath:
            'https://media-exp1.licdn.com/dms/image/C4E03AQF0ytTnVcq1XA/profile-displayphoto-shrink_200_200/0?e=1591228800&v=beta&t=qYGZD9ne6OX6fF-S0EX6Nfb5PzoXjT--Hdvz7JnJhUo',
        linkedinUrl: 'https://www.linkedin.com/in/eleonora-sakalauskait%C4%97-9553193/',
    },
    {
        name: 'Paulius Yamin',
        expertise: ['Managing Partner, PhD', 'Behavioural Lab LT'],
        imagePath:
            'https://media-exp1.licdn.com/dms/image/C5603AQH6dJjDu6PY8Q/profile-displayphoto-shrink_200_200/0?e=1591228800&v=beta&t=r3iuT0lJO5_IkanQTs3dd4zuv1Tdq1W8bBmfUx2ihG4',
        linkedinUrl: 'https://www.linkedin.com/in/pauliusyamin/',
    },
    {
        name: 'Greg Anderson',
        expertise: ['Marketing professional', 'Ex-journalist', 'Venture Capital Comms'],
        imagePath:
            'https://media-exp1.licdn.com/dms/image/C4E03AQE1ZX-LMydPGg/profile-displayphoto-shrink_200_200/0?e=1591228800&v=beta&t=cVb8gKvAsHq9sz3O3bEEQP3Hd_NptBlVhMlVGnp6lNc',
        linkedinUrl: 'https://www.linkedin.com/in/greganderson87',
    },
    {
        name: 'Eric Coles',
        expertise: ['G4A Digital Health Partnerships Associate', 'Bayer G4A Health'],
        imagePath:
            'https://media-exp1.licdn.com/dms/image/C4D03AQEJR3fO6ppT_Q/profile-displayphoto-shrink_200_200/0?e=1591228800&v=beta&t=vvUGy6lXtmBA5qeYvdvQnFKVkm7nDRJ91__w9-KBtHU',
        linkedinUrl: 'https://www.linkedin.com/in/eric-coles-0b185114a/',
    },
    {
        name: 'Kęstutis Gardžiulis',
        expertise: ['Founder and Chief Innovation Officer', 'ETRONIKA'],
        imagePath:
            'https://media-exp1.licdn.com/dms/image/C5603AQHGxKwyvM3mnw/profile-displayphoto-shrink_200_200/0?e=1591228800&v=beta&t=opEibYSEtf7MyhDXM1oOgiUItSbwhRfY-fsohh79HyM',
        linkedinUrl: 'https://www.linkedin.com/in/gardziulis/',
    },
    {
        name: 'Jovita Tamosaityte Sriubiske',
        expertise: ['Strategy and Sustainability Specialist', 'Our Global Communities'],
        imagePath:
            'https://media-exp1.licdn.com/dms/image/C4E03AQHydOpZmOdVjA/profile-displayphoto-shrink_200_200/0?e=1591228800&v=beta&t=G1fdjmxZdQhaEFsl4rT50yFF8_wkNY0WyKEemelyJ2c',
        linkedinUrl: 'https://www.linkedin.com/in/jovitasriubiske',
    },
    {
        name: 'Vytaute (tutkute) Jonaite',
        expertise: ['Workplace services expert', 'Technopolis Ozas'],
        imagePath:
            'https://media-exp1.licdn.com/dms/image/C5603AQFAkkBDuF0MSQ/profile-displayphoto-shrink_200_200/0?e=1591228800&v=beta&t=1F1bF0CYaC1lqhA9bTfEjxe1WTSwwAHQkJyag3kPeCI',
        linkedinUrl: 'https://www.linkedin.com/in/vytautetutkute/',
    },
    {
        name: 'Zivile Einikyte',
        expertise: ['Startup Program Manager', 'Growth Manager', 'TechBBQ'],
        imagePath:
            'https://media-exp1.licdn.com/dms/image/C5603AQEACF8S_suoaQ/profile-displayphoto-shrink_200_200/0?e=1591228800&v=beta&t=4LGxAz2TPKb4_GlIBMXVWz-iCT0-sworBeoLhf8sZcI',
        linkedinUrl: 'https://www.linkedin.com/in/zivileeinikyte/',
    },
    {
        name: 'Romualdas Įsoda',
        expertise: ['Mentor', 'LT Big Brother'],
        imagePath:
            'https://media-exp1.licdn.com/dms/image/C5603AQFZl9jzL3-ZUg/profile-displayphoto-shrink_200_200/0?e=1591228800&v=beta&t=RyFZQrjr5YdpctPCCTXkv-9VWPLoOmb3CR0UUgXDvpE',
        linkedinUrl: 'https://www.linkedin.com/in/romualdas-%C4%AFsoda-7b478334/',
    },
    {
        name: 'Greta Petrosiute',
        expertise: ['Mentor', 'LT Big Brother'],
        imagePath:
            'https://media-exp1.licdn.com/dms/image/C5603AQFbNziM_jyaaw/profile-displayphoto-shrink_200_200/0?e=1591228800&v=beta&t=4EIuweWNXo6ikea7279qNtd0lKwcX5az7dSSsfb8YjE',
        linkedinUrl: 'https://www.linkedin.com/in/greta-petrosiute-48b32243/',
    },
    {
        name: 'Azzy (Ąžuolas) Marma',
        expertise: ['Business Development Manager', 'Aimera Engagement Marketing'],
        imagePath:
            'https://media-exp1.licdn.com/dms/image/C4D03AQGZM1rDlTlrjw/profile-displayphoto-shrink_200_200/0?e=1591228800&v=beta&t=EOnr6-QeeHdU7Y0U0rJdKnXsDOMviRTBsBVxPwOyFTc',
        linkedinUrl: 'https://www.linkedin.com/in/azuolasmarma/',
    },
    {
        name: 'Andrius Kukta',
        expertise: [
            'Director Of Business Development',
            'Hertz',
            'dollar',
            'Thrifty Baltic Countries',
        ],
        imagePath:
            'https://media-exp1.licdn.com/dms/image/C4D03AQHrd_BHVkPyUg/profile-displayphoto-shrink_200_200/0?e=1591228800&v=beta&t=N1C5rfQNYG9MP9VGSn3-S-dD6hV9ngSW7liD5q61Vcw',
        linkedinUrl: 'https://www.linkedin.com/in/andrius-kukta-909972104/',
    },
]

export default advisors
