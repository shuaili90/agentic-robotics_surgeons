// Page data for Agentic and Bioinspired Robotics for Minimally Invasive Surgery.
// Edit titles, subtitle, and source notes here; the page text itself is in
// src/components/projects/. Each video lists its files under public/projects/.
export interface ProjectClip { id: string; project: string; assetProject?: string; assetId?: string; mediaVersion?: string; duration: number; title: string; caption: string; description: string; sourceFile?: string; sourceLabel?: string; sourceUrl?: string; sourceRange: string; audioNote: string; processingNote?: string; captions?: boolean; loop?: boolean; }

export const clipSourceBase = "https://github.com/DreamXLab/DreamXLab.github.io/blob/c4a06d081f7f22f9966cbc5248b7ceb61de8c842";

export const labProjects = [{
  "slug": "agentic-robotics_surgeons",
  "title": "Agentic and Bioinspired Robotics for Minimally Invasive Surgery",
  "shortTitle": "Agentic Surgical Robotics",
  "topic": "Minimally invasive surgery · Surgical robotics · Agentic AI",
  "subtitle": "Exploring robotic actuation, bioinspired mechanisms, and agentic intelligence for surgeon-centered robotic assistance.",
  "description": "Magnetically actuated surgical cameras, bioinspired optical maintenance, and agentic AI for surgeon-supervised robotic assistance.",
  "source": "https://github.com/DreamXLab/DreamXLab.github.io/blob/c4a06d081f7f22f9966cbc5248b7ceb61de8c842/_projects/Surgery_AI.md",
  "credit": "",
  "image": "surgery-cover.png",
  "imageWidth": 617,
  "imageHeight": 347,
  "imageAlt": "Robot-mounted external actuator and an internal camera in an abdominal model.",
  "question": "Move the camera. Keep a usable view.",
  "abstract": "Camera positioning is a concrete task within minimally invasive surgery. The benchtop prototype explores external actuation of an internal camera. Maintaining a usable view throughout a procedure adds another problem: visibility can deteriorate even when the camera is correctly positioned.",
  "heroClips": [
    "camera-assembly",
    "bench-prototype"
  ],
  "demoClips": [
    "camera-guidance"
  ],
  "sourceNotes": [
    "Page copy follows the supplied text, Agentic and Bioinspired Robotics for Minimally Invasive Surgery (November 2026).",
    "Redefine Surgery Intelligence with TEAM, slides 3–5: mechanism diagrams, rendered motion, and laboratory prototype.",
    "UF Robotics Workshop — Shuai Li — ESSIE, slides 2, 5–6: surgical workspace illustration, visual obstruction example, Eye Concept, robotic eyelid, soft nozzle, and proposed cleaning control. The cleaning concept is separate from the prototype footage.",
    "Learning Spatial Awareness for Laparoscopic Surgery with AI Assisted Visual Feedback, Songyang Liu, Yunpeng Tan, and Shuai Li, 2025 IEEE International Conference on Intelligent Reality (ICIR), DOI 10.1109/ICIR68135.2025.11361590. Figures 2 and 7 are reproduced from arXiv:2511.02233v1 under CC BY 4.0, converted to WebP without cropping."
  ]
}];

export const projectClips: ProjectClip[] = [
  {
    "id": "camera-guidance",
    "project": "agentic-robotics_surgeons",
    "duration": 12,
    "title": "External actuation and internal camera motion",
    "caption": "A rendered view connects an external actuator with an internal camera.",
    "description": "A split-screen computer animation shows an external actuator moving above an abdominal surface on the left and a capsule-like camera below the wall on the right. Curved lines depict the actuator–camera relationship. As the external device changes position, the internal camera changes its position or orientation. Black margins from the original video remain visible. The image represents a simulated hardware concept, not footage of a patient or a clinical outcome.",
    "sourceFile": "assets/video/surgery_ai/video_1.mp4",
    "sourceRange": "00:36–00:48",
    "audioNote": "The source audio track is digitally silent; it is omitted from the web excerpt."
  },
  {
    "id": "bench-prototype",
    "project": "agentic-robotics_surgeons",
    "duration": 8.8,
    "title": "Robot-mounted actuator in a laboratory setup",
    "caption": "The physical robot moves above a benchtop abdominal model.",
    "description": "A fixed laboratory camera faces an open, curved abdominal model on a table. A robot-mounted actuator above the model shifts position and orientation as part of the robot arm moves at the right of the frame. Fixtures, supports, and laboratory equipment remain visible. This clip shows an external benchtop setup; it does not show surgery on a person or quantify positioning accuracy. The complete frame and original motion speed are retained.",
    "sourceFile": "assets/video/surgery_ai/video_2.mp4",
    "sourceRange": "00:00–00:08.8",
    "audioNote": "The web excerpt is silent; source laboratory sounds are omitted. No spoken instruction is used in this presentation."
  },
  {
    "id": "camera-assembly",
    "project": "agentic-robotics_surgeons",
    "duration": 12,
    "title": "Inside the camera concept",
    "caption": "An exploded animation reveals the camera’s component arrangement.",
    "description": "Against a black background, a capsule-like camera separates into aligned components. Transparent outer pieces, a cylindrical body, a circuit-board-like component, rings, and end parts appear along the same axis. The viewpoint changes slightly while the assembly remains centered. This is an excerpt of the same concept animation as the actuator-and-camera view.",
    "sourceFile": "assets/video/surgery_ai/video_1.mp4",
    "sourceRange": "00:05–00:17",
    "audioNote": "The source audio track is digitally silent; it is omitted from the web excerpt."
  }
];
