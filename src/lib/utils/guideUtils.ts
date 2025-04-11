import { RepairStep, RepairCategory } from '../types/guide';

export const REPAIR_CATEGORIES: RepairCategory[] = [
  {
    id: 'battery',
    name: 'Battery',
    slug: 'battery-replacement',
    description: 'Battery replacement guides for various mobile phone brands',
    commonSteps: [
      {
        title: 'Power off the device',
        description: 'Turn off the phone completely before beginning the repair.',
        warningNote: 'Never attempt to remove the battery while the device is powered on.'
      },
      {
        title: 'Remove back panel',
        description: 'Remove the back panel or any screws securing it.',
        tools: ['Screwdriver', 'Pry tool']
      },
      {
        title: 'Disconnect battery',
        description: 'Carefully disconnect the old battery from the motherboard.',
        warningNote: 'Be gentle with the connectors to avoid damage.'
      },
      {
        title: 'Install new battery',
        description: 'Place the new battery and connect it to the motherboard.',
        tools: ['Tweezers']
      },
      {
        title: 'Reassemble and test',
        description: 'Replace the back panel and test the device.',
        tools: ['Screwdriver']
      }
    ]
  },
  {
    id: 'screen',
    name: 'Screen',
    slug: 'screen-replacement',
    description: 'Screen replacement guides for various mobile phone brands',
    commonSteps: [
      {
        title: 'Prepare the device',
        description: 'Power off the phone and remove the SIM tray.',
        tools: ['SIM ejector tool']
      },
      {
        title: 'Apply heat',
        description: 'Use a heat gun to loosen the adhesive holding the screen.',
        tools: ['Heat gun'],
        warningNote: 'Maintain proper distance and temperature to avoid damage.'
      },
      {
        title: 'Remove screen',
        description: 'Carefully pry out the old screen using appropriate tools.',
        tools: ['Suction cup', 'Pry tool', 'Opening picks']
      },
      {
        title: 'Disconnect display',
        description: 'Disconnect the display and other cables from the motherboard.',
        tools: ['Tweezers', 'Spudger']
      },
      {
        title: 'Install new screen',
        description: 'Connect the new screen and secure it with adhesive.',
        tools: ['Adhesive strips', 'Roller']
      }
    ]
  },
  {
    id: 'charging-port',
    name: 'Charging Port',
    slug: 'charging-port-repair',
    description: 'Charging port repair and replacement guides',
    commonSteps: [
      {
        title: 'Disassemble device',
        description: 'Open the device and locate the charging port.',
        tools: ['Screwdriver set', 'Pry tool']
      },
      {
        title: 'Remove port',
        description: 'Desolder or disconnect the old charging port.',
        tools: ['Soldering iron', 'Desoldering pump'],
        warningNote: 'Use appropriate temperature for soldering.'
      },
      {
        title: 'Install new port',
        description: 'Carefully solder or connect the new charging port.',
        tools: ['Soldering iron', 'Solder wire']
      },
      {
        title: 'Test and reassemble',
        description: 'Test the charging function before complete reassembly.',
        tools: ['Charging cable', 'Screwdriver']
      }
    ]
  }
];

export function getCommonSteps(partId: string): RepairStep[] {
  const category = REPAIR_CATEGORIES.find(cat => cat.id === partId.toLowerCase());
  return category?.commonSteps || [];
}

export function generateGuideId(brand: string, part: string): string {
  return `${brand.toLowerCase()}-${part.toLowerCase()}-repair-guide`;
}