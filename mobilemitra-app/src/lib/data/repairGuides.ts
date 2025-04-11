export interface RepairStep {
  step: number;
  description: string;
  warning?: string;
  tools?: string[];
}

export interface RepairGuide {
  id: string;
  title: string;
  icon: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  timeRequired: string;
  steps: RepairStep[];
  tools: string[];
  warnings: string[];
}

export const repairGuides: RepairGuide[] = [
  {
    id: 'battery-replacement',
    title: 'Battery Replacement',
    icon: '🔋',
    difficulty: 'Easy',
    timeRequired: '15-30 minutes',
    steps: [
      { step: 1, description: 'Power off the phone', tools: [] },
      { step: 2, description: 'Remove back panel/screws if needed', tools: ['Screwdriver set', 'Pry tool'] },
      { step: 3, description: 'Disconnect old battery', tools: ['Plastic pry tool'], warning: 'Be careful not to puncture or bend the battery' },
      { step: 4, description: 'Insert and connect new battery', tools: [] },
      { step: 5, description: 'Reassemble and test charging', tools: ['Charger'] }
    ],
    tools: ['Screwdriver set', 'Pry tool', 'Plastic pry tool', 'Charger'],
    warnings: ['Never force the battery out', 'Avoid metal tools when working with batteries', 'Properly dispose of old batteries']
  },
  {
    id: 'screen-replacement',
    title: 'Screen Replacement',
    icon: '📱',
    difficulty: 'Medium',
    timeRequired: '30-45 minutes',
    steps: [
      { step: 1, description: 'Power off and remove SIM tray', tools: ['SIM ejector tool'] },
      { step: 2, description: 'Use a heat gun to loosen the screen', tools: ['Heat gun'], warning: 'Keep heat gun moving to avoid damage' },
      { step: 3, description: 'Pry out the old screen carefully', tools: ['Suction cup', 'Plastic pry tool'] },
      { step: 4, description: 'Disconnect old screen flex cables', tools: ['Plastic pry tool'], warning: 'Be gentle with flex cables' },
      { step: 5, description: 'Attach new screen and test display', tools: [] },
      { step: 6, description: 'Seal and secure the new screen', tools: ['Adhesive tape'] }
    ],
    tools: ['SIM ejector tool', 'Heat gun', 'Suction cup', 'Plastic pry tool', 'Adhesive tape'],
    warnings: ['Handle glass with care', 'Do not overheat the screen', 'Test screen before sealing']
  },
  {
    id: 'charging-port-repair',
    title: 'Charging Port Repair',
    icon: '🔌',
    difficulty: 'Hard',
    timeRequired: '45-60 minutes',
    steps: [
      { step: 1, description: 'Power off and disassemble device', tools: ['Screwdriver set'] },
      { step: 2, description: 'Locate and desolder old charging port', tools: ['Soldering iron', 'Desoldering pump'], warning: 'Use proper temperature' },
      { step: 3, description: 'Solder new port carefully', tools: ['Soldering iron', 'Solder'] },
      { step: 4, description: 'Reassemble and test charging', tools: ['Charger'] }
    ],
    tools: ['Screwdriver set', 'Soldering iron', 'Desoldering pump', 'Solder', 'Charger'],
    warnings: ['Use proper soldering temperature', 'Ensure proper alignment', 'Test thoroughly before closing']
  },
  {
    id: 'speaker-repair',
    title: 'Speaker Repair',
    icon: '🔊',
    difficulty: 'Medium',
    timeRequired: '20-30 minutes',
    steps: [
      { step: 1, description: 'Open the device back panel', tools: ['Screwdriver set', 'Pry tool'] },
      { step: 2, description: 'Remove speaker module', tools: ['Screwdriver set'] },
      { step: 3, description: 'Replace with new speaker', tools: [] },
      { step: 4, description: 'Reassemble and test sound', tools: [] }
    ],
    tools: ['Screwdriver set', 'Pry tool'],
    warnings: ['Keep track of all screws', 'Test sound before closing']
  },
  {
    id: 'camera-replacement',
    title: 'Camera Replacement',
    icon: '📷',
    difficulty: 'Medium',
    timeRequired: '25-35 minutes',
    steps: [
      { step: 1, description: 'Disassemble and find the camera module', tools: ['Screwdriver set'] },
      { step: 2, description: 'Disconnect the faulty camera', tools: ['Plastic pry tool'] },
      { step: 3, description: 'Connect new module', tools: [] },
      { step: 4, description: 'Test camera and reassemble', tools: [] }
    ],
    tools: ['Screwdriver set', 'Plastic pry tool'],
    warnings: ['Handle camera lens with care', 'Test all camera functions']
  },
  {
    id: 'motherboard-repair',
    title: 'Motherboard Repair',
    icon: '🔄',
    difficulty: 'Hard',
    timeRequired: '60-90 minutes',
    steps: [
      { step: 1, description: 'Remove back cover and battery', tools: ['Screwdriver set', 'Pry tool'] },
      { step: 2, description: 'Unplug all connectors', tools: ['Plastic pry tool'], warning: 'Label all connections' },
      { step: 3, description: 'Remove screws and take out motherboard', tools: ['Screwdriver set'] },
      { step: 4, description: 'Replace or repair faulty ICs/components', tools: ['Soldering iron', 'Microscope'] },
      { step: 5, description: 'Reassemble and test', tools: [] }
    ],
    tools: ['Screwdriver set', 'Pry tool', 'Plastic pry tool', 'Soldering iron', 'Microscope'],
    warnings: ['Label all connections', 'Use ESD protection', 'Backup data before repair']
  },
  {
    id: 'power-button-repair',
    title: 'Power Button Repair',
    icon: '🔘',
    difficulty: 'Medium',
    timeRequired: '20-30 minutes',
    steps: [
      { step: 1, description: 'Open the back panel', tools: ['Screwdriver set'] },
      { step: 2, description: 'Locate the power button switch', tools: [] },
      { step: 3, description: 'Replace the flex or button', tools: ['Plastic pry tool'] },
      { step: 4, description: 'Test and close the panel', tools: [] }
    ],
    tools: ['Screwdriver set', 'Plastic pry tool'],
    warnings: ['Test button before closing', 'Handle flex cables carefully']
  },
  {
    id: 'volume-button-repair',
    title: 'Volume Button Repair',
    icon: '🔉',
    difficulty: 'Medium',
    timeRequired: '20-30 minutes',
    steps: [
      { step: 1, description: 'Disassemble back housing', tools: ['Screwdriver set'] },
      { step: 2, description: 'Locate volume button mechanism', tools: [] },
      { step: 3, description: 'Replace damaged part/flex cable', tools: ['Plastic pry tool'] },
      { step: 4, description: 'Reassemble and verify volume function', tools: [] }
    ],
    tools: ['Screwdriver set', 'Plastic pry tool'],
    warnings: ['Test all volume functions', 'Handle flex cables with care']
  },
  {
    id: 'back-panel-replacement',
    title: 'Back Panel Replacement',
    icon: '🔙',
    difficulty: 'Easy',
    timeRequired: '15-20 minutes',
    steps: [
      { step: 1, description: 'Heat and remove old back panel', tools: ['Heat gun', 'Suction cup'], warning: 'Keep heat gun moving' },
      { step: 2, description: 'Clean adhesive', tools: ['Cleaning solution', 'Cloth'] },
      { step: 3, description: 'Apply new adhesive or glue', tools: ['Adhesive tape'] },
      { step: 4, description: 'Fix and press-fit the new panel', tools: [] }
    ],
    tools: ['Heat gun', 'Suction cup', 'Cleaning solution', 'Cloth', 'Adhesive tape'],
    warnings: ['Do not overheat', 'Ensure proper alignment', 'Allow adhesive to cure']
  }
]; 