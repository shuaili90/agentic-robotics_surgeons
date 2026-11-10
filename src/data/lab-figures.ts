// Image data: file, size, alternative text, long description, and source.
// Files live in public/projects/<project>/.
export interface LabFigure { project: string; file: string; preview?: string; width: number; height: number; title: string; alt: string; description: string; source: string; }

export const labFigures: Record<string, LabFigure> = {
  "surgical-workspace": {
    "project": "agentic-robotics_surgeons",
    "file": "surgical-workspace.webp",
    "width": 807,
    "height": 773,
    "title": "Camera and instrument coordination",
    "alt": "Illustration of a surgeon manipulating laparoscopic instruments while watching an external video monitor.",
    "description": "A medical illustration shows a clinician beside a patient, with instruments and a video camera entering through small abdominal access points. Labels identify the camera, light, surgical instrument, monitor and anatomy. The image illustrates the viewing and handling arrangement; it is not a photograph of this research team and does not measure assistant workload.",
    "source": "UF Robotics Workshop — Shuai Li — ESSIE, slide 2; original image2.jpeg, converted to WebP without cropping."
  },
  "surgery-mechanism": {
    "project": "agentic-robotics_surgeons",
    "file": "surgery-overview.png",
    "width": 1920,
    "height": 718,
    "title": "An external actuator positions an internal camera.",
    "alt": "Manipulator, external actuator, and internal camera concept with exploded actuator and camera assemblies.",
    "description": "The left drawing labels a six-degree-of-freedom manipulator, force–torque sensor, external actuator, abdominal wall, in-vivo camera, and surgical instruments. The right views separate the actuator and camera into components. The actuator includes bearings, a motor, drive board, housing, and magnetic elements. The camera includes a tube, O-ring, bearings, battery pack, lens, and PCB board. The part numbers identify components rather than experimental results.",
    "source": "DreamXLab Surgery AI materials; Redefine Surgery Intelligence with TEAM, slide 3."
  },
  "eye-concept": {
    "project": "agentic-robotics_surgeons",
    "file": "eye-concept.webp",
    "width": 1800,
    "height": 921,
    "title": "Eye Concept for laparoscopic lens care",
    "alt": "Human eye anatomy beside a camera concept with an eyelid wiper, tear-duct-like nozzle, protective cover, soft tubing and soft robotic muscle.",
    "description": "Panel A labels the natural eye's eyelid, lacrimal gland, conjunctiva, cornea, Meibomian glands, and mucous, watery and oil layers. Panel B translates these ideas into a camera concept: an eyelid wiper moves across a cornea-like cover; a lacrimal passage-like nozzle directs fluid; lacrimal gland-like soft tubing supplies flow; a soft robotic muscle supports actuation. The camera is central. The diagram is a proposed biomimetic design, not a demonstrated cleaning outcome. All original labels and both panels are retained.",
    "source": "UF Robotics Workshop — Shuai Li — ESSIE, slide 6; complete PDF representation embedded in image12.emf, rasterized on white without cropping."
  },
  "eyelid-concept": {
    "project": "agentic-robotics_surgeons",
    "file": "eyelid-concept.webp",
    "width": 1600,
    "height": 1041,
    "title": "Proposed robotic eyelid mechanism",
    "alt": "Robotic eyelid drawing with a rotational hinge, sliding track, activated and deactivated SMA arrays, and arrows showing sweeping motion and debris exit.",
    "description": "The circular lens cover is surrounded by a sliding track. Two wiper positions are numbered 1 and 2. Labeled activated and deactivated shape-memory-alloy arrays act around a rotational hinge; dashed arrows indicate sweeping motion and arrows indicate debris exit. Labels, position numbers and arrow directions convey the operation independently of color. This is a mechanism proposal, not a tested cleaning sequence.",
    "source": "UF Robotics Workshop — Shuai Li — ESSIE, slide 6; complete PDF representation embedded in image13.emf, rasterized on white without cropping."
  },
  "soft-nozzle": {
    "project": "agentic-robotics_surgeons",
    "file": "soft-nozzle.webp",
    "width": 650,
    "height": 209,
    "title": "Direct cleaning flow toward the lens.",
    "alt": "Soft robotic nozzle concept with air and liquid channels and near-field, far-field, and lens-focused flow views.",
    "description": "Three panels show a nozzle with a continuum joint, air/liquid channels, and a soft robotic tip; a near-field and far-field airflow representation; and flow focused toward a lens. This is a proposed cleaning design. The drawing does not report a measured cleaning result.",
    "source": "UF Robotics Workshop — Shuai Li — ESSIE, slide 6."
  },
  "cleaning-control": {
    "project": "agentic-robotics_surgeons",
    "file": "cleaning-control.webp",
    "width": 4404,
    "height": 2365,
    "title": "Coordinate the eyelid and cleaning flow.",
    "alt": "Proposed vision-based cleaning controller links lens-state estimates to eyelid actuation and airflow control.",
    "description": "The diagram starts with fluid-contaminated and smoke-obscured system states. A vision system supports state estimation. The controller combines reinforcement-learning policy optimization and a learned model-predictive-control policy, using a reward that balances operation efficiency and cleaning. Outputs drive eyelid actuation and airflow fields, with predictions and feedback returning to the controller. This is a proposed control architecture, separate from the laboratory positioning video.",
    "source": "UF Robotics Workshop — Shuai Li — ESSIE, slide 6.",
    "preview": "cleaning-control-preview.webp"
  },
  "ai-pipeline": {
    "project": "agentic-robotics_surgeons",
    "file": "ai-pipeline.webp",
    "width": 4354,
    "height": 2497,
    "title": "AI-based surgical scene understanding",
    "alt": "Three labeled modules: surgical tool localization, instrument–tissue interaction detection, and AI feedback with 2D and 3D views in simulation.",
    "description": "Figure 2 of the related paper. Module 1 localizes surgical tools in endoscopic frames with heatmaps and an hourglass model. Module 2 detects instruments and tissue, then predicts their interaction. Module 3 returns AI feedback, with 2D and 3D views, to a surgeon wearing a mixed-reality headset in a simulated environment.",
    "source": "Liu, Tan and Li, Learning Spatial Awareness for Laparoscopic Surgery with AI Assisted Visual Feedback, arXiv:2511.02233v1, Figure 2. CC BY 4.0. Original Fig_2.jpg converted to WebP without cropping."
  },
  "spatial-feedback": {
    "project": "agentic-robotics_surgeons",
    "file": "spatial-feedback.webp",
    "width": 3809,
    "height": 1903,
    "title": "Tool contact made visible through 3D context",
    "alt": "Four simulation views compare tool contact and missed contact: 2D views at left look similar, while 3D views at right reveal the difference.",
    "description": "Figure 7 of the related paper. Left: two 2D views that look alike. Right: the matching 3D views. Top row: the tool contacts the tissue. Bottom row: the tool misses it. Simulated in Isaac Sim.",
    "source": "Liu, Tan and Li, Learning Spatial Awareness for Laparoscopic Surgery with AI Assisted Visual Feedback, arXiv:2511.02233v1, Figure 7. CC BY 4.0. Original Fig_3.jpg converted to WebP without cropping."
  }
};
