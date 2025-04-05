export interface Guide {
  id: string
  title: string
  description: string
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced'
  estimatedTime: string
  tools: string[]
  steps: {
    number: number
    title: string
    description: string
    image: string
  }[]
}

export const guides: Guide[] = [
  {
    id: '1',
    title: 'How to Replace an iPhone Battery',
    description: 'Step-by-step guide to safely replace the battery in your iPhone.',
    difficulty: 'Intermediate',
    estimatedTime: '30-45 minutes',
    tools: [
      'Pentalobe screwdriver',
      'Phillips screwdriver',
      'Plastic opening tools',
      'Suction cup',
      'Tweezers',
      'Battery adhesive strips',
    ],
    steps: [
      {
        number: 1,
        title: 'Power Off and Remove Screws',
        description: 'Turn off your iPhone and remove the two Pentalobe screws at the bottom of the device.',
        image: '/images/guides/iphone-battery-step1.jpg',
      },
      {
        number: 2,
        title: 'Open the Device',
        description: 'Use a suction cup to lift the screen and carefully open the device using plastic opening tools.',
        image: '/images/guides/iphone-battery-step2.jpg',
      },
      {
        number: 3,
        title: 'Remove Battery Connector',
        description: 'Disconnect the battery connector using a plastic tool and remove the battery adhesive strips.',
        image: '/images/guides/iphone-battery-step3.jpg',
      },
      {
        number: 4,
        title: 'Install New Battery',
        description: 'Place the new battery and connect the battery connector. Secure with new adhesive strips.',
        image: '/images/guides/iphone-battery-step4.jpg',
      },
    ],
  },
  {
    id: '2',
    title: 'Samsung Galaxy Screen Replacement',
    description: 'Complete guide to replacing a broken screen on Samsung Galaxy devices.',
    difficulty: 'Advanced',
    estimatedTime: '1-2 hours',
    tools: [
      'Phillips screwdriver',
      'Plastic opening tools',
      'Heat gun or hairdryer',
      'Suction cup',
      'Tweezers',
      'Adhesive strips',
    ],
    steps: [
      {
        number: 1,
        title: 'Remove Back Cover',
        description: 'Heat the back of the device and carefully remove the back cover using plastic tools.',
        image: '/images/guides/samsung-screen-step1.jpg',
      },
      {
        number: 2,
        title: 'Disconnect Components',
        description: 'Remove the battery and disconnect all necessary components to access the screen assembly.',
        image: '/images/guides/samsung-screen-step2.jpg',
      },
      {
        number: 3,
        title: 'Remove Old Screen',
        description: 'Carefully remove the old screen assembly and clean the frame of any remaining adhesive.',
        image: '/images/guides/samsung-screen-step3.jpg',
      },
      {
        number: 4,
        title: 'Install New Screen',
        description: 'Place the new screen assembly and reconnect all components. Secure with new adhesive.',
        image: '/images/guides/samsung-screen-step4.jpg',
      },
    ],
  },
] 